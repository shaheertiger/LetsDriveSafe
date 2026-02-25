import { motion } from 'motion/react';

const stats = [
  { id: 1, name: 'First-time pass rate', value: '99%+' },
  { id: 2, name: 'Students taught', value: '5k+' },
  { id: 3, name: 'Years of experience', value: '10+' },
  { id: 4, name: '5-star reviews', value: '250+' },
];

export default function Stats() {
  return (
    <div className="bg-slate-900 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
              Trusted by thousands of new drivers
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Our proven teaching methods get results. We don't just teach you to pass the test; we teach you to drive safely for life.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="text-base leading-7 text-slate-400 font-medium">{stat.name}</dt>
                <dd className="order-first text-5xl font-black tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent sm:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>

  );
}
