import React from 'react';
import './css/main.scss';

import Parallax from './template/ParallaxBg';

import About from './sections/About';
import Projects from './sections/Projects';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';

function App() {
  return (
    <Parallax>
        <About/>
        <Projects/>
        <Hobbies/>
        <Contact/>
    </Parallax>
  );
}

export default App;
