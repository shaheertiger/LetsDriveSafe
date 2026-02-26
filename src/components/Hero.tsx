import { motion } from 'motion/react';
import { ArrowRight, Star, Mail } from 'lucide-react';
import MTOLogo from './MTOLogo';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 bg-primary/5 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse"></span>
                Accepting new students in Hamilton
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[0.9]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              LEARN HOW TO <br/> DRIVE <span className="text-primary italic">PERFECTLY</span> <br/> & SAFELY.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed"
            >
              Expert driving instruction tailored to your needs. Build confidence, learn safe habits, and pass your road test on the first try.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="tel:6476250730" className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-all flex items-center gap-2 hover:scale-105 shadow-xl shadow-primary/20">
                Book a Lesson
              </a>
              <a href="mailto:info@letsdrivesafe.ca" className="rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-primary" />
                Email Us
              </a>
              <a href="#pricing" className="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 group">
                View Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex -space-x-3 shrink-0">
                  <img className="inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Satisfied student" referrerPolicy="no-referrer" />
                  <img className="inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover shrink-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Satisfied student" referrerPolicy="no-referrer" />
                  <img className="inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Satisfied student" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center shrink-0">
                  <div className="flex items-center gap-1.5 text-slate-900">
                    <Star className="w-6 h-6 fill-accent text-accent shrink-0" />
                    <span className="font-bold text-2xl leading-none whitespace-nowrap">5.0</span>
                  </div>
                  <span className="text-lg text-slate-600 mt-1 whitespace-nowrap">from 5k+ students</span>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-slate-200 shrink-0"></div>
              
              <MTOLogo className="text-slate-900 scale-90 sm:scale-100 origin-left shrink-0" />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5"
          >
            <img
              alt="Student driving a car"
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">JD</div>
                <div>
                  <p className="text-sm font-bold text-slate-900 line-height-none">MTO-Approved Curriculum</p>
                  <p className="text-xs text-slate-500">Certified Instructors</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
