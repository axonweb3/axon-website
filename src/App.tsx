import React from 'react';
import HeroSection from './sections/HeroSection';
import StartSection from './sections/StartSection';

const FeaturesSection = React.lazy(() => import('./sections/FeaturesSection'));

function App() {
  return (
    <div className="App">
      <HeroSection />
      <StartSection />
      <React.Suspense fallback={null}>
        <FeaturesSection />
      </React.Suspense>
    </div>
  );
}

export default App;
