import ContactForm from './ContactForm'

const contactLinks = [
  {
    name: 'Email',
    value: 'mananbagga0310@gmail.com',
    href: 'mailto:mananbagga0310@gmail.com',
    icon: '📧',
    color: 'neon-cyan',
    ariaLabel: 'Send email to Manan Bagga',
  },
  {
    name: 'Phone',
    value: '+91 9784227907',
    href: 'tel:+919784227907',
    icon: '📱',
    color: 'neon-violet',
    ariaLabel: 'Call Manan Bagga',
  },
  {
    name: 'GitHub',
    value: 'MananBagga',
    href: 'https://github.com/MananBagga',
    icon: '💻',
    color: 'neon-mint',
    ariaLabel: 'Visit Manan Bagga GitHub profile',
  },
  {
    name: 'LinkedIn',
    value: 'manan-bagga',
    href: 'https://www.linkedin.com/in/manan-bagga-893189247/',
    icon: '💼',
    color: 'neon-cyan',
    ariaLabel: 'Connect with Manan Bagga on LinkedIn',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container"
      aria-labelledby="contact-heading"
    >
      <div className="text-center mb-16">
        <h2
          id="contact-heading"
          className="font-display text-4xl lg:text-5xl mb-4"
        >
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Let&apos;s collaborate on your next project or discuss opportunities
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              aria-label={link.ariaLabel}
              className="card-glass group cursor-pointer hover:border-neon-cyan/50 transition-all duration-300 animate-scale-in focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-dark"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`text-4xl transition-transform group-hover:scale-110`}
                >
                  {link.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{link.name}</div>
                  <div
                    className={`font-medium text-${link.color} group-hover:text-gradient transition-colors`}
                  >
                    {link.value}
                  </div>
                </div>
                <div className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-strong rounded-3xl p-8 lg:p-12 neon-border text-center">
          <h3 className="text-2xl font-display mb-4">
            <span className="text-gradient">Ready to work together?</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:mananbagga0310@gmail.com" className="btn-primary">
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/manan-bagga-893189247/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-dark-border text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Manan Bagga. Built with React, Vite
          & Tailwind CSS
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed with passion for performance and accessibility
        </p>
      </footer>
    </section>
  )
}
