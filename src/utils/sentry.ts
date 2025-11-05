// Error monitoring with Sentry

export const initSentry = async () => {
  if (
    import.meta.env.VITE_SENTRY_DSN &&
    import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true' &&
    !import.meta.env.DEV
  ) {
    const Sentry = await import('@sentry/react')

    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || 'production',
      tracesSampleRate: 0.1, // 10% of transactions for performance monitoring
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      beforeSend(event: unknown) {
        // Filter out non-error events
        const errorEvent = event as { level?: string }
        if (errorEvent.level === 'warning') {
          return null
        }
        return event
      },
    })
  }
}

export const captureException = (
  error: Error,
  context?: Record<string, unknown>
) => {
  if (import.meta.env.DEV) {
    console.error('🔴 Error:', error, context)
  } else {
    import('@sentry/react').then(Sentry => {
      Sentry.captureException(error, { extra: context })
    })
  }
}
