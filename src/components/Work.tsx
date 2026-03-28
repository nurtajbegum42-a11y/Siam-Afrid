import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Lumina Archive",
    category: "Web Design / 2024",
    image: "https://picsum.photos/seed/minimal1/800/1000",
    link: "#",
  },
  {
    title: "Urban Silence",
    category: "Photography / 2024",
    image: "https://picsum.photos/seed/photo1/800/1000",
    link: "#",
  },
  {
    title: "Onyx Studio",
    category: "Branding / 2023",
    image: "https://picsum.photos/seed/minimal2/800/1000",
    link: "#",
  },
  {
    title: "Ethereal UI",
    category: "Product / 2024",
    image: "https://picsum.photos/seed/minimal3/800/1000",
    link: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-black py-24 px-6 md:py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-medium tracking-[0.5em] text-muted uppercase">
              02 / Selected Work
            </h2>
            <h3 className="mt-4 text-4xl font-bold tracking-tighter uppercase md:text-5xl">
              Portfolio
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs text-xs font-light text-muted md:text-sm"
          >
            A collection of projects where minimalism meets high-performance digital solutions and visual storytelling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i % 2 * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <h4 className="text-xl font-medium tracking-tight uppercase">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium tracking-widest text-muted uppercase">
                    {project.category}
                  </p>
                </div>
                <div className="h-[1px] flex-grow mx-8 bg-white/10 hidden sm:block" />
                <span className="text-xs font-light text-muted">0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
