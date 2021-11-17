import React, { useState } from "react";

// Framer motion
import { motion } from "framer-motion";

import Reveal from "../Reveal";
import { AboutContent } from "./components/AboutContent";

// Hover Images
import image1 from "./assets/image-1.png";
import image2 from "./assets/image-2.jpg";
import displacement from "./assets/displacement/1.jpg";
import { JobContent } from "./components/JobContent";
import { ToolsIUse } from "./components/ToolsIUse";

const About = () => {
  const [image, setImage] = useState(true);

  return (
    <>
      <div className="about-container">
        <AboutContent />
        {image ? (
          <div className="transition-image final">
            <motion.img
              transition={{
                ease: [0.6, 0.02, 0.9, 1.95],
                duration: 2,
              }}
              src={process.env.PUBLIC_URL + `/images/me/image-1.png`}
              layoutId="main-image-1"
              onLayoutAnimationComplete={() => {
                setTimeout(() => {
                  setImage(false);
                }, 1000);
              }}
            />
          </div>
        ) : (
          <div className="about-image">
            <Reveal
              size={"500"}
              img1={image1}
              img2={image2}
              displacement={displacement}
            />
          </div>
        )}
      </div>
      <div className="job-container">
        <JobContent />
        <ToolsIUse />
      </div>
    </>
  );
};

export default About;
