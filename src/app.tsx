import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

//  <div className="flex-center h-[100vh]">
//       <h1 className="text-3xl text-indigo-300">Hello GSAP</h1>
//     </div>

export default App;
