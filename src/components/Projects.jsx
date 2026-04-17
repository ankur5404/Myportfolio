import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, PlayCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    shortDesc: 'A full-stack e-commerce solution.',
    description: 'A comprehensive full-stack e-commerce solution built with scalability in mind. It features seamless payment integration via Stripe, robust user authentication, and a powerful admin dashboard to manage inventory and orders.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Stripe'],
    github: '#',
    demo: '#',
    features: ['Real-time Inventory Tracking', 'Secure JWT Authentication', 'Stripe Payment Gateway', 'Admin Dashboard Analytics']
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    category: 'AI',
    shortDesc: 'An intelligent chatbot leveraging OpenAI.',
    description: 'An advanced conversational AI assistant that leverages the OpenAI API for natural language processing, semantic search, and task automation. Built to improve customer support response times.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma', 'PostgreSQL'],
    github: '#',
    demo: '#',
    features: ['Context-aware Conversations', 'Markdown Rendering', 'Chat History Persistance', 'Streaming Responses']
  },
  {
    id: 3,
    title: 'Task Management App',
    category: 'Apps',
    shortDesc: 'A collaborative productivity tool.',
    description: 'A real-time collaborative productivity tool featuring drag-and-drop kanban boards, live progress tracking, and team workspaces. Designed for high performance and smooth offline capabilities.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
    github: '#',
    demo: '#',
    features: ['Real-time Collaboration', 'Drag & Drop Interface', 'Offline Mode', 'Push Notifications']
  }
];

const categories = ['All', 'Web', 'AI', 'Apps'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-primary-500 border-primary-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'glass border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group flex flex-col h-[400px] border border-white/10 relative cursor-pointer shadow-lg hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-dark-900/60 group-hover:bg-dark-900/80 transition-colors duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                  {/* Default State Content */}
                  <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                    <span className="text-primary-400 text-xs font-bold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2">{project.shortDesc}</p>
                  </div>

                  {/* Hover State Revealing Tech Stack & Button */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-1 rounded-sm bg-primary-500/20 text-primary-300 border border-primary-500/30 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] font-bold px-2 py-1 rounded-sm bg-white/10 text-white uppercase tracking-wider">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 text-white font-medium text-sm group/btn hover:text-primary-400 transition-colors">
                      View Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/10 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group">
                View More on GitHub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-dark-900/50 hover:bg-primary-500 text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Right Side: Details */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col relative z-10 bg-dark-800/80">
                <span className="text-primary-400 text-xs font-bold tracking-wider uppercase mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h2>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <ul className="mb-8 space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                      <PlayCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
                  >
                    <Github size={18} /> Source
                  </a>
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
