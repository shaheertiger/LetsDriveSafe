import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              More than just passing a test. We build safe drivers for life.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At <span className="text-primary font-bold">LetsDriveSafe.Ca</span>, we believe that driving is a privilege that requires responsibility, skill, and confidence. Founded with a mission to reduce road accidents through superior education, we've helped hundreds of students in the Hamilton area become licensed, defensive drivers.
            </p>

            <ul className="space-y-4 mb-10 text-left inline-block">
              {[
                "Ministry of Transportation (MTO) Certified",
                "Patient, friendly, and professional instructors",
                "Modern, dual-controlled training vehicles",
                "Customized lesson plans for every skill level"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
                Meet Our Team
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
