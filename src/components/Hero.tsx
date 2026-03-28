import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Subtle Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] font-bold tracking-tighter uppercase leading-none">
          CREATIVE
        </h2>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 block text-[10px] font-medium tracking-[0.4em] text-muted uppercase sm:text-xs sm:tracking-[0.5em]">
            Full Stack Developer • Entrepreneur • Photographer
          </span>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-8xl md:text-9xl uppercase leading-[0.9] sm:leading-none">
            Siam <br />
            <span className="text-muted/20">Afrid</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-col items-center justify-center"
        >
          <p className="max-w-md text-sm font-light leading-relaxed text-muted tracking-wide">
            Crafting digital experiences that blend aesthetic minimalism with functional precision.
          </p>
          
          <a
            href="#work"
            className="group mt-10 flex items-center space-x-4 border border-white/20 px-8 py-4 text-xs font-medium tracking-widest uppercase transition-all hover:bg-white hover:text-black"
          >
            <span>View Work</span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
