import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot: string // Bot trap
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      setStatus('error')
      setErrorMessage('Invalid submission detected')
      return
    }

    setStatus('loading')

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID

      if (!formspreeId) {
        throw new Error('Formspree ID not configured')
      }

      // Using Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      setStatus('error')
      setErrorMessage(
        'Failed to send message. Please try again or use email directly.'
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto card-glass p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.9, 0.3, 1] as const }}
    >
      <h3 className="text-2xl font-display mb-6 text-gradient">
        Send Me a Message
      </h3>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name <span className="text-neon-cyan">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
            placeholder="Your name"
            aria-required="true"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email <span className="text-neon-cyan">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
            placeholder="your.email@example.com"
            aria-required="true"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Subject <span className="text-neon-cyan">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all"
            placeholder="Project inquiry, collaboration, etc."
            aria-required="true"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message <span className="text-neon-cyan">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-dark-lighter border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
            placeholder="Tell me about your project or inquiry..."
            aria-required="true"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
          whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-neon-mint/10 border border-neon-mint/30 rounded-lg text-neon-mint text-center"
          >
            ✓ Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center"
          >
            ✗ {errorMessage}
          </motion.div>
        )}
      </div>

      {/* Alternative Contact Methods */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400 text-center mb-4">
          Or reach me directly via:
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:mananbagga0310@gmail.com"
            className="btn-secondary text-sm"
            aria-label="Send email to Manan Bagga"
          >
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/in/manan-bagga-893189247/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
            aria-label="Connect on LinkedIn"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/MananBagga"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
            aria-label="View GitHub profile"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </motion.form>
  )
}
