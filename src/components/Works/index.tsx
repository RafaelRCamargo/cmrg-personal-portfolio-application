import React from "react";
import Work from "../Misc/Work";

// Hover Images
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-0.png";
import displacement from "../../assets/displacement/3.jpg";

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-title">
        <h1 className="works-title-text">Trabalhos:</h1>
      </div>
      <Work images={[image1, image2, displacement]} title={"Museu Cassoli."}>
        Projeto do museu cassoli, em parceria com a empresa{" "}
        <a
          href="https://www.museucassoli.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Museu Cassoli
        </a>
        , que visa proporcionar ao público um espaço de aprendizagem, interação
        e conhecimento.
      </Work>
      <Work images={[image1, image2, displacement]} title={"Museu Cassoli."}>
        Projeto do museu cassoli, em parceria com a empresa{" "}
        <a
          href="https://www.museucassoli.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Museu Cassoli
        </a>
        , que visa proporcionar ao público um espaço de aprendizagem, interação
        e conhecimento.
      </Work>
      <Work images={[image1, image2, displacement]} title={"Museu Cassoli."}>
        Projeto do museu cassoli, em parceria com a empresa{" "}
        <a
          href="https://www.museucassoli.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Museu Cassoli
        </a>
        , que visa proporcionar ao público um espaço de aprendizagem, interação
        e conhecimento.
      </Work>
    </div>
  );
};

export default Works;
