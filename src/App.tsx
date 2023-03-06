import React from 'react';
import HeroSection from './sections/HeroSection';

const FeaturesSection = React.lazy(() => import('./sections/FeaturesSection'));

function App() {
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <React.Suspense fallback={null}>
        <FeaturesSection />
      </React.Suspense>
    </div>
  );
}

export default App;
