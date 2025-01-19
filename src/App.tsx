import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Zenen Contreras | Frontend Developer</title>
        <meta name="description" content="Frontend Developer especializado en React, TypeScript y desarrollo web moderno. Explora mi portafolio profesional." />
        <link rel="canonical" href="https://zenen.dev" />
      </Helmet>
      <Header />
      <div className="text-white">
        <div className="flex flex-col md:flex-row pt-16">
          <div className="w-full md:w-[400px] md:sticky top-16 h-auto md:h-[calc(100vh-4rem)]">
            <Hero />
          </div>
          <main className="flex-1 px-4 md:px-8">
            <Technologies />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;