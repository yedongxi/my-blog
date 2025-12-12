import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Articles } from './components/Articles';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 selection:bg-primary-100 selection:text-primary-900">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Articles /> 
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;