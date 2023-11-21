// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Decal,Float,OrbitControls,Preload,useTexture } from "@react-three/drei";
// import Loader from "../Loader";
// import { Suspense } from "react";

// const Ball = (props) =>{
//     const [decal] =useTexture([props.imgUrl])

//     return (
        
//         <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//         <ambientLight intensity={0.8} />
//         <directionalLight position={[0, 0, 0.05]} />
//         <mesh castShadow receiveShadow scale={2}>
//           <icosahedronGeometry args={[1, 1]} />
//           <meshStandardMaterial
//             color='#fff8eb'
//             polygonOffset
//             polygonOffsetFactor={-5}
//             flatShading
//           />
//           <Decal
//             position={[0, 0, 1]}
//             rotation={[2 * Math.PI, 0, 6.25]}
//             scale={1.2}
//             map={decal}
//             flatShading
//           />
//         </mesh>
//       </Float>
//     )
// }

// const BallCanvas = ({icon}) =>{

//     return (
        
//         <Canvas
//       frameloop='demand'
      
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<Loader />}>
//         <OrbitControls
//           enableZoom={false}
          
//         />
//         <Ball imgUrl={icon} />

//       </Suspense>
        
//       <Preload all />
      
//     </Canvas>
    
//     )

// }

// export default BallCanvas;



import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import Loader from "../Loader";

import { Suspense } from "react";

 

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);

  const ballRef = useRef();

  const [isAutoRotating, setAutoRotating] = useState(false);

 

  // Function to reset the rotation to its original state

  const resetRotation = () => {

    ballRef.current.rotation.set(0, 0, 0);

  };

 

  // Use useFrame to add auto-rotation if not manually rotating

  useFrame(({ clock }) => {

    if (!isAutoRotating) {

      ballRef.current.rotation.x += 0.005; // Adjust the rotation speed as needed

      ballRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed

    }

  });

 

  return (

    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >

      <ambientLight intensity={0.8} />

      <directionalLight position={[0, 0, 0.05]} />

      <mesh ref={ballRef} castShadow receiveShadow scale={2}>

        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />

        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1.2} map={decal} flatShading />

      </mesh>

      {/* <button onClick={resetRotation}>Reset Rotation</button> */}

    </Float>

  );

};

 

const BallCanvas = ({ icon }) => {

  return (

    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>

      <Suspense fallback={<Loader />}>

        <OrbitControls enableZoom={false} />

        <Ball imgUrl={icon} />

      </Suspense>

      <Preload all />

    </Canvas>

  );

};

 

export default BallCanvas;