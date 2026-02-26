import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] px-6 py-16 sm:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Ready to get behind the wheel?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md">
                Give us a call today to schedule your first lesson. Our friendly instructors are ready to help you become a safe and confident driver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:6476250730"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                  <Phone className="w-4 h-4" />
                  Call (647) 625-0730
                </a>
                <a
                  href="mailto:info@letsdrivesafe.ca"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-8 py-4 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, title: "Phone", desc: "Call or text us anytime to book a lesson.", content: "(647) 625-0730", href: "tel:6476250730" },
                { icon: Mail, title: "Email", desc: "Send us an email for general inquiries.", content: "info@letsdrivesafe.ca", href: "mailto:info@letsdrivesafe.ca" },
                { icon: MapPin, title: "Location", desc: "Serving Hamilton and surrounding areas.", content: "12 Patton Pl, Hamilton, ON L9B 2T9" }
              ].map((item, i) => (
                <div key={i} className="flex gap-x-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    <p className="mt-3 font-semibold text-white">
                      {item.href ? (
                        <a href={item.href} className="hover:text-primary transition-colors">{item.content}</a>
                      ) : (
                        item.content
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
