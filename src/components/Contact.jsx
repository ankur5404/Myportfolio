import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Copy, MessageCircle, Download, FileText } from 'lucide-react';

// Floating Label Input Component
const FloatingInput = ({ id, label, type = "text", required, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative mb-6">
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className="peer w-full bg-dark-900/40 border-b-2 border-white/10 rounded-t-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary-500 focus:bg-dark-900/60 transition-all resize-none custom-scrollbar min-h-[120px]"
          {...props}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className="peer w-full bg-dark-900/40 border-b-2 border-white/10 rounded-t-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-primary-500 focus:bg-dark-900/60 transition-all"
          {...props}
        />
      )}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFocused || hasValue ? -14 : 0,
          scale: isFocused || hasValue ? 0.8 : 1,
          color: isFocused ? '#3b82f6' : '#94a3b8'
        }}
        className="absolute left-4 top-4 text-slate-400 pointer-events-none origin-left flex items-center gap-1 font-medium"
      >
        {label}
        {required && <span className="text-red-400">*</span>}
      </motion.label>
    </div>
  );
};

export default function Contact() {
  const [result, setResult] = useState("Send Message");
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    // Simulating web3forms or actual submit
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      // For now, simulate success without actual key to avoid fetch errors
      setTimeout(() => {
        setResult("Message Sent Successfully!");
        setIsSuccess(true);
        if (formRef.current) formRef.current.reset();
        
        setTimeout(() => {
          setResult("Send Message");
          setIsSuccess(false);
        }, 5000);
      }, 1500);

      /*
      // Real Web3Forms integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message Sent Successfully!");
        setIsSuccess(true);
        event.target.reset();
        setTimeout(() => { setResult("Send Message"); setIsSuccess(false); }, 5000);
      } else {
        setResult("Oops! Something went wrong.");
      }
      */
    } catch (error) {
      console.error(error);
      setResult("Oops! Something went wrong.");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ankursga1212@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full mix-blend-screen filter blur-[120px] -translate-y-1/2 -z-10 animate-blob" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Collaborate</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind, a job opportunity, or just want to chat? I'm always open to discussing new ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start relative max-w-6xl mx-auto">
          {/* Left Side: Contact Info & Quick actions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Main Contact Card */}
            <div className="glass p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-4 group/item">
                  <div className="p-4 rounded-xl glass border border-white/10 text-primary-400 group-hover/item:border-primary-500/50 group-hover/item:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover/item:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">Email</p>
                    <a href="mailto:ankursga1212@gmail.com" className="text-white hover:text-primary-400 transition-colors font-semibold">ankursga1212@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="p-4 rounded-xl glass border border-white/10 text-accent-400 group-hover/item:border-accent-400/50 group-hover/item:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover/item:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">Phone</p>
                    <a href="tel:+919536840654" className="text-white hover:text-accent-400 transition-colors font-semibold">+91 9536840654</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="p-4 rounded-xl glass border border-white/10 text-blue-400 group-hover/item:border-blue-400/50 group-hover/item:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(96,165,250,0.1)] group-hover/item:shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">Location</p>
                    <p className="text-white font-semibold">Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleCopyEmail}
                className="glass-card flex flex-col items-center justify-center p-6 gap-3 rounded-2xl hover:-translate-y-1 transition-all border border-white/5 hover:border-primary-500/50 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Copy size={24} className={`transition-colors relative z-10 ${copied ? 'text-accent-400' : 'text-slate-300 group-hover:text-primary-400'}`} />
                <span className={`text-sm font-semibold relative z-10 ${copied ? 'text-accent-400' : 'text-slate-300 group-hover:text-white'}`}>
                  {copied ? 'Copied!' : 'Copy Email'}
                </span>
              </button>

              <a 
                href="https://wa.me/919536840654" 
                target="_blank" 
                rel="noreferrer"
                className="glass-card flex flex-col items-center justify-center p-6 gap-3 rounded-2xl hover:-translate-y-1 transition-all border border-white/5 hover:border-accent-500/50 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageCircle size={24} className="text-slate-300 group-hover:text-accent-400 transition-colors relative z-10" />
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors relative z-10">WhatsApp</span>
              </a>

              <a 
                href="/resume.pdf" 
                download
                className="col-span-2 glass-card flex items-center justify-center p-4 gap-3 rounded-2xl hover:-translate-y-1 transition-all border border-white/5 hover:border-primary-400/50 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <FileText size={20} className="text-primary-400 relative z-10" />
                <span className="text-sm font-bold text-white relative z-10 uppercase tracking-wider">Download Resume</span>
                <Download size={18} className="text-white group-hover:translate-y-1 transition-transform relative z-10 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me A Message</h3>
            
            <form ref={formRef} onSubmit={onSubmit} className="flex flex-col">
              <div className="grid md:grid-cols-2 md:gap-6">
                <FloatingInput id="name" label="Full Name" required />
                <FloatingInput id="email" type="email" label="Email Address" required />
              </div>
              
              <FloatingInput id="subject" label="Subject" required />
              
              <FloatingInput id="message" type="textarea" label="Your Message" required />
              
              <button 
                type="submit" 
                disabled={isSuccess || result === "Sending..."}
                className={`group mt-2 relative overflow-hidden flex items-center justify-center gap-2 w-full md:w-auto md:self-end px-10 py-4 rounded-xl font-bold transition-all ${
                  isSuccess 
                    ? 'bg-accent-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] cursor-default' 
                    : 'bg-primary-600 hover:bg-primary-500 text-white border border-primary-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-1'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {result}
                  <AnimatePresence mode="popLayout">
                    {isSuccess ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <CheckCircle size={20} />
                      </motion.div>
                    ) : (
                      <Send size={18} className={result === "Sending..." ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"} />
                    )}
                  </AnimatePresence>
                </span>
                {!isSuccess && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0" />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
