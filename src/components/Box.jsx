import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

function Box(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    /* Textures */
    /*const [colorMap, displacementMap, normalMap, metallicMap, roughnessMap] = useLoader(TextureLoader, [
        'textures/MetalPlates008_2K_Color.jpg',
        'textures/MetalPlates008_2K_Displacement.jpg',
        'textures/MetalPlates008_2K_Normal.jpg',
        'textures/MetalPlates008_2K_Metalness.jpg',
        'textures/MetalPlates008_2K_Roughness.jpg',
    ])*/

    /* Rotate */
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.005
        mesh.current.rotation.y += 0.005
    })

    //<meshStandardMaterial color={hovered ? '#d95043' : '#221826'} />    

    return (
        <mesh
            {...props}
            visible
            ref={mesh}
            scale={active ? 1.8 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <sphereGeometry args={[1, 100, 200]} attach="geometry" />
            <meshStandardMaterial
                attach="material" // How the element should attach itself to its parent
                color="#d95043" // The color of the material
                transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
                roughness={0.1} // The roughness of the material - Defaults to 1
                metalness={0.1}
            />
            <OrbitControls />
        </mesh>
    )
}

export default Box