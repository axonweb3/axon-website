import React from 'react';
import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';

function App() {
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default App;
