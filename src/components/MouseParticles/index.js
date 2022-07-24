// import React from 'react'
import "./index.scss";
import * as THREE from "three";

import ReactDOM from "react-dom"
import React, { useRef } from "react"
import { Canvas, useThree, useFrame } from "react-three-fiber"

const MouseParticles = () => {


    function Dodecahedron() {
        const { viewport } = useThree()
        // viewport = canvas in 3d units (meters)

        const ref = useRef()
        useFrame(({ mouse }) => {
            const x = (mouse.x * viewport.width) / 2
            const y = (mouse.y * viewport.height) / 2
            ref.current.position.set(x, y, 0)
            ref.current.rotation.set(-y, x, 0)
        })

        return (
            <mesh ref={ref} castShadow>
                <dodecahedronBufferGeometry attach="geometry" />
                <meshNormalMaterial attach="material" />
            </mesh>
        )
    }

    ReactDOM.render(
        <Canvas style={{ background: "lightblue" }} shadowMap camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.6} position={[20, 10, 10]} angle={0.2} penumbra={1} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
            <mesh receiveShadow>
                <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
                <meshPhongMaterial attach="material" color="#272727" />
            </mesh>
            <Dodecahedron />
        </Canvas>,
        document.getElementById("root")
    )
}

export default MouseParticles