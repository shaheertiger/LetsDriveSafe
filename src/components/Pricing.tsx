import { Check, Phone, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const tiers = [
  {
    name: 'Single Lesson',
    id: 'tier-single',
    href: 'tel:6476250730',
    price: '$60',
    description: 'Perfect for a quick refresher or assessment.',
    features: ['1 Hour of in-car instruction', 'Home/School/Work pick-up', 'Dual-controlled vehicle', 'Personalized feedback'],
    mostPopular: false,
  },
  {
    name: '5-Hour Package',
    id: 'tier-5hr',
    href: 'tel:6476250730',
    price: '$280',
    description: 'Great for beginners needing foundational skills.',
    features: [
      '5 Hours of in-car instruction',
      'Home/School/Work pick-up',
      'Dual-controlled vehicle',
      'City and highway driving',
      'Progress tracking',
    ],
    mostPopular: true,
  },
  {
    name: '10-Hour Package',
    id: 'tier-10hr',
    href: 'tel:6476250730',
    price: '$550',
    description: 'Comprehensive training for new drivers.',
    features: [
      '10 Hours of in-car instruction',
      'Home/School/Work pick-up',
      'Dual-controlled vehicle',
      'City, highway, and night driving',
      'Mock road test included',
      'Insurance discount certificate (if applicable)',
    ],
    mostPopular: false,
  },
  {
    name: 'Road Test Prep',
    id: 'tier-test',
    href: 'tel:6476250730',
    price: '$120',
    description: 'Get ready for your big day with confidence.',
    features: [
      '2 Hours of in-car instruction',
      'Mock road test evaluation',
      'Use of car for the road test',
      'Review of common mistakes',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="bg-zinc-50 py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600 uppercase tracking-wider">Pricing</h2>
          <p className="mt-2 text-5xl font-bold tracking-tight text-balance text-zinc-900 sm:text-6xl" style={{ fontFamily: 'var(--font-display)' }}>
            Simple, transparent hourly pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-zinc-600 sm:text-xl/8">
          Choose an affordable package that fits your needs. All our lessons are billed hourly to give you the best value.
        </p>

        {/* Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl bg-blue-50 p-6 text-center ring-1 ring-inset ring-blue-200/50 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="text-left">
            <p className="text-lg font-bold text-blue-900" style={{ fontFamily: 'var(--font-display)' }}>Committed to Your Success</p>
            <p className="mt-1 text-sm font-medium text-blue-800">Our certified instructors provide top-quality education to ensure you become a safe and confident driver.</p>
          </div>
        </motion.div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 items-center">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-blue-600 shadow-2xl shadow-blue-600/20 lg:scale-105 z-10 bg-white' : 'ring-1 ring-zinc-200 shadow-sm bg-white',
                'rounded-3xl p-8 xl:p-10 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-blue-600' : 'text-zinc-900',
                      'text-xl font-semibold'
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-blue-600 px-3 py-1 text-xs/5 font-bold text-white shadow-sm">
                      Best Value
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-zinc-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>{tier.price}</span>
                  {tier.name !== 'Road Test Prep' && tier.name !== 'Single Lesson' ? null : (
                    <span className="text-sm/6 font-semibold text-zinc-500">/total</span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-zinc-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check aria-hidden="true" className={classNames(tier.mostPopular ? "text-blue-600" : "text-zinc-400", "h-6 w-5 flex-none")} />
                      <span className={classNames(tier.mostPopular ? "font-medium text-zinc-900" : "")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20'
                    : 'text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 bg-zinc-50/50 hover:bg-zinc-50',
                  'mt-8 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm/6 font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105 active:scale-95'
                )}
              >
                <Phone className="w-4 h-4" />
                Claim Package
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm font-medium text-zinc-500 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-orange-500" />
          Spots are filling up fast for this month. Call now to secure your preferred time slot.
        </p>
      </div>
    </div>
  );
}
