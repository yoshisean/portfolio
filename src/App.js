import React, {useEffect, useRef, useState} from "react";
import {Canvas, useFrame, useLoader, useThree} from 'react-three-fiber';
import {
    Environment,
    Stats,
    useGLTF,
    OrbitControls,
    useAnimations,
    SoftShadows,
    Plane,
    Float,
    Text, useFont, Cloud, Clouds, GradientTexture, MeshDistortMaterial, useCursor, MeshWobbleMaterial,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import CameraPositionLogger from "./CameraPositionLogger";
import * as THREE from 'three';
import * as PropTypes from "prop-types";
import {Color} from "three";
const bloomColor = new Color("#e7afed")
bloomColor.multiplyScalar(1.2)
// let hexGeo = new BoxGeometry(0,0,0)
// function HexGeometry(height,position){
//     const [hovered, hover] = useState(false)
//     let geo = new CylinderGeometry(3.7,3.7,height,6,1,false)
//     let temp = new SphereGeometry(3.7,32,32)
//     geo.translate(position.x,0,position.y)
//     return geo
// }
//
// function tileToPosition(tileX,tileY){
//     return new Vector3((tileX+(tileY%2)*0.5)*7.5,tileY*6.4,0);
// }
// function makeHex(height,position){
//     let geometry = HexGeometry(height,position);
//     hexGeo = mergeGeometries([hexGeo,geometry])
// }
//
// function HexGrid(props){
//     let geos = []
//     for(let i=0;i<14;i++){
//         for(let j=0;j<8;j++){
//             if(!(j%2===0 && i===0)){
//                 let geo = HexGeometry(3,tileToPosition(i,j))
//                 geos.push(geo)
//                 makeHex(3,tileToPosition(i,j))
//             }
//         }
//     }
//
//
//     return (
//         <mesh receiveShadow={true}
//               geometry={hexGeo}
//               position={[-52,-22,-13]}
//               rotation={[-Math.PI/2,0,0]}>
//             <meshStandardMaterial color={"black"}></meshStandardMaterial>
//         </mesh>
//     )
// }

function Physics(props) {
    return null;
}

Physics.propTypes = {
    gravity: PropTypes.number,
    children: PropTypes.node
};

function IntroText() {
    const ref = useRef();
    return (
        <>
            <Float floatIntensity={1.5}
                   floatingRange={[1, 3]}>
                <Text font={"fonts/Raleway-Black.ttf"} fontSize={10} lineHeight={0.9} position={[0,0,-3]}>
                    {"Hey \nI'm \nSean"}
                    <MeshWobbleMaterial ref={ref} speed={1} factor={0.2}>
                        <GradientTexture rotation={0}
                            stops={[0, 1]} // As many stops as you want
                            colors={['#9bdefa', '#db3b86']} // Colors need to match the number of stops
                        />
                    </MeshWobbleMaterial>
                </Text>
            </Float>
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


function App() {
    return (
        <div className="App" style={{height: "90vh", width: "100vw"}}>
            <Canvas camera={{position: [0, -1, 28]}}>
                <rectAreaLight intensity={Math.PI / 3 * 2} position={[0, 0, 10]} width={30}/>
                <Environment preset="sunset" background blur={0.5}/>
                <Plane position={[0, 0, -12]} scale={[150, 80, 0]} receiveShadow={true}>
                    <meshStandardMaterial color={'black'}/>
                </Plane>
                {/*<Clouds material={THREE.MeshBasicMaterial}>*/}
                {/*    <Cloud seed={1} scale={4} volume={5} color="white" fade={100} position={[0,20,-5]}/>*/}
                {/*</Clouds>*/}
                <IntroText></IntroText>
                <EffectComposer>
                    <Bloom mipmapBlur intensity={1.2}/>
                </EffectComposer>
                <Fish></Fish>
                <SoftShadows></SoftShadows>
                <Stats></Stats>
                <OrbitControls/>
                {/*<CameraPositionLogger event='mousedown'></CameraPositionLogger>*/}
            </Canvas>
        </div>
    );
}
useGLTF.preload("simplefish.glb");
useFont.preload("fonts/Raleway-Black.ttf")
export default App;
