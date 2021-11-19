import { useEffect, useRef } from "react";

// Hover Image Effect
import hoverEffect from "hover-effect";

// Styles
import styles from "./Reveal.module.css";

const getImageDimensions = (url: string) => {
  return new Promise((resolve, reject) => {
    try {
      var img = new Image();
      img.addEventListener("load", function () {
        resolve({ width: this.naturalWidth, height: this.naturalHeight });
      });
      img.src = url;
    } catch (err) {
      reject(err);
    }
  });
};

const getFittedDimensions = ({ parent, child }: any) => {
  const aspectChild = child.width / child.height;
  const aspectParent = parent.width / parent.height;

  if (aspectChild > aspectParent) {
    return {
      width: parent.width,
      height: parent.width / aspectChild,
    };
  } else {
    return {
      width: parent.height * aspectChild,
      height: parent.height,
    };
  }
};

function Reveal({ size, displacement, img1, img2 }: any) {
  const canvasRef = useRef<any>();
  const revealRef = useRef<any>();
  const sizeConstraintRef = useRef<any>();

  useEffect(() => {
    if (!canvasRef.current || !sizeConstraintRef.current) return;

    const run = async () => {
      const parent = revealRef?.current?.getBoundingClientRect();
      const child = await getImageDimensions(img1);

      const { width, height } = getFittedDimensions({ parent, child });

      sizeConstraintRef.current.style.width = size
        ? size * 1.777 + "px"
        : width + "px";
      sizeConstraintRef.current.style.height = size
        ? size + "px"
        : height + "px";

      new hoverEffect({
        parent: canvasRef.current,
        intensity: 0.2,
        image1: img1,
        image2: img2,
        displacementImage: displacement,
        imagesRatio: height / width,
      });
    };

    run();
  }, [img1, img2, canvasRef, sizeConstraintRef, displacement]);

  return (
    <div
      ref={revealRef}
      className={styles.Reveal}
      style={{ width: size * 1.777, height: size }}
    >
      <div
        ref={sizeConstraintRef}
        className={styles.SizeConstraint}
        style={{ width: size * 1.777, height: size }}
      >
        <div
          ref={canvasRef}
          className={styles.Canvas}
          style={{ width: size * 1.777, height: size }}
        ></div>
      </div>
    </div>
  );
}

export default Reveal;
