import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
// import About from "./components/About.jsx";
// import Art from "./components/Art.jsx";
// import Menu from "./components/Menu.jsx";
// import Contact from "./components/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
