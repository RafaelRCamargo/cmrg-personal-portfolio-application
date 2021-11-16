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

function Reveal({ displacement, img1, img2 }: any) {
  const canvasRef = useRef<any>();
  const revealRef = useRef<any>();
  const sizeConstraintRef = useRef<any>();

  useEffect(() => {
    if (!canvasRef.current || !sizeConstraintRef.current) return;

    const run = async () => {
      const parent = revealRef?.current?.getBoundingClientRect();
      const child = await getImageDimensions(img1);

      const { width, height } = getFittedDimensions({ parent, child });

      sizeConstraintRef.current.style.width = width + "px";
      sizeConstraintRef.current.style.height = height + "px";

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
    <div ref={revealRef} className={styles.Reveal}>
      <div ref={sizeConstraintRef} className={styles.SizeConstraint}>
        <div ref={canvasRef} className={styles.Canvas}></div>
      </div>
    </div>
  );
}

export default Reveal;
