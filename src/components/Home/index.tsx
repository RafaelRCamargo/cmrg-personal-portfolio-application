import { useEffect, useRef } from "react";

// Framer motion
import { motion } from "framer-motion";

// Smooth Scroll
import luxy from "luxy.js/dist/js/luxy";

// Components
import Header from "../Header";
import Hero from "../Hero";

import Social from "../Social";
import Works from "../Works";

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
      <Social />
      <div ref={luxyRef} id="luxy">
        <Hero />
        {!loading && (
          <div className="transition-image final">
            <motion.img
              transition={{
                ease: [0.6, 0.02, 0.9, 0.95],
                duration: 1.2,
              }}
              src={process.env.PUBLIC_URL + `/images/work/image-1.png`}
              layoutId="main-image-1"
            />
          </div>
        )}
        <Works />
      </div>
    </>
  );
};

export default Home;
