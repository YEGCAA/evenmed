
import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Problem from './components/Problem.tsx';
import Methodology from './components/Methodology.tsx';
import Results from './components/Results.tsx';
import Plans from './components/Plans.tsx';
import BusinessModel from './components/BusinessModel.tsx';
import Differentiators from './components/Differentiators.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';

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
