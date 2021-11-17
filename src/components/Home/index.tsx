import { useEffect, useRef } from "react";

// Smooth Scroll
import luxy from "luxy.js/dist/js/luxy";

// Components
import Header from "../Header";
import Hero from "../Hero";

/* import Social from "../Social"; */
import Works from "../Works";
import About from "../About";

const Home = ({ loading }: { loading: boolean }) => {
  const luxyRef = useRef(null);

  useEffect(() => {
    if (luxyRef.current) {
      luxy.init();
    }
  }, [loading]);

  return (
    <>
      <Header />
      {/* <Social /> */}
      <div ref={luxyRef} id="luxy">
        <Hero />
        <About />
        <Works />
      </div>
    </>
  );
};

export default Home;
