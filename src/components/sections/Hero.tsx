import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "../animations/Reveal"
import { StaggeredText } from "../animations/StaggeredText"
import { useRef } from "react"

export const Hero = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  return (
    <section
      ref={targetRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0a0a0a] via-[#121212] to-[#0a0a0a] opacity-50"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
      />

      {/* Large Neon Blur Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[160px] pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          <Reveal delay={0.2} direction="up" distance={30}>
            <div className="inline-flex items-center gap-4 py-2 px-5 glass rounded-full mb-8 font-medium tracking-widest text-xs uppercase border-accent-blue/20">
              <span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
              Open to New Projects
            </div>
          </Reveal>

          <StaggeredText
            text="DIGITAL ARCHITECT CRAFTING SCALABLE MERN SOLUTIONS."
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[8vw] font-grotesk font-black text-foreground tracking-tighter leading-[0.85] mb-8 md:mb-12 uppercase break-words"
            delay={0.1}
            stagger={0.06}
          />

          <Reveal delay={1.2} direction="up" distance={40}>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mt-12">
              <p className="text-xl md:text-2xl text-foreground/60 max-w-lg leading-relaxed font-light">
                Hello, I'm <span className="text-foreground font-bold">Kishorekumar S</span>, a Fullstack Developer specializing in high-performance web and mobile ecosystems at Quantzi Infotech.
              </p>

              <motion.a
                href="#projects"
                className="group relative px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-500 hover:pr-14 will-change-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Works
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  →
                </span>
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
