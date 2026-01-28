
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Plans from './components/Plans';
import BusinessModel from './components/BusinessModel';
import Differentiators from './components/Differentiators';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="snap-container">
        <section className="snap-section"><Hero /></section>
        <section className="snap-section"><About /></section>
        <section className="snap-section"><Problem /></section>
        <section className="snap-section"><Methodology /></section>
        <section className="snap-section"><Results /></section>
        <section className="snap-section"><Plans /></section>
        <section className="snap-section"><BusinessModel /></section>
        <section className="snap-section"><Differentiators /></section>
        <section className="snap-section flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <FinalCTA />
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
