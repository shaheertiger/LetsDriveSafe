import { useState, useEffect } from 'react';
import { Menu, X, CarFront, Phone } from 'lucide-react';
import { motion } from 'motion/react';

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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span className="sr-only">Driving School</span>
            <div className="bg-blue-600 p-2 rounded-xl shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <CarFront className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>Driving School</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full ring-1 ring-zinc-200/50 shadow-sm">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-medium text-zinc-600 hover:text-blue-600 transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:6476250730" className="text-sm/6 font-bold text-white bg-blue-600 px-6 py-2.5 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-2 hover:scale-105 active:scale-95">
            <Phone className="w-4 h-4 animate-pulse" />
            Call Now: (647) 625-0730
          </a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-zinc-900/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="sr-only">Driving School</span>
                <div className="bg-blue-600 p-2 rounded-xl shadow-md shadow-blue-600/20">
                  <CarFront className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>Driving School</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-zinc-700 hover:bg-zinc-100 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-zinc-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-xl px-3 py-3 text-base/7 font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="tel:6476250730"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 flex items-center justify-center gap-2 rounded-xl px-3 py-4 text-base/7 font-bold text-white bg-blue-600 text-center hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all"
                  >
                    <Phone className="w-5 h-5 animate-pulse" />
                    Call Now: (647) 625-0730
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}
