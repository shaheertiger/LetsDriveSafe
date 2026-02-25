import { useState, useEffect } from 'react';
import { Menu, X, CarFront, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300">
      <nav 
        aria-label="Global" 
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-6xl ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-zinc-200/50 ring-1 ring-zinc-200' : 'bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-zinc-200/50'
        }`}
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span className="sr-only">LetsDriveSafe.Ca</span>
            <div className="bg-zinc-900 p-2 rounded-full group-hover:scale-105 transition-transform">
              <CarFront className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>LetsDriveSafe.Ca</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:6476250730" className="text-sm font-bold text-white bg-zinc-900 px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2 hover:scale-105 active:scale-95">
            <Phone className="w-4 h-4" />
            (647) 625-0730
          </a>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-zinc-900/20 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <span className="sr-only">LetsDriveSafe.Ca</span>
                  <div className="bg-zinc-900 p-2 rounded-full">
                    <CarFront className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-xl tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>LetsDriveSafe.Ca</span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-full p-2.5 text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-zinc-100">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-2xl px-3 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-3">
                    <a
                      href="tel:6476250730"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 flex items-center justify-center gap-2 rounded-full px-3 py-4 text-base font-bold text-white bg-zinc-900 text-center hover:bg-zinc-800 shadow-md transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now: (647) 625-0730
                    </a>
                    <a
                      href="mailto:info@letsdrivesafe.ca"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 flex items-center justify-center gap-2 rounded-full px-3 py-4 text-base font-bold text-zinc-900 ring-1 ring-zinc-200 text-center hover:bg-zinc-50 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
