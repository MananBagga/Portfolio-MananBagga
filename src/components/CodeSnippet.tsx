import { useState } from 'react'
import { motion } from 'framer-motion'

interface CodeSnippetProps {
  code: string
  language: string
  title: string
  description?: string
}

export default function CodeSnippet({
  code,
  language,
  title,
  description,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting for common patterns
  const highlightCode = (code: string) => {
    return code
      .replace(
        /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)\b/g,
        '<span class="text-neon-violet">$1</span>'
      )
      .replace(
        /(['"`])(?:(?=(\\?))\2.)*?\1/g,
        '<span class="text-neon-mint">$&</span>'
      )
      .replace(/\/\/.*/g, '<span class="text-gray-500">$&</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-neon-cyan">$1</span>')
  }

  return (
    <div className="card-glass">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-lg font-display text-gradient mb-1">{title}</h4>
          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
        </div>
        <motion.button
          onClick={handleCopy}
          className="btn-secondary text-xs px-4 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </motion.button>
      </div>

      <div className="relative">
        <div className="absolute top-2 left-2 text-xs text-gray-500 uppercase tracking-wider">
          {language}
        </div>
        <pre className="bg-dark-lighter rounded-lg p-6 overflow-x-auto text-sm leading-relaxed pt-8">
          <code
            className="font-mono text-gray-300"
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          />
        </pre>
      </div>
    </div>
  )
}
