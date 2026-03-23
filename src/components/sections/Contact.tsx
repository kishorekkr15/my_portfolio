import { Reveal } from "../animations/Reveal"
import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 lg:py-64 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-accent-blue/60 mb-8 block">Ready for the Next Chapter?</span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-6xl md:text-9xl font-grotesk font-black text-foreground tracking-tighter leading-none uppercase mb-12">
            LET'S MAKE IT<br/><span className="text-accent-blue underline underline-offset-[20px] decoration-[4px]">HAPPEN.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-12 mt-12 items-center">
          <Reveal delay={0.6} distance={40}>
            <a 
              href="mailto:kishorekumarkkr15@gmail.com"
              className="group relative text-2xl md:text-4xl lg:text-5xl font-grotesk font-bold text-foreground transition-colors duration-500 hover:text-accent-blue flex items-center gap-6"
            >
              kishorekumarkkr15@gmail.com
              <motion.div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-accent-blue group-hover:border-accent-blue group-hover:text-background"
                whileHover={{ rotate: 45 }}
              >
                →
              </motion.div>
            </a>
          </Reveal>

          <Reveal delay={0.8} distance={40}>
            <div className="flex gap-10">
              {["LinkedIn", "GitHub", "+91 8489519449"].map((social) => (
                <a 
                  key={social} 
                  href={social.includes('@') || social.includes('+') ? `tel:${social}` : "#"} 
                  className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 transition-colors duration-500 hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[180px] opacity-40 animate-pulse pointer-events-none" />
      </div>
    </section>
  )
}
