import { CarFront, Star, Mail } from 'lucide-react';
import MTOLogo from './MTOLogo';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
        <div className="bg-primary p-2 rounded-full shadow-lg shadow-primary/20">
          <CarFront className="h-5 w-5 text-white" />
        </div>

        <MTOLogo className="text-slate-400 scale-75 origin-center -ml-12 sm:-ml-16" />

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="https://maps.app.goo.gl/zJyVd1NufV7R8Rka8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
          >
            <Star className="w-4 h-4 fill-accent text-accent" />
            Review us on Google
          </a>
          <span className="hidden sm:block text-slate-300">|</span>
          <a
            href="mailto:info@letsdrivesafe.ca"
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            info@letsdrivesafe.ca
          </a>
        </div>

        <p className="text-center text-sm font-medium text-slate-500">
          &copy; {new Date().getFullYear()} LetsDriveSafe.Ca. All rights reserved.
        </p>
      </div>
    </footer>

  );
}
