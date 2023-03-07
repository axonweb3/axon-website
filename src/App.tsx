import React from 'react';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';

const FeaturesSection = React.lazy(() => import('./sections/FeaturesSection'));
const FindUsSection = React.lazy(() => import('./sections/FindUsSection'));

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
        <React.Suspense fallback={null}>
          <FeaturesSection />
          <FindUsSection />
        </React.Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
