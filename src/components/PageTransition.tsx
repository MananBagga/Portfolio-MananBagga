import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.2, 0.9, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: [0.2, 0.9, 0.3, 1] as const,
    },
  },
}

const neonReveal = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.45,
      ease: [0.2, 0.9, 0.3, 1] as const,
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      duration: 0.3,
      ease: [0.2, 0.9, 0.3, 1] as const,
    },
  },
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      {/* Neon reveal panel */}
      <motion.div
        className="fixed inset-0 z-50 origin-left pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #0ff6ff 0%, #7b61ff 100%)',
        }}
        variants={neonReveal}
        initial="initial"
        animate="animate"
        exit="exit"
      />

      {/* Content */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  )
}
