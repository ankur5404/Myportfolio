import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const [clicks, setClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleNameClick = () => {
    if (clicks === 4) {
      setShowEasterEgg(true);
      setClicks(0);
      setTimeout(() => setShowEasterEgg(false), 5000);
    } else {
      setClicks(prev => prev + 1);
    }
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 mt-20 z-10 overflow-hidden">
      {/* Footer background styling */}
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-md -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        {/* Main Footer Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span 
              onClick={handleNameClick}
              className="text-2xl font-bold tracking-tighter text-white cursor-pointer select-none inline-flex items-center gap-1 group"
            >
              Ankur<span className="text-primary-400">.</span>
              {/* Easter egg stars tracking clicks */}
              <div className="flex gap-0.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < clicks ? 'bg-accent-400' : 'bg-white/20'}`} />
                ))}
              </div>
            </span>
            <p className="text-slate-400 text-sm">
              Building the future of web, one pixel at a time.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(10,102,194,0.4)]" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ankursga1212" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-dark-700 hover:border-dark-700 transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,255,255,0.1)]" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all transform hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(29,161,242,0.4)]" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Ankur Yadav. Made with 
            <Heart size={14} className="text-red-500 mx-1 animate-pulse" /> 
            & React.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Easter Egg Overlay */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-100px] bg-[conic-gradient(from_0deg,var(--tw-gradient-stops))] from-primary-500 via-accent-500 to-primary-500 rounded-full opacity-20 blur-xl"
              />
              <div className="glass-card p-8 rounded-3xl border-2 border-primary-500/50 shadow-[0_0_50px_rgba(59,130,246,0.5)] flex flex-col items-center text-center max-w-md">
                <Sparkles size={48} className="text-accent-400 mb-4 animate-bounce" />
                <h2 className="text-3xl font-black text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
                  You found the secret!
                </h2>
                <p className="text-lg text-slate-300 font-medium">
                  Thanks for thoroughly exploring my portfolio! You have a great eye for detail. Let's work together!
                </p>
              </div>
            </div>
            
            {/* Confetti effect using Framer Motion simple particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: 0, y: 0, opacity: 1, 
                  scale: Math.random() + 0.5,
                  backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 4)]
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * window.innerWidth, 
                  y: (Math.random() - 0.5) * window.innerHeight * 2,
                  opacity: 0,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 w-3 h-3 rounded-sm"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
