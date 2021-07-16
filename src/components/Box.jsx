import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useSpring, animated } from "react-spring/three";
// import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [scale, setScale] = useState([2, 0, 2]);

  /* Rotate */
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });

  useEffect(() => {
    {
      active ? setScale([2, 0, 2]) : setScale([2, 20, 2]);
    }
  }, [active]);

  //<meshStandardMaterial color={hovered ? '#d95043' : '#221826'} />

  return (
    <animated.mesh
      {...props}
      visible
      ref={mesh}
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry args={scale} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color="#d95043"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
      <OrbitControls />
    </animated.mesh>
  );
}

export default Box;
