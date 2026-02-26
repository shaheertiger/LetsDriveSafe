import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer pick-up and drop-off?",
    answer: "Yes! We offer convenient pick-up and drop-off from your home, school, or workplace within our service area in Hamilton."
  },
  {
    question: "Can I use the instructor's car for my road test?",
    answer: "Absolutely. Our Road Test Prep package includes the use of our vehicle for your official road test, plus a warm-up lesson beforehand."
  },
  {
    question: "How many lessons will I need?",
    answer: "Every student is different. Beginners typically need 10-15 hours to feel fully confident, while those with some experience might only need 3-5 hours. We can assess your skills during your first lesson and recommend a plan."
  },
  {
    question: "Are your instructors certified?",
    answer: "Yes, all our instructors are fully licensed and certified by the Ministry of Transportation (MTO). They undergo regular background checks and training."
  },
  {
    question: "What happens if I need to cancel a lesson?",
    answer: "We require 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may be subject to a cancellation fee."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-[#F4F4F0]" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">FAQ</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Common questions
          </h2>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-zinc-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
