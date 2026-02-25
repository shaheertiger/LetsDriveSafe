import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Process from './components/Process';
import Curriculum from './components/Curriculum';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Process />
        <Curriculum />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
