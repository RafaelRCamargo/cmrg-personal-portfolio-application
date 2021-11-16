import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">cmrg</div>
        <nav className="nav">
          <li>
            <a href="#root">inicio</a>
          </li>
          <li>
            <a href="/work">trabalhos</a>
          </li>
          <li>
            <a href="/about">sobre</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">vamos trocar uma ideia?</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
