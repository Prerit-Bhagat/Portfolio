import styles from "./App.module.css";
import { About } from "./components/About/about";
import { Contact } from "./components/contact/Contact";
// import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/hero";
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from "./components/projects/projects";

function App() {
  return (
    <div className={styles.App}>
      {/* hello */}
      <div id="Navbar"><Navbar /></div>
      <div id="hero"><Hero /></div>
      <div id="aboutus"><About /></div>
      {/* <Experience /> */}
      <div id="Projects"><Projects/></div>
      <div id="Contact"><Contact /></div>
    </div>
  );
}

export default App;