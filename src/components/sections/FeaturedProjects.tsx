import { Reveal } from "../animations/Reveal"
import { ProjectCard } from "../projects/ProjectCard"

const PROJECTS = [
  {
    title: "AVITA PG PLATFORM",
    category: "Fullstack Management Platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    direction: "left" as const,
  },
  {
    title: "TRADO TRADING",
    category: "Fintech Platform",
    image: "/images/trado.png",
    direction: "right" as const,
  },
  {
    title: "THE ECO EDIT",
    category: "CMS-Driven Lifestyle Platform",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    direction: "left" as const,
  },
  {
    title: "RESCALERS CMS",
    category: "Enterprise Web Solution",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    direction: "right" as const,
  },
]

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-32 gap-12">
          <Reveal>
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.4em] font-medium text-accent-blue/60 mb-2 block">Our Case Studies</span>
              <h2 className="text-4xl md:text-6xl lg:text-[8vw] font-grotesk font-black text-foreground tracking-tighter leading-none uppercase">
                SELECTED<br /><span className="text-accent-blue">WORKS.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl text-foreground/40 max-w-sm mb-4 leading-relaxed font-light">
              Explore our recent projects where design meets functionality to create digital masterpieces.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-32 lg:gap-48">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
