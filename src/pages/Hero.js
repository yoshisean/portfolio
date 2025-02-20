import React, {Suspense, useEffect, useLayoutEffect, useRef, useState, useTransition} from "react";
import {Canvas, useFrame, useLoader, useThree} from 'react-three-fiber';
import {
    Environment,
    Stats,
    useGLTF,
    OrbitControls,
    useAnimations,
    SoftShadows,
    Text,
    useFont,
    GradientTexture,
    MeshWobbleMaterial,
    Box,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {Color, TorusGeometry, Vector2} from "three";
import {easing} from "maath";
import App from "../App";
import NavBar from "../components/NavBar";
const bloomColor = new Color("#e7afed")
bloomColor.multiplyScalar(1.2)

function IntroText() {
    const ref = useRef();
    const { size } = useThree()
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [state.pointer.x*2,state.pointer.y*2, 30], 0.3, delta)
        state.camera.lookAt(-state.camera.position.x*2/3, -state.camera.position.y/2, -4)
    })
    return (
        <>
            <Text font={"fonts/Raleway-Medium.ttf"}
                  fontSize={10} lineHeight={0.9} position={[0,0,-3]} >
                {"Hey,\nI'm \nSean"}
                <MeshWobbleMaterial ref={ref} speed={1} factor={0.15} toneMapped={false}>
                    <GradientTexture
                        stops={[0, 1]}
                        colors={['#db3b86','#9bdefa']}
                    />
                </MeshWobbleMaterial>
            </Text>
        </>
    );
}
function Fish(props) {
    const group = useRef();
    const {scene, animations} = useGLTF("simplefishKeyframes.glb");
    const {actions} = useAnimations(animations, group);
    useEffect(() => {
        actions.KeyAction.play()
    });
    return (
        <group ref={group} {...props}>
            <mesh>
                <primitive object={scene} scale={1.3} rotation={[0,Math.PI,0]}/>
            </mesh>
        </group>
    )
}

function LoadingScreen({lightMode}) {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: lightMode ? "#000000" : "#eeeffe",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        }}>
            <div className="spinner"></div>
            <div>Loading...</div>
        </div>
    );
}

function Hero({lightMode}) {
    return (
        <div style={{height: "100vh", width: "100vw"}} id={"home"}>
            <Suspense fallback={<LoadingScreen lightMode={lightMode} />}>
                <Canvas camera={{position:[0,0,40]}}>
                    <rectAreaLight intensity={Math.PI / 2} position={[0, 0, 10]} width={30}/>
                    <Environment preset="sunset" background blur={0.5}/>
                    <Box material-color={ lightMode ? "#eeeffe":"#000000" } position={[0,0,-12]} scale={[170,90,0]} receiveShadow={false}/>
                    <IntroText></IntroText>
                    <EffectComposer>
                        <Bloom mipmapBlur intensity={1.2}/>
                    </EffectComposer>
                    <Fish/>
                    <SoftShadows></SoftShadows>
                </Canvas>
            </Suspense>
        </div>
    );
}
useGLTF.preload("simplefishKeyframes.glb");
useFont.preload("fonts/Raleway-Black.ttf")
useFont.preload("fonts/Montserrat-Regular.ttf")

export default Hero;
