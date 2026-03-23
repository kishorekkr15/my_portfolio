import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up",
  distance = 60,
  duration = 0.8
}: RevealProps) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const adjustedDistance = isMobile ? distance * 0.5 : distance

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? adjustedDistance : direction === "down" ? -adjustedDistance : 0,
      x: direction === "left" ? adjustedDistance : direction === "right" ? -adjustedDistance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
