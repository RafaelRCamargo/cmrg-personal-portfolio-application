import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";

// Hover Images
/* import image1 from "./assets/me-0.png";
import image2 from "./assets/me-1.png";
import displacement from "./assets/displacement.jpg"; */
import TextEditor from "../TextEditor";

const coolWords = [
  "um desenvolvedor full-stack, apaixonado por web moderna.",
  "um estudante curioso, se parecer difícil e desconhecido melhor ainda.",
];

const Hero = () => {
  const [selected, setSelected] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      titleRef!.current!.innerText = "c";
    }, 100);
    setTimeout(() => {
      titleRef!.current!.innerText += "m";
    }, 200);
    setTimeout(() => {
      titleRef!.current!.innerText += "r";
    }, 300);
    setTimeout(() => {
      titleRef!.current!.innerText += "g";
    }, 400);
    setTimeout(() => {
      titleRef!.current!.click();
    }, 500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSelected(selected ? 0 : 1);
    }, 9000);
  }, [selected]);

  return (
    <div className="hero-container">
      <div className="start-col">
        <div className="main-title">
          <h1
            ref={titleRef}
            className="title"
            contentEditable="true"
            spellCheck="false"
          ></h1>
        </div>
        <div className="main-description">
          <p className="description">
            <span className="cool-words">
              {[...coolWords[selected]].map((letter, i) => {
                return (
                  <span
                    key={letter + i + Math.random()}
                    className="cool-word"
                    style={{
                      animationDelay: `${50 * i}ms`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </p>
        </div>
      </div>
      <div className="end-col">
        {/* <Reveal displacement={displacement} img1={image1} img2={image2} /> */}
        <TextEditor />
      </div>
    </div>
  );
};

export default Hero;
