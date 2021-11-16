// React Ref Type
import { MutableRefObject } from "react";

// Framer motion
import { motion } from "framer-motion";

// Mouse Hook
import useMouse from "@react-hook/mouse-position";

interface IProps {
  containerRef: MutableRefObject<null>;
}

const CustomCursor = ({ containerRef }: IProps) => {
  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY + window.pageYOffset;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      x: mouseXPosition - 10,
      y: mouseYPosition - 8,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const insetVariants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      x: mouseXPosition - 5,
      y: mouseYPosition - 3,
      transition: {
        type: "spring",
        mass: 1,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 24,
  };

  return (
    <>
      <motion.div
        variants={variants}
        className="outside-circle"
        animate={`default`}
        transition={spring}
      ></motion.div>
      <motion.div
        variants={insetVariants}
        className="circle"
        animate={`default`}
        transition={spring}
      ></motion.div>
    </>
  );
};

export default CustomCursor;
