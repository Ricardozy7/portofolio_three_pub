import './styles.css';
import React, { useRef, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { OrbitControls, Stage } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Texture from '../../assets/imgs/surface.jpg'
import Particle from '../particles'

const Box = ({ }) => {
    const mesh = useRef(null)
    const colorMap = useLoader(TextureLoader, Texture)
    return (
        <mesh
        >
            <sphereBufferGeometry args={[3, 100, 100]} />
            <meshStandardMaterial attach='material' map={colorMap} alphaMap={colorMap} />
            <OrbitControls autoRotate autoRotateSpeed={0.2} zoomSpeed={0.1} />
        </mesh>
    )
}


function App() {
    return (
        <div className='conteinerLaptop'>
            <div className='boxWorks'>

                {/* <Canvas >
                 <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[-10, 0, -20]} intensity={0.3} />
                    <pointLight position={[10, 0, 10]} intensity={0.3} />
                    <Box />
                </Suspense>
                   
            <OrbitControls autoRotate autoRotateSpeed={0.2} zoomSpeed={0.1} /> 
                </Canvas> */}

                <Particle />


            </div>
            <div className='boxWorks'>
                <h1 className="AboutMe" style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>MEU TRABALHO</h1>
                <h5 style={{
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    color: 'white'
                }}
                >Apaixonado por Front End, meu trabalho é focado na rapidez e eficiencia, UX: usabilidade e experiência do usuário.
                    Desde a cafeteira que usamos para preparar nosso café de manhã, até nossos apps favoritos, ou mesmo as regras do design de s
                    ites implementadas quando no processo de criação de um negócio online — grande parte de nossa rotina
                    diária envolve, e até mesmo depende, de interações regulares com produtos digitais e materiais. Essas interações
                    geram sentimentos que deixam uma impressão duradoura em nós como usuários, também conhecida como UX, a experiência
                    do usuário.
                    <br />
                    <br />
                    O UX design é a arte de moldar produtos de forma cuidadosa para melhorar essas experiências e, em nossa
                    humilde opinião, é o herói desconhecido do século 21. Com o potencial de melhorar e apoiar nossos
                    relacionamentos complexos com produtos e tecnologia, a UX está se tornando cada vez mais parte integrante da indústria de design.
                    <br />
                    <br />
                    Então, o que é a experiência do usuário? E por que isso é tão importante? Vamos responder a essas perguntas, mergulhando nas ideias e princípios ambiciosos que impulsionam esse universo.
                </h5>

            </div>
        </div>

    );
}

export default App;