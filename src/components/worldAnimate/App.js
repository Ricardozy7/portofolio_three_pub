import './App.css';
import React, { useRef, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import {OrbitControls} from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Texture from './teste.jpg'


const Box = ({ }) => {
  const mesh = useRef(null)
  const colorMap = useLoader(TextureLoader, Texture)
  return (
    <mesh
    material={new THREE.MeshBasicMaterial({ transparent: true, map: colorMap })}
    >
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshStandardMaterial attach='material' map={colorMap} />
      <OrbitControls autoRotate />
    </mesh>
  )
}


function App() {



  return (
    <div style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Canvas >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3}/>
        <pointLight position={[-10, 0, -20]} intensity={0.3}/>
        <pointLight position={[10, 0, 10]} intensity={0.3}/>
        <Box />
      </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
