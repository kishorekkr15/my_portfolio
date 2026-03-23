import { motion, type Variants } from "framer-motion"

interface StaggeredTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export const StaggeredText = ({ 
  text, 
  className = "", 
  delay = 0, 
  stagger = 0.04,
}: StaggeredTextProps) => {
  const words = text.split(" ")

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay 
      },
    },
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
