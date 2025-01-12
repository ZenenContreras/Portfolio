import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white">
      <Header />
      <div className="flex flex-col md:flex-row pt-16"> {/* Make it stack on mobile */}
        <div className="w-full md:w-[400px] md:sticky top-16 h-auto md:h-[calc(100vh-4rem)]"> {/* Full width on mobile */}
          <Hero />
        </div>
        <main className="flex-1 px-4 md:px-8">
          <Services />
          <Technologies />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;