import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    body: "I was so nervous about driving, but my instructor was incredibly patient and made me feel at ease. I passed my G2 test on the first try! Highly recommend this driving school to anyone looking to learn.",
    author: {
      name: "Sarah Jenkins",
      handle: "Passed G2 First Try",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
  {
    body: "The 10-hour package was exactly what I needed. We covered everything from parallel parking to highway merging. The mock road test was a game-changer and helped me pass my G test with flying colors.",
    author: {
      name: "Michael Chen",
      handle: "Passed G Test",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
  {
    body: "Affordable hourly rates and flexible scheduling made it easy to fit lessons around my university classes. The dual-controlled cars are very modern and safe. Best driving school in Hamilton!",
    author: {
      name: "Emily Rodriguez",
      handle: "Confident City Driver",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#fafafa] py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600 uppercase tracking-wider">Testimonials</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            Loved by our students
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 bg-white inline-flex px-4 py-2 rounded-full shadow-sm ring-1 ring-zinc-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-sm font-bold text-zinc-900">5.0</span>
            <span className="text-sm font-medium text-zinc-500">Based on 150+ reviews</span>
          </div>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.author.name} 
                className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-zinc-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg/7 text-zinc-700">"{testimonial.body}"</p>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-zinc-100 pt-6">
                  <img
                    alt={testimonial.author.name}
                    src={testimonial.author.imageUrl}
                    className="h-12 w-12 rounded-full bg-zinc-50 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-semibold text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>{testimonial.author.name}</div>
                    <div className="text-sm/6 text-blue-600 font-medium">{testimonial.author.handle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
