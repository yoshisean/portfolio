import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
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
    const fish = useGLTF('simplefishKeyframes.glb');
    const group = useRef();
    const {scene, nodes,materials,animations} = useGLTF("simplefishKeyframes.glb");
    const {actions} = useAnimations(animations, group);
    useEffect(() => {
        actions.KeyAction.play()
    });
    return (
        <group ref={group} {...props}>
            <mesh>
                <primitive object={fish.scene} scale={1.3} rotation={[0,Math.PI,0]}/>
            </mesh>
        </group>
    )
}

function Hero({lightMode}) {
    return (
        <div className="component" style={{height: "100vh", width: "100vw"}} id={'home'}>
            <Canvas camera={{position:[0,0,40]}}>
                <rectAreaLight intensity={Math.PI / 2} position={[0, 0, 10]} width={30}/>
                <Environment preset="sunset" background blur={0.5}/>
                <Box material-color={ lightMode?"#eeeffe":"#000000"} position={[0,0,-12]} scale={[170,90,0]} receiveShadow={false}/>
                <IntroText></IntroText>
                <EffectComposer>
                    <Bloom mipmapBlur intensity={1.2}/>
                </EffectComposer>
                <Fish/>
                <SoftShadows></SoftShadows>
                {/*<Stats/>*/}
                {/*<OrbitControls/>*/}
                {/*<CameraPositionLogger event='mousedown'></CameraPositionLogger>*/}
            </Canvas>
        </div>
    );
}
useGLTF.preload("simplefish.glb");
useFont.preload("fonts/Raleway-Black.ttf")
useFont.preload("fonts/Montserrat-Regular.ttf")

export default Hero;
