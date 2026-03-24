import React, { useEffect } from 'react';
import Hero from '../components/Heros';
import About from '../components/About';
import Products from '../components/Products';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Delivery from '../components/Delivery';
import ContactSection from '../components/ContactSection';
import Lenis from 'lenis';

const Home: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Testimonials />
      <Delivery />
      <ContactSection />
    </main>
  );
};

export default Home;