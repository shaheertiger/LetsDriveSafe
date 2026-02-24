import { CarFront, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2 gap-6 items-center">
          <a href="tel:6476250730" className="text-sm font-bold text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2">
            <Phone className="w-4 h-4" />
            (647) 625-0730
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0 flex items-center gap-4 justify-center md:justify-start">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-md shadow-blue-600/20">
            <CarFront className="h-5 w-5 text-white" />
          </div>
          <p className="text-center text-sm/6 text-zinc-400">
            &copy; {new Date().getFullYear()} Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
