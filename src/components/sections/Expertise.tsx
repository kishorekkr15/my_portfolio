import { Reveal } from "../animations/Reveal"
import { motion } from "framer-motion"

const SKILLS = [
  { name: "MERN STACK", level: "95%" },
  { name: "REACT NATIVE", level: "85%" },
  { name: "BACKEND (NODE/GOLANG)", level: "90%" },
  { name: "DEVOPS (DOCKER/AWS)", level: "80%" },
  { name: "DATABASE (MONGO/SQL)", level: "88%" },
]

const STACK = [
  "React.js", "Node.js", "Express.js", "MongoDB", "Golang", "Next.js",
  "Redux Toolkit", "TypeScript", "Docker", "AWS EC2", "Redis", "Firebase",
  "React Native", "PostgreSQL", "Tailwind CSS", "Git/GitHub", "Nginx"
]

export const Expertise = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
          <div className="flex flex-col gap-12">
            <Reveal>
              <h2 className="text-4xl md:text-6xl lg:text-[8vw] font-grotesk font-black text-foreground tracking-tighter uppercase leading-[0.85] mb-8">
                THE<br/><span className="text-accent-blue">EXPERTISE.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed font-light max-w-lg mb-4">
                Mastering the balance between aesthetic beauty and technical performance to create high-impact software solutions.
              </p>
            </Reveal>

            <div className="flex flex-wrap gap-4 mt-8">
              {STACK.map((item, i) => (
                <Reveal key={item} delay={i * 0.05} distance={10}>
                  <div className="px-6 py-3 glass rounded-full text-xs font-bold tracking-widest uppercase border border-white/5 hover:border-accent-blue/30 transition-all duration-500 cursor-default">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-16 justify-center">
            {SKILLS.map((skill, index) => (
              <div key={skill.name} className="group flex flex-col gap-4">
                <Reveal delay={index * 0.1} direction="up" width="100%">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-lg md:text-xl font-medium tracking-widest text-foreground font-grotesk">{skill.name}</span>
                    <span className="text-sm font-bold text-accent-blue">{skill.level}</span>
                  </div>
                  <div className="h-[1px] w-full bg-border relative overflow-hidden">
                    <motion.div 
                      className="absolute left-0 top-0 h-full bg-accent-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background large stroke text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-0 select-none pointer-events-none opacity-[0.02]">
        <div className="text-[200px] md:text-[350px] font-black font-grotesk text-foreground uppercase tracking-tighter rotate-[-9deg]">
          EXPERTISE
        </div>
      </div>
    </section>
  )
}
