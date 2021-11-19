import React from "react";
import Work from "../Misc/Work";

// Hover Images
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/museu-1.png";
import displacement from "../../assets/displacement/3.jpg";

import imageFunc1 from "../../assets/func-1.png";
import imageFunc2 from "../../assets/func-2.png";

import imageExpo1 from "../../assets/expo-1.png";
import imageExpo2 from "../../assets/expo-2.png";

import imageArte1 from "../../assets/image-0.png";
import imageArte2 from "../../assets/arte-1.png";

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-title">
        <h1 className="works-title-text">Trabalhos:</h1>
      </div>
      <Work images={[image1, image2, displacement]} title={"Museu Cassoli"}>
        Construímos um museu sobre a história do esporte. As duas turmas foram
        separadas em grupos e cada grupo criou um material sobre um tópico
        específico. Nosso grupo desenvolveu uma aplicação web para resumir todos
        os outros materiais.
      </Work>
      <Work
        images={[imageFunc1, imageFunc2, displacement]}
        title={"Funções Orgânicas"}
      >
        Aplicação desenvolvida para o ensino de funções orgânicas. O objetivo é
        facilitar a identificação de funções orgânicas para estudantes do ensino
        médio. Um backend feito em python com um algoritmo de detecção de
        padrões e um front feito em HTML/CSS.
      </Work>
      <Work
        images={[imageExpo1, imageExpo2, displacement]}
        title={"Exposição de fotos século 19"}
      >
        Uma exposição de momentos importantes da historia do seculo 19. Um video
        com um estilo moderno e fotos de momentos importantes e relevantes sobre
        os eventos do seculo 19.
      </Work>
      <Work
        images={[imageArte1, imageArte2, displacement]}
        title={"S.A. Semana da arte"}
      >
        Uma situação de aprendizagem para o final do segundo trimestre onde o
        objetivo era montar de forma dinâmica aplicações web a fim de apresentar
        ao aluno uma visão geral sobre a arte moderna e pop-art, foi a primeira
        aplicação desenvolvida por mim em react, existe também uma área de
        upload de fotos.
      </Work>
      <div className="link">
        <a
          className="portfolio-link"
          href="https://drive.google.com/drive/u/0/folders/1OObgXTmHF_o0ycI8e4d2SGgFqc16ttMD"
        >
          Portfólio Completo!
        </a>
      </div>
    </div>
  );
};

export default Works;
