import { motion } from "framer-motion";

import Image from "../Misc/Image";

const container = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.02, 0.9, 0.95],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.02, 0.9, 0.95],
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }: { setLoading: (value: boolean) => void }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() =>
          setTimeout(() => {
            setLoading(false);
          }, 500)
        }
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-0" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={process.env.PUBLIC_URL + `/images/work/image-1.png`}
          />
        </motion.div>
        <ImageBlock variants={item} id="image-2" />
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
        <ImageBlock variants={item} id="image-6" />
        <ImageBlock variants={item} id="image-7" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({
  posX,
  posY,
  variants,
  id,
}: {
  posX?: number;
  posY?: number;
  variants: any;
  id: string;
}) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image src={process.env.PUBLIC_URL + `/images/work/${id}.png`} alt={id} />
    </motion.div>
  );
};
export default Loader;
