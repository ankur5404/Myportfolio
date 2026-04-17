import { motion } from 'framer-motion';
import { Award, Star, BookOpen, Flame, Code, Github } from 'lucide-react';

const achievements = [
  {
    title: 'Active Hackathon Participant & Problem Solver',
    organization: 'Global Tech Innovators',
    date: 'Oct 2024',
    description: 'Collaborated with teams to build innovative solutions under time constraints. Engaging in continuous learning and problem solving.',
    icon: Star,
    color: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    glowColor: 'shadow-[0_0_20px_rgba(251,191,36,0.3)]'
  },
  {
    title: 'AWS Certified Developer Associate',
    organization: 'Amazon Web Services',
    date: 'Aug 2024',
    description: 'Achieved certification demonstrating proficiency in developing, deploying, and debugging cloud-based applications using AWS.',
    icon: Award,
    color: 'text-primary-400',
    borderColor: 'border-primary-400/30',
    glowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]'
  },
  {
    title: 'Consistent DSA Practice',
    organization: 'LeetCode Platform',
    date: 'Jun 2024',
    description: 'Solved 300+ data structure and algorithm problems, focusing on continuous logic improvement and problem-solving skills.',
    icon: Flame,
    color: 'text-red-400',
    borderColor: 'border-red-400/30',
    glowColor: 'shadow-[0_0_20px_rgba(248,113,113,0.3)]'
  },
  {
    title: 'Open Source Contributor',
    organization: 'Various Projects (React, Tailwind)',
    date: '2023 - Present',
    description: 'Active contributor to major open-source web development libraries. Helped fix bugs and improve documentation.',
    icon: Github,
    color: 'text-accent-400',
    borderColor: 'border-accent-400/30',
    glowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full mix-blend-screen filter blur-[120px] -translate-y-1/2 -z-10 animate-blob"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-accent-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements & <span className="text-accent-400">Awards</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg text-balance">
            Recognition and milestones that mark my journey as a developer and continuous learner.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                  
                  {/* Timeline Node (Icon) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-dark-900 border-2 ${item.borderColor} flex items-center justify-center z-10 ${item.glowColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${item.color} animate-pulse`} />
                  </motion.div>

                  {/* Desktop Empty Space for alternating layout */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'order-1' : 'order-3'}`}></div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'order-3 md:text-right' : 'order-1 md:text-left'} `}
                  >
                    <div className={`glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group-hover:${item.glowColor} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} relative z-10`}>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-slate-300 mb-4 inline-block border border-white/10">
                          {item.date}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className={`text-sm font-semibold mb-4 ${item.color}`}>
                          {item.organization}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
