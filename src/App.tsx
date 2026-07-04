import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import WhySavora from './components/WhySavora';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import type { LegalDoc } from './legal';

export default function App() {
  const [legal, setLegal] = useState<LegalDoc | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppPreview />
        <WhySavora />
        <ComingSoon />
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalModal doc={legal} onClose={() => setLegal(null)} />
    </>
  );
}
