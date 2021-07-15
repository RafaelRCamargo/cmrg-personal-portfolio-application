import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  /* Textures */
  /*
    const [colorMap, displacementMap, normalMap, metallicMap, roughnessMap] = useLoader(TextureLoader, [
        'textures/MetalPlates008_2K_Color.jpg',
        'textures/MetalPlates008_2K_Displacement.jpg',
        'textures/MetalPlates008_2K_Normal.jpg',
        'textures/MetalPlates008_2K_Metalness.jpg',
        'textures/MetalPlates008_2K_Roughness.jpg',
    ])
    */

  /* Rotate */
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });

  //<meshStandardMaterial color={hovered ? '#d95043' : '#221826'} />

  return (
    <mesh
      {...props}
      visible
      ref={mesh}
      scale={active ? 1.8 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry args={[2, 0, 2]} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color="#d95043"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
      <OrbitControls />
    </mesh>
  );
}

export default Box;
