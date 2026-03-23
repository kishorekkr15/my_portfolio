import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#skills" },
    { name: "Story", href: "#about" },
    { name: "Let's Connect", href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          scrolled || isOpen ? "py-4 md:py-6 glass" : "py-8 md:py-12"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-grotesk font-black text-2xl tracking-tighter hover:text-accent-blue transition-colors duration-500">
            KISHORE<span className="text-accent-blue">.</span>DEV
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium tracking-widest uppercase py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-blue group-hover:w-full transition-all duration-500 ease-out" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-foreground" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-[2px] bg-foreground" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-foreground" 
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[55] flex flex-col justify-center p-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-grotesk font-black uppercase tracking-tighter hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-20 pt-12 border-t border-border flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-foreground/40">Say Hello</p>
              <a href="mailto:kishorekumarkkr15@gmail.com" className="text-xl font-medium">kishorekumarkkr15@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
