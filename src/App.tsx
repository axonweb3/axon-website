import React from 'react';
import Footer from './components/Footer';
import FeaturesSection from './sections/FeaturesSection';
import FindUsSection from './sections/FindUsSection';
import HeroSection from './sections/HeroSection';

function App() {
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <FindUsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
