import { CarFront, Star, Mail } from 'lucide-react';
import MTOLogo from './MTOLogo';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
        <div className="bg-zinc-900 p-2 rounded-full">
          <CarFront className="h-5 w-5 text-white" />
        </div>
        
        <MTOLogo className="text-zinc-400 scale-75 origin-center -ml-12 sm:-ml-16" />
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="https://maps.app.goo.gl/zJyVd1NufV7R8Rka8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Review us on Google
          </a>
          <span className="hidden sm:block text-zinc-300">|</span>
          <a
            href="mailto:info@letsdrivesafe.ca"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@letsdrivesafe.ca
          </a>
        </div>

        <p className="text-center text-sm font-medium text-zinc-500">
          &copy; {new Date().getFullYear()} LetsDriveSafe.Ca. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
