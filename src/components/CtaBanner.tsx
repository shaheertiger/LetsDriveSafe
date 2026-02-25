import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CtaBanner() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl rounded-[3rem] sm:px-16"
        >
          <h2 className="mx-auto max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Stop waiting. Start driving.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join the thousands of students who have successfully earned their license with LetsDriveSafe.Ca. Your independence is just a phone call away.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6476250730"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Book Your First Lesson <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@letsdrivesafe.ca"
              className="rounded-full bg-transparent px-8 py-4 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>

          <div className="absolute -top-24 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </div>

  );
}
