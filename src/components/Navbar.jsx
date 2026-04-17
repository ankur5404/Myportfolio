import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

function MagneticNavLink({ children, href, onClick, active }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative px-4 py-2 group text-sm font-medium transition-colors ${
        active ? 'text-white' : 'text-slate-300 hover:text-white'
      }`}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glowing Border & Background on Hover */}
      <span className={`absolute inset-0 rounded-lg border transition-all duration-300 ${
        active ? 'border-primary-500/30 bg-primary-500/5' : 'border-transparent group-hover:border-primary-500/30 group-hover:bg-primary-500/10'
      }`} />
      
      {/* Glowing Underline Animation */}
      <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-primary-500 transition-transform origin-left duration-300 shadow-[0_0_8px_rgba(59,130,246,0.8)] ${
        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`} />
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Scroll Spy functionality
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between relative">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white relative z-10">
          Ankur<span className="text-primary-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 relative z-10">
          {navLinks.map((link) => (
            <MagneticNavLink 
              key={link.name} 
              href={link.href}
              active={activeSection === link.href.substring(1)}
            >
              {link.name}
            </MagneticNavLink>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a
            href="#contact"
            className="px-6 py-2 ml-2 rounded-full relative group overflow-hidden bg-primary-600 text-white text-sm font-medium"
          >
            <span className="relative z-10">Hire Me</span>
            {/* Glowing Pulse Animation */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center" />
            <span className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-sm opacity-0 group-hover:opacity-40 animate-pulse transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-10">
          <button 
            onClick={toggleTheme}
            className="text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col py-4 px-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                    activeSection === link.href.substring(1) 
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-center px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
