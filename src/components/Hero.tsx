import { motion } from 'motion/react';
import { ChevronRight, Phone, ShieldCheck, Clock, Award, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate pt-24 bg-[#fafafa] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
      
      <div className="py-20 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden sm:mb-10 sm:flex sm:justify-center"
            >
              <div className="relative rounded-full px-4 py-1.5 text-sm/6 text-zinc-600 ring-1 ring-zinc-200 bg-white/50 backdrop-blur-sm hover:ring-zinc-300 transition-all shadow-sm">
                <span className="font-semibold text-blue-600 mr-2">98% Pass Rate</span> Join hundreds of successful students.{' '}
                <a href="#testimonials" className="font-semibold text-zinc-900 ml-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read reviews <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl font-extrabold tracking-tight text-balance text-zinc-900 sm:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pass Your Road Test on the <span className="text-blue-600">First Try.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-lg font-medium text-pretty text-zinc-500 sm:text-xl/8 max-w-2xl mx-auto"
            >
              Expert driving instruction in Hamilton tailored to your needs. Build confidence, learn safe habits, and get your license faster with our driving school.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
            >
              <a
                href="tel:6476250730"
                className="w-full sm:w-auto rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                Call Now: (647) 625-0730
              </a>
              <a href="#pricing" className="text-base font-semibold text-zinc-900 flex items-center gap-1 group hover:text-blue-600 transition-colors">
                View Packages <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-600"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span>5.0 Rated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>MTO Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>High Pass Rate</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 sm:mt-24 relative"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-zinc-100/50 rounded-[2.5rem] blur-2xl"></div>
            <div className="relative z-10 rounded-3xl bg-white p-2 ring-1 ring-inset ring-zinc-200/50 shadow-2xl lg:p-4 overflow-hidden">
              <img
                alt="Student driving a car"
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                width={2432}
                height={1442}
                className="rounded-2xl object-cover h-[400px] sm:h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating badges */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Certified</p>
                  <p className="text-sm font-bold text-zinc-900">Instructors</p>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">High</p>
                  <p className="text-sm font-bold text-zinc-900">Pass Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
