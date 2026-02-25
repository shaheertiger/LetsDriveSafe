import { motion } from 'motion/react';
import { PhoneCall, Car, Award } from 'lucide-react';

const steps = [
  {
    name: 'Step 1: Book Your Lesson',
    description: 'Call or text us to schedule your first lesson. We offer flexible times to fit your busy schedule.',
    icon: PhoneCall,
  },
  {
    name: 'Step 2: Learn to Drive',
    description: 'Our certified instructors will pick you up and provide personalized, one-on-one training in a safe vehicle.',
    icon: Car,
  },
  {
    name: 'Step 3: Pass Your Test',
    description: 'With our comprehensive preparation and mock tests, you\'ll be ready to ace your road test with confidence.',
    icon: Award,
  },
];

export default function Process() {
  return (
    <div className="py-24 sm:py-32 bg-white" id="process">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">How It Works</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Your journey to getting licensed
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            We've streamlined the process to make learning to drive as easy and stress-free as possible.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-zinc-100 -z-10"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.name} 
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900 shadow-xl shadow-zinc-900/20 mb-6 ring-8 ring-white">
                  <step.icon className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.name}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="tel:9055606900" className="rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center gap-2 hover:scale-105 active:scale-95">
            <PhoneCall className="w-4 h-4 animate-pulse" />
            Start Step 1 Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}
