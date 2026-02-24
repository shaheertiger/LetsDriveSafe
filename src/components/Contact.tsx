import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-zinc-900 py-24 sm:py-32 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] opacity-30 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>Don't wait. Start driving today.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-zinc-400">
            Give us a call today to schedule your first lesson. Our friendly instructors are ready to help you become a safe and confident driver.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <a
              href="tel:6476250730"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              Call Now: (647) 625-0730
            </a>
            <p className="text-sm font-medium text-zinc-500 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              Limited spots available for this month.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex gap-x-4 rounded-3xl bg-zinc-800/50 p-8 ring-1 ring-white/10 backdrop-blur-sm hover:bg-zinc-800 transition-colors">
            <Phone className="h-7 w-5 flex-none text-blue-400" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Phone</h3>
              <p className="mt-2 text-zinc-400">Call or text us anytime to book a lesson.</p>
              <p className="mt-4 font-semibold text-white">
                <a href="tel:6476250730" className="hover:text-blue-400 transition-colors">(647) 625-0730</a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-3xl bg-zinc-800/50 p-8 ring-1 ring-white/10 backdrop-blur-sm hover:bg-zinc-800 transition-colors">
            <Mail className="h-7 w-5 flex-none text-blue-400" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Email</h3>
              <p className="mt-2 text-zinc-400">Send us an email for general inquiries.</p>
              <p className="mt-4 font-semibold text-white">
                <a href="mailto:info@drivingschool.ca" className="hover:text-blue-400 transition-colors">info@drivingschool.ca</a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-3xl bg-zinc-800/50 p-8 ring-1 ring-white/10 backdrop-blur-sm hover:bg-zinc-800 transition-colors">
            <MapPin className="h-7 w-5 flex-none text-blue-400" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>Location</h3>
              <p className="mt-2 text-zinc-400">Serving Hamilton and surrounding areas.</p>
              <p className="mt-4 font-semibold text-white">12 Patton Pl<br/>Hamilton, ON L9B 2T9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
