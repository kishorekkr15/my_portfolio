export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 md:py-24 bg-[#080808] border-t border-border mt-32">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <a href="#" className="font-grotesk font-black text-2xl tracking-tighter hover:text-accent-blue transition-colors duration-500 uppercase">
            KISHORE<span className="text-accent-blue">.</span>DEV
          </a>
          <p className="text-sm font-light text-foreground/40 max-w-xs leading-relaxed">
            Pushing boundaries and redefining the limits of digital design.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-end">
          <div className="flex gap-12 font-medium tracking-widest text-xs uppercase opacity-40">
            <a href="#about" className="hover:opacity-100 transition-opacity duration-300">About</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity duration-300">Work</a>
            <a href="#skills" className="hover:opacity-100 transition-opacity duration-300">Expertise</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity duration-300">Contact</a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-bold tracking-widest uppercase text-foreground/20">
            <span>© {currentYear} CREATIVE STUDIO. ALL RIGHTS RESERVED.</span>
            <div className="hidden md:block w-1 h-1 bg-foreground/10 rounded-full" />
            <span>BUILT WITH PASSION & MOTION.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
