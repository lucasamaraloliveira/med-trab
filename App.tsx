import React, { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy loading components below the fold
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <Suspense fallback={<div className="h-20" />}>
          <section id="servicos">
            <Services />
          </section>

          <section id="sobre">
            <About />
          </section>

          <section id="contato">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-10" />}>
        <Footer />
      </Suspense>

      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default App;
