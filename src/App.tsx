import { useCallback, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import AboutSite from './components/AboutSite';
import Projects from './components/Projects';
import IndexNav from './components/IndexNav';

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const handleHeroExpandedChange = useCallback((expanded: boolean) => {
    setNavVisible(expanded);
  }, []);

  return (
    <>
      <IndexNav isVisible={navVisible} />
      <Hero onExpandedChange={handleHeroExpandedChange} />
      <AboutMe />
      <AboutSite />
      <Projects />
    </>
  );
}

export default App;
