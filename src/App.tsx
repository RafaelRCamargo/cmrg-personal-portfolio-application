import { useEffect, useRef, useState } from "react";

// Framer motion
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// Context
import { CursorProvider } from "./context/UserContext";

// Components
import CustomCursor from "./components/Misc/CustomCursor";
import Loader from "./components/Loader";
import Home from "./components/Home";

// Styles
import "./sass/main.scss";

function App() {
  const ref = useRef(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document?.querySelector("body")?.classList.add("loading")
      : document?.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <div ref={ref} className="container">
      <CursorProvider>
        <CustomCursor containerRef={ref} />
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {loading ? (
              <motion.div key="loader">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <Home loading={loading} />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </CursorProvider>
    </div>
  );
}

export default App;
