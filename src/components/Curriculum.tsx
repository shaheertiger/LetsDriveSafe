import { motion } from 'motion/react';
import { Route, ShieldAlert, ParkingCircle, CloudRain, Navigation, Eye } from 'lucide-react';

const skills = [
  {
    name: 'Defensive Driving',
    description: 'Learn to anticipate hazards, manage space, and react safely to unpredictable situations on the road.',
    icon: ShieldAlert,
  },
  {
    name: 'Highway Merging',
    description: 'Confidently enter, navigate, and exit high-speed expressways with complete ease.',
    icon: Route,
  },
  {
    name: 'Advanced Parking',
    description: 'Nail parallel parking, reverse stall parking, and 3-point turns perfectly every single time.',
    icon: ParkingCircle,
  },
  {
    name: 'Adverse Weather',
    description: 'Gain essential skills for maintaining control during rain, snow, and low-visibility conditions.',
    icon: CloudRain,
  },
  {
    name: 'Complex Intersections',
    description: 'Navigate multi-lane intersections, roundabouts, and advanced right-of-way scenarios safely.',
    icon: Navigation,
  },
  {
    name: 'Observation Skills',
    description: 'Develop proactive scanning techniques to eliminate blind spots and maintain 360-degree awareness.',
    icon: Eye,
  },
];

export default function Curriculum() {
  return (
    <div className="py-24 sm:py-32 bg-[#020617] text-white relative overflow-hidden" id="curriculum">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest">What You'll Learn</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Learn every aspect of driving
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Our comprehensive curriculum goes beyond the basics to ensure you're prepared for any situation you might encounter on the road.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-4 text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary group-hover:ring-primary transition-all duration-300">
                    <skill.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  {skill.name}
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-relaxed text-slate-400">
                  <p className="flex-auto">{skill.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>

  );
}
