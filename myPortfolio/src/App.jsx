import styles from  './App.module.css'

import { Navbar } from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';

function App() {

  return (
    //<div>Hello world</div>
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Contact />
      <About/>
    </div>
  );
};

export default App;
