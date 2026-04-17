import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, Code2, GraduationCap, Award } from 'lucide-react';

function AnimatedCounter({ from, to, duration = 2, label }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return (
    <div ref={nodeRef} className="flex flex-col items-center justify-center p-4 glass-card group">
      <span className="text-4xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
        {count}+
      </span>
      <span className="text-sm text-slate-400 mt-2 font-medium tracking-wide">{label}</span>
    </div>
  );
}

export default function About() {
  const timelineData = [
    { year: '2023 - Present', title: 'B.Tech Computer Science', desc: 'Pursuing degree with focus on software engineering & AI.', icon: <GraduationCap size={20} /> },
    { year: '2024', title: 'Full Stack Developer Intern', desc: 'Built scalable web apps using React and Node.js.', icon: <Briefcase size={20} /> },
    { year: '2025', title: 'Open Source Contributor', desc: 'Contributed to major open source libraries.', icon: <Code2 size={20} /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Discover</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </motion.div>

        {/* Top Section: Intro */}
        <div className="mb-24 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 max-w-4xl text-center items-center"
          >
            <h3 className="text-3xl font-bold text-white leading-tight mb-2">
              Transforming ideas into <br/>
              <span className="text-gradient">digital reality</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Hi there! I'm <strong className="text-white font-semibold">Ankur Yadav</strong>, a passionate Computer Science student dedicated to learning and building innovative software solutions. I specialize in web development, creating responsive, user-friendly, and performant applications.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              My journey in tech is driven by an insatiable curiosity and a love for problem-solving. When I'm not coding, you'll find me exploring the latest AI trends, reading tech blogs, or participating in hackathons.
            </p>
            
            {/* Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 w-full text-left">
              {[
                { label: 'Name', value: 'Ankur Yadav' },
                { label: 'Education', value: 'CS Undergrad' },
                { label: 'Role', value: 'Software Developer' },
                { label: 'Location', value: 'Punjab, India' },
              ].map((item, i) => (
                <div key={i} className="glass p-4 rounded-xl border border-white/5 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col items-center text-center sm:items-start sm:text-left">
                  <p className="text-sm text-primary-400/80 mb-1">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Main 2-Column Split: Stats & Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-primary-400" />
              Impact in Numbers
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <AnimatedCounter from={0} to={5} duration={2} label="Projects Completed" />
              <AnimatedCounter from={0} to={10} duration={2.5} label="Technologies Mastered" />
              <AnimatedCounter from={0} to={50} duration={3} label="GitHub Contributions" />
              <AnimatedCounter from={0} to={2} duration={1.5} label="Years Experience" />
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Code2 className="text-accent-400" />
              Tech Journey
            </h3>
            <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-8">
              {timelineData.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-dark-900 border-2 border-primary-500 flex items-center justify-center text-primary-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10">
                    {item.icon}
                  </div>
                  <div className="glass-card p-6 flex flex-col gap-2 hover:-translate-y-1 transition-transform border border-white/5 hover:border-primary-500/20">
                    <span className="text-sm font-semibold text-accent-400 tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
