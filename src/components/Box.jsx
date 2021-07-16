import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

function Box(/*props*/) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [scale, setScale] = useState([2, 0, 2]);

  const { ...props } = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    rotation: active
      ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)]
      : [0, 0, 0]
  });

  /* Rotate */
  /*useFrame((state, delta) => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });*/

  useEffect(() => {
    active ? setScale([2, 0, 2]) : setScale([2, 20, 2]);
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
      <icosahedronGeometry args={[2, 0, 2]} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        transparent
        color={hovered ? "#d95043" : "#221826"}
        roughness={0.1}
        metalness={0.1}
      />
      <OrbitControls />
    </animated.mesh>
  );
}

export default Box;
