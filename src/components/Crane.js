import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import origamiCrane from '../resources/models/origamiCrane.glb';

const Dice = (props) => {

    function Model(Modelprops) {
        const group = useRef();
        const { nodes, materials } = useGLTF(origamiCrane);
        useFrame((state) => {
            const t = state.clock.getElapsedTime();
            group.current.rotation.x = Math.cos(t / 2) / 7 + 0.8;
            group.current.rotation.y = Math.sin(t / 2) / 7 + 3.6;
        })
        return (
            <group ref={group} {...Modelprops} dispose={null} position={[0, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.Material}
                    scale={2}
                />
            </group>
        );
    }

    useGLTF.preload(origamiCrane);


    return (
        <div className={"modelDiv " + props.className}>
            <Canvas pixelRatio={window.devicePixelRatio} >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Dice;