import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import Box from "../components/Box";
import "./Home.css";

let Home = () => {
  return (
    <div className="container-home">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          <Box position={[0, 0, 0]} />
        </Suspense>
        {/*An ambient light that creates a soft light against the object */}
        <ambientLight intensity={0.5} />
        {/*An directional light which aims form the given position */}
        {/*An point light, basically the same as directional. This one points from under */}
        <pointLight position={[0, -10, 5]} intensity={1} />
        <pointLight position={[0, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default Home;
