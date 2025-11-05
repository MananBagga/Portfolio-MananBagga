// Analytics utilities for tracking user interactions

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    plausible?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export const initAnalytics = () => {
  // Google Analytics
  if (
    import.meta.env.VITE_GA_TRACKING_ID &&
    import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
  ) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_TRACKING_ID}`
    document.head.appendChild(script)

    window.gtag = function gtag() {
      window.dataLayer = window.dataLayer || []
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    })
  }

  // Plausible Analytics (privacy-friendly alternative)
  if (import.meta.env.VITE_PLAUSIBLE_DOMAIN) {
    const script = document.createElement('script')
    script.defer = true
    script.dataset.domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
  }
}

export const trackEvent = (
  eventName: string,
  eventData?: Record<string, unknown>
) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventData)
  }

  // Plausible
  if (window.plausible) {
    window.plausible(eventName, { props: eventData })
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', eventName, eventData)
  }
}

export const trackPageView = (url: string) => {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: url,
    })
  }

  if (window.plausible) {
    window.plausible('pageview', { props: { url } })
  }
}
