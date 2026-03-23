import { Reveal } from "../animations/Reveal"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal direction="left" distance={100} duration={1}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent-blue/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                alt="Process"
                className="rounded-2xl w-full h-[400px] md:h-[600px] object-cover grayscale brightness-50 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-75"
              />
              <div className="absolute bottom-8 right-8 glass p-6 rounded-2xl max-w-xs transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4">
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light">
                  "I believe great design is invisible. It’s a feeling that guides you effortlessly."
                </p>
                <div className="mt-4 flex gap-2">
                  <div className="w-1 h-1 bg-accent-blue rounded-full" />
                  <div className="w-1 h-1 bg-accent-blue/60 rounded-full" />
                  <div className="w-1 h-1 bg-accent-blue/20 rounded-full" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-12">
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-[6vw] font-grotesk font-black text-foreground tracking-tighter uppercase leading-[0.9]">
                MY VISION<span className="text-accent-blue">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4} distance={40}>
              <div className="flex flex-col gap-8">
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light">
                  I bridge the gap between complex engineering and elegant design. With a foundation in Mechanical Engineering and a pivot into Fullstack Development, I bring a unique analytical perspective to software architecture.
                </p>
                <p className="text-lg md:text-xl text-foreground/50 leading-relaxed font-light">
                  Currently building scalable web and mobile applications at Quantzi Infotech. Specialized in MERN stack, React Native, and high-performance cloud deployments (AWS & Docker).
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6} distance={40}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-4 pt-12 border-t border-border">
                {[
                  { label: "Experience", value: "3+ Years" },
                  { label: "Tech Stack", value: "MERN +" },
                  { label: "Projects", value: "8+ Live" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/40">{stat.label}</span>
                    <span className="text-2xl md:text-3xl font-grotesk font-black text-accent-blue">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Background Graphic elements */}
      <motion.div
        className="absolute bottom-0 right-0 p-12 lg:p-24 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      >
        <div className="text-[150px] md:text-[250px] font-black font-grotesk text-[#0e0e0e] leading-none select-none">
          STORY
        </div>
      </motion.div>
    </section>
  )
}
