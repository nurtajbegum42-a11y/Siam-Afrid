import { motion } from "motion/react";
import { Send, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24 px-6 md:py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-medium tracking-[0.5em] text-muted uppercase">
              04 / Contact
            </h2>
            <h3 className="mt-4 text-4xl font-bold tracking-tighter uppercase md:text-7xl">
              Let's Create <br />
              <span className="text-muted/30 italic font-light">Something Great</span>
            </h3>
            
            <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
              <div>
                <p className="text-[10px] font-medium tracking-widest text-muted uppercase md:text-xs">Email</p>
                <a href="mailto:siamafrid@yahoo.com" className="mt-1 block text-xl font-light hover:text-muted transition-colors md:mt-2 md:text-2xl">
                  siamafrid@yahoo.com
                </a>
              </div>
              
              <div className="flex space-x-6">
                {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="text-muted hover:text-white transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <form className="space-y-12">
              <div className="group relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-white/10 bg-transparent py-4 text-sm font-light tracking-wide outline-none transition-colors focus:border-white"
                />
              </div>
              <div className="group relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-white/10 bg-transparent py-4 text-sm font-light tracking-wide outline-none transition-colors focus:border-white"
                />
              </div>
              <div className="group relative">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full border-b border-white/10 bg-transparent py-4 text-sm font-light tracking-wide outline-none transition-colors focus:border-white resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="group flex items-center space-x-4 border border-white/20 px-10 py-5 text-xs font-medium tracking-widest uppercase transition-all hover:bg-white hover:text-black"
              >
                <span>Send Message</span>
                <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
