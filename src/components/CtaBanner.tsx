import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CtaBanner() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 text-center shadow-2xl rounded-[3rem] sm:px-16"
        >
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Stop waiting. Start driving.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Join the thousands of students who have successfully earned their license with LetsDriveSafe.Ca. Your independence is just a phone call away.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6476250730"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Book Your First Lesson <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:letsdrivesafe.ca@gmail.com"
              className="rounded-full bg-transparent px-8 py-4 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
          
          {/* Decorative background elements */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
