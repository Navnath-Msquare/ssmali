import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Machinery from './components/Machinery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import Gallery from './components/Gallery';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow pt-16 md:pt-0">
        {/* Dynamic Image-Slider & Stats Banner */}
        <Hero />

        {/* Company profile, values and principles */}
        <About />

        {/* Construction services and lease details */}
        <Services />

        {/* Filterable projects showcase */}
        <Projects />

        {/* Works Gallery */}
        <Gallery />

        {/* Owned heavy equipment listings */}
        <Machinery />

        {/* Quote submission form and FAQs section */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Direct Quote Modal Popup */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

export default App;
