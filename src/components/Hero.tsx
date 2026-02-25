import { motion } from 'motion/react';
import { ArrowRight, Star, Mail } from 'lucide-react';
import MTOLogo from './MTOLogo';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-zinc-800 ring-1 ring-inset ring-zinc-200 bg-white mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Accepting new students in Hamilton
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-zinc-900 leading-[0.9]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              LEARN HOW TO <br/> DRIVE PERFECTLY <br/> & SAFELY.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-lg leading-relaxed"
            >
              Expert driving instruction tailored to your needs. Build confidence, learn safe habits, and pass your road test on the first try.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="tel:6476250730" className="rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold text-white hover:bg-zinc-800 transition-all flex items-center gap-2 hover:scale-105 shadow-xl shadow-zinc-900/20">
                Book a Lesson
              </a>
              <a href="mailto:letsdrivesafe.ca@gmail.com" className="rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 transition-all flex items-center gap-2 group">
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a href="#pricing" className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1 group">
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
                  <img className="inline-block h-14 w-14 rounded-full ring-4 ring-[#F4F4F0] object-cover shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" referrerPolicy="no-referrer" />
                  <img className="inline-block h-14 w-14 rounded-full ring-4 ring-[#F4F4F0] object-cover shrink-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" referrerPolicy="no-referrer" />
                  <img className="inline-block h-14 w-14 rounded-full ring-4 ring-[#F4F4F0] object-cover shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center shrink-0">
                  <div className="flex items-center gap-1.5 text-zinc-900">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 shrink-0" />
                    <span className="font-bold text-2xl leading-none whitespace-nowrap">5.0</span>
                  </div>
                  <span className="text-lg text-zinc-600 mt-1 whitespace-nowrap">from 5k+ students</span>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-zinc-200 shrink-0"></div>
              
              <MTOLogo className="text-zinc-900 scale-90 sm:scale-100 origin-left shrink-0" />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-zinc-900/5"
          >
            <img
              alt="Student driving a car"
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
