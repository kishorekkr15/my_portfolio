import { motion } from "framer-motion"
import { Reveal } from "../animations/Reveal"

interface Project {
  title: string
  category: string
  image: string
  direction: "left" | "right"
}

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <Reveal 
      direction={project.direction} 
      delay={index * 0.1}
      width="100%"
    >
      <motion.div 
        className="group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl bg-card border border-border cursor-pointer"
        whileHover="hover"
      >
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        />

        {/* Project Image */}
        <motion.div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          variants={{
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Info */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 w-full">
          <motion.div
            variants={{
              hover: { x: 6 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs md:text-sm font-medium text-accent-blue/80 mb-2 uppercase tracking-widest">{project.category}</p>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-grotesk font-bold text-foreground drop-shadow-lg leading-tight">{project.title}</h3>
          </motion.div>
          
          <motion.div 
            className="h-[1px] bg-accent-blue/30 mt-6 w-0 group-hover:w-full transition-all duration-700 ease-out"
          />
        </div>

        {/* Soft Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 bg-gradient-to-tr from-accent-blue/40 to-transparent pointer-events-none" />
      </motion.div>
    </Reveal>
  )
}
