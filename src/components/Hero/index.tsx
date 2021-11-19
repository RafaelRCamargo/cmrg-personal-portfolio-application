import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";

// Hover Images
import TextEditor from "../TextEditor";

const coolWords = [
  "Gosto de criar experiências sólidas e escaláveis, com as tecnologias mais modernas do mercado.",
  "Desenvolvendo soluções, dos problemas mais simples aos que nem existem ainda!",
  "Estudante curioso, sempre em busca de algo novo e inexplorado.",
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
    }, 300);
    setTimeout(() => {
      titleRef!.current!.innerText += "r";
    }, 600);
    setTimeout(() => {
      titleRef!.current!.innerText += "g";
    }, 900);
    setTimeout(() => {
      titleRef!.current!.click();
    }, 1200);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSelected(selected < coolWords.length - 1 ? selected + 1 : 0);
    }, 10000);
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
        <TextEditor />
      </div>
    </div>
  );
};

export default Hero;
