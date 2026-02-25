import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[3rem] px-6 py-16 sm:p-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Ready to get behind the wheel?
              </h2>
              <p className="text-lg text-zinc-400 mb-10 max-w-md">
                Give us a call today to schedule your first lesson. Our friendly instructors are ready to help you become a safe and confident driver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:6476250730"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-900 hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Call (647) 625-0730
                </a>
                <a
                  href="mailto:info@letsdrivesafe.ca"
                  className="inline-flex items-center gap-2 rounded-full bg-transparent px-8 py-4 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-x-4 rounded-2xl bg-zinc-800/50 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <Phone className="h-6 w-6 flex-none text-zinc-300" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Phone</h3>
                  <p className="mt-2 text-sm text-zinc-400">Call or text us anytime to book a lesson.</p>
                  <p className="mt-2 font-semibold text-white">
                    <a href="tel:6476250730" className="hover:text-zinc-300 transition-colors">(647) 625-0730</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 rounded-2xl bg-zinc-800/50 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <Mail className="h-6 w-6 flex-none text-zinc-300" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Email</h3>
                  <p className="mt-2 text-sm text-zinc-400">Send us an email for general inquiries.</p>
                  <p className="mt-2 font-semibold text-white">
                    <a href="mailto:info@letsdrivesafe.ca" className="hover:text-zinc-300 transition-colors">info@letsdrivesafe.ca</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 rounded-2xl bg-zinc-800/50 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <MapPin className="h-6 w-6 flex-none text-zinc-300" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Location</h3>
                  <p className="mt-2 text-sm text-zinc-400">Serving Hamilton and surrounding areas.</p>
                  <p className="mt-2 font-semibold text-white">12 Patton Pl<br/>Hamilton, ON L9B 2T9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
