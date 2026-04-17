import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Code, Cpu, Database } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Parallax Background elements */}
      <motion.div 
        style={{ x: mousePosition.x * 2, y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"
      />
      <motion.div 
        style={{ x: -mousePosition.x * 2, y: y2 }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob [animation-delay:2000ms]"
      />
      <motion.div 
        style={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
        className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob [animation-delay:4000ms]"
      />

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[15%] hidden lg:block text-primary-400/50"
      >
        <Code size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[15%] hidden lg:block text-accent-400/50"
      >
        <Database size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/4 right-[25%] hidden lg:block text-blue-400/40"
      >
        <Cpu size={40} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo with 3D Tilt */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={2000}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] relative z-20 ring-4 ring-dark-900 bg-dark-800 isolate"
            >
              {/* Rotating Glow Ring behind image */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full blur-[8px] opacity-70 -z-10"
              />
              <img 
                src="/profile_pro.jpg" 
                alt="Ankur Yadav" 
                className="w-full h-full object-cover object-top transition-transform duration-500 filter contrast-[1.05] brightness-[1.02] saturate-[1.05] drop-shadow-2xl" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                }}
              />
            </motion.div>
          </Tilt>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-5 py-2 rounded-full glass border border-primary-500/30 text-primary-400 text-sm font-semibold tracking-wide backdrop-blur-xl"
          >
            👋 Hello, Enthusiasts!
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            I'm <span className="text-gradient inline-block">Ankur Yadav</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-300 font-medium mb-8 max-w-2xl h-10 flex items-center justify-center gap-2 w-full"
          >
            <span>Computer Science Student &</span>
            <span className="text-white font-semibold min-w-[200px] text-left">
              <Typewriter
                words={['Software Developer', 'AI Enthusiast', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 max-w-xl mb-10 text-lg leading-relaxed"
          >
            I build modern, scalable, and visually stunning web experiences. Passionate about turning complex problems into elegant solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a href="#projects" className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] w-full sm:w-auto text-center border border-primary-400 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass hover:bg-white/10 border border-white/20 text-white font-medium transition-all hover:border-white/40 w-full sm:w-auto text-center hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="p-2 text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 text-sm font-medium">
          Scroll Down
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
