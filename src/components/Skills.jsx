import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiJavascript, 
  SiTypescript, SiNodedotjs, SiNextdotjs, SiMongodb, SiPython
} from 'react-icons/si';
import { FaHtml5, FaDatabase } from 'react-icons/fa';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const skillsData = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]', percentage: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]', percentage: 85, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', percentage: 80, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', percentage: 75, category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]', percentage: 70, category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]', percentage: 75, category: 'Backend' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]', percentage: 65, category: 'Backend' },
  { name: 'SQL', icon: FaDatabase, color: 'text-[#336791]', percentage: 70, category: 'Backend' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-[#E34F26]', percentage: 95, category: 'Frontend' },
];

const categories = ['All', 'Frontend', 'Backend'];

const radarData = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 70, fullMark: 100 },
  { subject: 'UI/UX', A: 85, fullMark: 100 },
  { subject: 'Problem Solving', A: 80, fullMark: 100 },
  { subject: 'Architecture', A: 75, fullMark: 100 },
  { subject: 'DevOps', A: 60, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 border border-primary-500/30">
        <p className="text-white font-semibold flex items-center gap-2">
          {payload[0].payload.subject}: <span className="text-primary-400">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = skillsData.filter(skill => 
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/10 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2 -z-10 animate-blob"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-600/10 rounded-full mix-blend-screen filter blur-[100px] -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">My Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg text-balance">
            A comprehensive list of the technologies and tools I use to build scalable and modern applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mt-12">
          {/* Radar Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1 glass-card p-6 h-full border border-white/5 hover:border-primary-500/20 transition-all flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Skill Set Overview</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 500 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Interactive Skills Grid */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === category
                      ? 'bg-primary-500/20 border-primary-500 text-primary-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                      : 'glass border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card flex flex-col items-center justify-center p-6 group cursor-pointer border border-white/5 hover:border-primary-500/40 bg-dark-800/60 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <skill.icon className={`text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg ${skill.color}`} />
                    
                    <h3 className="text-slate-200 font-medium tracking-wide group-hover:text-white transition-colors relative z-10 text-center text-sm sm:text-base mb-3">
                      {skill.name}
                    </h3>

                    {/* Animated Progress Bar on Hover */}
                    <div className="w-full h-1.5 bg-dark-900 rounded-full overflow-hidden mt-auto">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 relative"
                      >
                        <span className="absolute -top-6 right-0 text-[10px] text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                          {skill.percentage}%
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
