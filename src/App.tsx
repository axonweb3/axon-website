import { LazyMotion } from 'framer-motion';
import React from 'react';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import { domAnimation } from 'framer-motion';
import Loading from './components/Loading';

const FeaturesSection = React.lazy(() => import('./sections/FeaturesSection'));
const FindUsSection = React.lazy(() => import('./sections/FindUsSection'));

function App() {
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Loading />
      <main>
        <HeroSection />
        <React.Suspense fallback={null}>
          <FeaturesSection />
          <FindUsSection />
        </React.Suspense>
      </main>
      <Footer />
    </LazyMotion>
  );
}

export default App;
