import { motion } from 'framer-motion'

export const AnimatedItem = motion.div

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.2, 0.9, 0.3, 1] as const,
    },
  },
}
