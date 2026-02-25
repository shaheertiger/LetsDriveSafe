import { motion } from "motion/react";
import { Car, ShieldCheck, Clock, MapPin } from "lucide-react";

const features = [
  {
    name: "Certified Instructors",
    description: "Our highly trained, government-certified instructors ensure you learn the best and safest driving practices.",
    icon: ShieldCheck,
    className: "md:col-span-2 bg-primary text-white shadow-xl shadow-primary/20",
    iconClass: "bg-white/20 text-white",
    titleClass: "text-white",
    descClass: "text-blue-100"
  },
  {
    name: "Flexible Scheduling",
    description: "We offer lessons 7 days a week, fitting into your busy schedule with ease.",
    icon: Clock,
    className: "md:col-span-1 bg-white border border-slate-200",
    iconClass: "bg-primary/10 text-primary",
    titleClass: "text-slate-900",
    descClass: "text-slate-600"
  },
  {
    name: "Convenient Pick-up",
    description: "We pick you up from home, school, or work for your driving lessons.",
    icon: MapPin,
    className: "md:col-span-3 bg-secondary/10 border border-secondary/20",
    iconClass: "bg-secondary text-white shadow-sm",
    titleClass: "text-slate-900",
    descClass: "text-slate-600"
  },
];


export default function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Learn with Confidence</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Everything you need to become a safe driver
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className={`flex flex-col rounded-[2rem] p-8 ring-1 ring-zinc-200/50 shadow-sm hover:shadow-lg transition-all duration-300 ${feature.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex size-12 items-center justify-center rounded-2xl mb-6 ${feature.iconClass}`}>
                <feature.icon aria-hidden="true" className="size-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${feature.titleClass}`} style={{ fontFamily: 'var(--font-display)' }}>
                {feature.name}
              </h3>
              <p className={`text-base leading-relaxed ${feature.descClass}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
