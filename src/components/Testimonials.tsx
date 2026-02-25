import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/zJyVd1NufV7R8Rka8";

interface Review {
  text: string;
  name: string;
  date: string;
  rating: number;
  highlight?: string;
}

const reviews: Review[] = [
  {
    text: "My overall driving lessons experience has been wonderful with the instructor Aqdes Shahzad. He has been very patient in my initial G2 license preparation as it was the first time I was driving a car. I obtained both my G2 and G license driving lessons from him. He provides essential driving instructions in an easy way. Also he is punctual and respectful in his behaviour. I would recommend his driving lessons 100%.",
    name: "Priti Patel",
    date: "Sep 2024",
    rating: 5,
    highlight: "Passed G2 & G",
  },
  {
    text: "He made learning fun and helped me get rid of all my driving anxiety. I'd recommend Akdes to anyone who wants a supportive, friendly and thorough instructor. His words of encouragement always pushed me to believe in my abilities.",
    name: "Alaba Iyanda",
    date: "Mar 2025",
    rating: 5,
    highlight: "Overcame driving anxiety",
  },
  {
    text: "Akdes is patient, funny and adapts his teaching style to how you learn. I did both G2 and G with him and have passed both. He is very thorough and makes sure you understand everything before moving on.",
    name: "Ayomiposi Osho",
    date: "Jan 2025",
    rating: 5,
    highlight: "Passed G2 & G",
  },
  {
    text: "I took driving lessons from Let's Drive Safe school and I passed my G2. Mr Akdes Shahzad as my instructor gave me amazing tips, techniques, confidence and was extremely patient and kind. Highly recommended!",
    name: "Sandeep Brar",
    date: "Sep 2024",
    rating: 5,
    highlight: "Passed G2 first try",
  },
  {
    text: "I got my G2 in one take. It was a great experience learning driving with Aekdes Shahzad. He is calm and supportive. I got my G2 only doing 5 classes and without having any prior driving experience. I recommend everyone to take classes from him.",
    name: "Utsav Dhakal",
    date: "Sep 2024",
    rating: 5,
    highlight: "G2 in 5 classes",
  },
  {
    text: "He kept encouraging and reassuring me that despite my doubts, I will be a great driver. He always took the time to repeat anything I needed. After 10 years of not driving, I feel confident again thanks to his patience.",
    name: "Setareh Lessan",
    date: "Jan 2025",
    rating: 5,
    highlight: "Back after 10 years",
  },
  {
    text: "With just 3 lessons, he helped me gain the confidence and skills to pass my G2 on the first try. His teaching method is clear and effective. Best investment I made for my driving journey.",
    name: "Pooja Bhatia",
    date: "May 2025",
    rating: 5,
    highlight: "Passed G2 in 3 lessons",
  },
  {
    text: "He was very helpful while teaching, explained everything clearly, and made sure I was well prepared for the test. His calm demeanor and clear instructions made the whole learning process enjoyable. Highly recommended.",
    name: "Nahin Sheikh",
    date: "Jun 2025",
    rating: 5,
    highlight: "Well prepared",
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-emerald-500 to-emerald-600',
    'from-violet-500 to-violet-600',
    'from-amber-500 to-amber-600',
    'from-rose-500 to-rose-600',
    'from-cyan-500 to-cyan-600',
    'from-indigo-500 to-indigo-600',
    'from-teal-500 to-teal-600',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Testimonials() {
  const leftColumn = reviews.filter((_, i) => i % 2 === 0);
  const rightColumn = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="testimonials">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200/60 shadow-sm mb-6 hover:shadow-md hover:ring-primary/30 transition-all group"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>Verified Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:text-primary group-hover:opacity-100" />
          </a>
          <h2
            className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What our students say
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Real reviews from real students who trusted us with their driving journey
          </p>

          {/* Google Rating Badge */}
          <motion.a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-xl ring-1 ring-slate-100 hover:shadow-2xl hover:ring-primary/20 transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-3xl font-black text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                5.0
              </span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">250+ reviews</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <GoogleIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Reviews Grid - Masonry Style */}
        <div className="mx-auto max-w-5xl">
          <div className="columns-1 md:columns-2 gap-5 space-y-5">
            {/* Left column */}
            {leftColumn.map((review, index) => (
              <ReviewCard key={review.name} review={review} index={index * 2} />
            ))}
            {/* Right column - rendered in masonry flow */}
            {rightColumn.map((review, index) => (
              <ReviewCard key={review.name} review={review} index={index * 2 + 1} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <GoogleIcon className="w-5 h-5" />
            Leave us a review on Google
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      className="break-inside-avoid rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Stars & Google Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
          <GoogleIcon className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Highlight badge */}
      {review.highlight && (
        <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-bold text-primary ring-1 ring-primary/20 mb-4">
          {review.highlight}
        </span>
      )}

      {/* Review text */}
      <p className="text-[15px] leading-relaxed text-slate-600">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
        <div
          className={`h-10 w-10 rounded-full bg-gradient-to-br ${getAvatarColor(review.name)} flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md shadow-white/20`}
        >
          {getInitials(review.name)}
        </div>
        <div className="min-w-0">
          <p
            className="text-sm font-bold text-slate-900 truncate"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {review.name}
          </p>
          <p className="text-xs text-slate-400 font-medium">{review.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

