import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Deep Learning and Deployment on Web',
    issuer: 'DevTown',
    date: 'Feb 2024',
    image: '/certificates/devtown.jpg',
    link: 'https://drive.google.com/drive/folders/1dRJtoMx671GPVag19IYGbPw1b4styQWR'
  },
  {
    title: 'Language Principle & Finite Automata Theory',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    image: '/certificates/infosys.jpg',
    link: 'https://drive.google.com/drive/folders/1dRJtoMx671GPVag19IYGbPw1b4styQWR'
  },
  {
    title: 'CyberSec Symposium 2.0',
    issuer: 'iGen Community & LPU',
    date: 'Apr 2024',
    image: '/certificates/cybersec.jpg',
    link: 'https://drive.google.com/drive/folders/1dRJtoMx671GPVag19IYGbPw1b4styQWR'
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    date: 'Sep 2024',
    image: '/certificates/google.jpg',
    link: 'https://drive.google.com/drive/folders/1dRJtoMx671GPVag19IYGbPw1b4styQWR'
  },
  {
    title: 'Computer Communications Specialization',
    issuer: 'Coursera',
    date: 'Dec 2024',
    image: '/certificates/coursera.jpg',
    link: 'https://drive.google.com/drive/folders/1dRJtoMx671GPVag19IYGbPw1b4styQWR'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full mix-blend-screen filter blur-[120px] -translate-x-1/2 -z-10 animate-blob"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">My Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg text-balance">
            Here are my completed courses and certificates. Click on any certificate to view it on Google Drive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] h-full flex flex-col relative overflow-hidden">
                  
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-dark-800 border border-white/10 group-hover:border-primary-500/30 transition-colors">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600/1e293b/94a3b8?text=Certificate+Image+Pending';
                      }}
                    />
                    {/* Hover Overlay with Icon */}
                    <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-primary-500 text-white p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <ExternalLink size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-primary-400 font-medium text-sm flex items-center gap-1">
                          {cert.issuer}
                        </span>
                        <span className="text-slate-400 text-xs px-2 py-1 bg-white/5 rounded-md border border-white/5">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
