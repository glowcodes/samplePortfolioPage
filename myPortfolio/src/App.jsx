import styles from  './App.module.css'

import { Navbar } from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';

function App() {

  return (
    //<div>Hello world</div>
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
