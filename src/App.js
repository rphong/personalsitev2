import React from 'react';
import './css/main.scss';

import Navigation from './components/Navigation';

import About from './sections/About';
import Projects from './sections/Projects';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
      <Projects/>
      <Hobbies/>
      <Contact/>
    </div>
  );
}

export default App;
