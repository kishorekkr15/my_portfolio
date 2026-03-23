import { Reveal } from "../animations/Reveal"
import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-10 border border-accent-blue/20">
              <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-blue">Get in touch</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} distance={40}>
            <h2 className="text-5xl md:text-[8vw] font-grotesk font-black text-foreground tracking-tighter leading-none uppercase mb-16">
              LET'S START A<br />
              <span className="text-accent-blue relative">
                PROJECT
                <motion.span 
                  className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[3px] md:h-[6px] bg-accent-blue/30"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.4} distance={40}>
            <div className="flex flex-col items-center gap-12 mt-4">
              <a 
                href="mailto:kishorekumarkkr15@gmail.com"
                className="group relative flex items-center gap-4 text-xl md:text-3xl lg:text-5xl font-grotesk font-bold text-foreground/80 transition-colors hover:text-foreground"
              >
                <div className="absolute -inset-x-8 -inset-y-4 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl -z-10" />
                kishorekumarkkr15@gmail.com
                <motion.span 
                  className="text-accent-blue text-4xl block group-hover:translate-x-2 transition-transform duration-500"
                >
                  →
                </motion.span>
              </a>

              <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
                {[
                  { label: "Phone", value: "+91 8489519449", href: "tel:+918489519449" },
                  { label: "LinkedIn", value: "/in/kishore-kumar", href: "https://www.linkedin.com/in/kishore-kumar-680aa1178/" },
                  { label: "GitHub", value: "/kishorekkr15", href: "https://github.com/kishorekkr15" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-foreground/30">{item.label}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold text-foreground hover:text-accent-blue transition-colors duration-300">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Large Decorative Text Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-0 -z-0 select-none pointer-events-none">
        <div className="text-[200px] md:text-[350px] font-black font-grotesk text-white/[0.02] tracking-tighter leading-none uppercase">
          CONTACT
        </div>
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-[800px] h-[400px] bg-accent-blue/5 rounded-full blur-[150px]" />
      </div>
    </section>
  )
}
