import { Check, Phone, Info } from 'lucide-react';
import { motion } from 'motion/react';

const tiers = [
  {
    name: 'Full Certification Course',
    id: 'course',
    href: 'tel:6476250730',
    price: '$725',
    priceSuffix: 'total',
    description: 'Complete MTO-approved beginner driver education program ($642 + HST).',
    features: [
      '30 hours online learning',
      '10 hours in-car training',
      'MTO certificate once course completed',
    ],
    mostPopular: true,
  },
  {
    name: 'Package 1',
    id: 'pkg-1',
    href: 'tel:6476250730',
    price: '$300',
    priceSuffix: '+ HST',
    description: 'Perfect for a quick brush-up before your test.',
    features: [
      '3 hours in-car training',
      'Use of car for road test',
    ],
    mostPopular: false,
  },
  {
    name: 'Package 2',
    id: 'pkg-2',
    href: 'tel:6476250730',
    price: '$400',
    priceSuffix: '+ HST',
    description: 'Great for getting comfortable with test routes.',
    features: [
      '5 hours in-car training',
      'Use of car for road test',
    ],
    mostPopular: false,
  },
  {
    name: 'Package 3',
    id: 'pkg-3',
    href: 'tel:6476250730',
    price: '$500',
    priceSuffix: '+ HST',
    description: 'Comprehensive training and test preparation.',
    features: [
      '7 hours in-car training',
      'Use of car for road test',
    ],
    mostPopular: false,
  },
  {
    name: 'Package 4',
    id: 'pkg-4',
    href: 'tel:6476250730',
    price: '$485',
    priceSuffix: '+ HST',
    description: 'Extensive in-car training without the road test car.',
    features: [
      '10 hours in-car training ONLY',
    ],
    mostPopular: false,
  },
  {
    name: 'Test Day Package',
    id: 'test-day',
    href: 'tel:6476250730',
    price: '$150',
    priceSuffix: '+ HST',
    description: 'Car for use of Test (For Hamilton Only).',
    features: [
      '1 hour refresher training just before test',
      'Use of car for road test',
    ],
    mostPopular: false,
  },
  {
    name: 'Single Lesson',
    id: 'single',
    href: 'tel:6476250730',
    price: '$55',
    priceSuffix: 'flat',
    description: 'Pay-as-you-go hourly instruction.',
    features: [
      '1 hour in-car instruction',
    ],
    mostPopular: false,
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32 bg-zinc-50" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Simple, transparent pricing
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tierIdx * 0.05 }}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-zinc-900 shadow-2xl z-10 bg-zinc-900 text-white lg:col-span-2 xl:col-span-2' : 'ring-1 ring-zinc-200 shadow-sm bg-white text-zinc-900',
                'rounded-[2.5rem] p-8 xl:p-10 relative flex flex-col justify-between transition-all duration-300 hover:shadow-lg'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-900 shadow-sm">
                      Best Value
                    </p>
                  ) : null}
                </div>
                <p className={classNames(tier.mostPopular ? "text-zinc-300" : "text-zinc-500", "mt-4 text-sm leading-relaxed")}>{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{tier.price}</span>
                  <span className={classNames(tier.mostPopular ? "text-zinc-400" : "text-zinc-500", "text-sm font-semibold")}>{tier.priceSuffix}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-start">
                      <Check aria-hidden="true" className={classNames(tier.mostPopular ? "text-white" : "text-zinc-900", "h-5 w-5 flex-none mt-0.5")} />
                      <span className={classNames(tier.mostPopular ? "text-zinc-300" : "text-zinc-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                    : 'text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50',
                  'mt-8 flex items-center justify-center gap-2 rounded-full px-4 py-4 text-center text-sm font-bold transition-all hover:scale-105 active:scale-95'
                )}
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl bg-blue-50 p-6 ring-1 ring-inset ring-blue-200 flex items-start gap-4 max-w-3xl mx-auto"
        >
          <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-blue-900">Important Pricing Information</h4>
            <p className="mt-1 text-sm text-blue-800 leading-relaxed">
              All above prices are for <strong>Hamilton only</strong>. To know about pricing for other cities, please <a href="#contact" className="underline font-semibold hover:text-blue-600">contact us</a> or email us at <a href="mailto:letsdrivesafe.ca@gmail.com" className="underline font-semibold hover:text-blue-600">letsdrivesafe.ca@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
