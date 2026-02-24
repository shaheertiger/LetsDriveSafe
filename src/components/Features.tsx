import { motion } from "motion/react";
import { Car, ShieldCheck, Clock, MapPin } from "lucide-react";

const features = [
  {
    name: "Certified Instructors",
    description: "Our highly trained, government-certified instructors ensure you learn the best and safest driving practices.",
    icon: ShieldCheck,
  },
  {
    name: "Flexible Scheduling",
    description: "We offer lessons 7 days a week, fitting into your busy schedule with ease.",
    icon: Clock,
  },
  {
    name: "Dual-Control Vehicles",
    description: "Learn in modern, safe vehicles equipped with dual controls for your peace of mind.",
    icon: Car,
  },
  {
    name: "Convenient Pick-up",
    description: "We pick you up from home, school, or work for your driving lessons.",
    icon: MapPin,
  },
];

export default function Features() {
  return (
    <div className="bg-[#fafafa] py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600 uppercase tracking-wider">Learn with Confidence</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-zinc-900 sm:text-5xl lg:text-balance" style={{ fontFamily: 'var(--font-display)' }}>
            Everything you need to become a safe driver
          </p>
          <p className="mt-6 text-lg/8 text-zinc-600">
            We provide comprehensive driving education designed to make you a confident and responsible driver for life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-zinc-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-4 text-xl font-semibold text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-600/20">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-zinc-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
