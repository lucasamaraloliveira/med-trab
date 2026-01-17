
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="sobre">
          <About />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />

      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default App;
