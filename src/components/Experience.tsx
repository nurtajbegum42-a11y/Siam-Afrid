import { motion } from "motion/react";

const experiences = [
  {
    role: "Senior Product Designer",
    company: "Aura Creative",
    period: "2022 — Present",
    description: "Leading the design direction for high-end luxury brands and digital archives.",
  },
  {
    role: "UI/UX Designer",
    company: "Minimalist Lab",
    period: "2020 — 2022",
    description: "Focused on clean interface design and user experience research for fintech startups.",
  },
  {
    role: "Frontend Developer",
    company: "Pixel Perfect",
    period: "2018 — 2020",
    description: "Developed responsive and interactive web applications using React and modern CSS.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-24 px-6 md:py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-xs font-medium tracking-[0.5em] text-muted uppercase">
            03 / Experience
          </h2>
          <h3 className="mt-4 text-4xl font-bold tracking-tighter uppercase md:text-5xl">
            Journey
          </h3>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative grid grid-cols-1 gap-4 border-t border-white/10 py-8 md:grid-cols-3 md:gap-8 md:py-12"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-medium tracking-widest text-muted uppercase md:text-xs">
                  {exp.period}
                </span>
                <h4 className="mt-1 text-xl font-medium uppercase md:mt-2 md:text-2xl">{exp.company}</h4>
              </div>
              <div className="md:col-span-2">
                <h5 className="text-lg font-light text-white/90 md:text-xl">{exp.role}</h5>
                <p className="mt-3 max-w-xl text-xs font-light leading-relaxed text-muted md:mt-4 md:text-sm">
                  {exp.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
