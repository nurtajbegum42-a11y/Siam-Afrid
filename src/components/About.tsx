import { motion } from "motion/react";

export default function About() {
  const skills = [
    "Full Stack Development",
    "Entrepreneurship",
    "Photography & Visuals",
    "React / Next.js",
    "Node.js / Express",
    "Database Architecture",
  ];

  return (
    <section id="about" className="bg-black py-24 px-6 md:py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-medium tracking-[0.5em] text-muted uppercase">
              01 / About Me
            </h2>
            <p className="mt-8 text-2xl font-light leading-snug md:mt-12 md:text-4xl">
              I am a <span className="text-muted">full stack developer</span>, entrepreneur, and photographer who builds scalable digital solutions with a sharp eye for visual storytelling.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-muted md:mt-8 md:text-lg">
              With a passion for building from the ground up, I've spent years mastering the art of creating robust web applications that solve real-world problems. My background in photography allows me to approach every project with a unique perspective on aesthetics and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-end"
          >
            <h3 className="mb-8 text-xs font-medium tracking-widest uppercase text-muted">
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className="border-b border-white/10 py-4 text-sm font-light tracking-wide"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
