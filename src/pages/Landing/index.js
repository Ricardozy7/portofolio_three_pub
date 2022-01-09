import React, { useRef } from "react";
import Header from "../../components/header";
import Profile from "../../assets/imgs/profile.png"
import './styles.css'
import { COLOR } from "../../Theme";
import { FiInstagram, FiLinkedin } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import Works from "../../components/works";
import Texts from "../../components/Texts";
import Reflet from "../../components/reflet";
import Footer from "../../components/footer";

const Landing = () => {
    const scrollWork = useRef(null);
    const scrollText = useRef(null);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Header refs={{ work: scrollWork, text: scrollText }} />
            <div className="background">
                <div style={{ color: '#fff', }} className="user">
                    <div className="hello">OLÁ, MEU NOME É RICARDO DIAS</div>
                    <div className="AboutMeConteiner">
                        <h1 className="AboutMe" style={{
                            backgroundColor: '#000'
                        }}>SOU</h1>
                        <h1 className="AboutMe" style={{ color: COLOR.PRIMARY, marginLeft: 10, backgroundColor: '#000' }}>DESENVOLVEDOR</h1>
                        <h1 className="AboutMe" style={{ marginLeft: 10, backgroundColor: '#000', zIndex: 100000000000 }}>WEB E MOBILE</h1>
                        <div className="line" />
                        
                    </div>
                    
                    <div style={{
                        fontFamily: 'sans-serif',
                        fontSize: 10,
                        backgroundColor: '#000',
                        zIndex: 100
                    }}>TRABALHO PRINCIPALMENTE COM AS TECNOLOGIAS REACT NATIVE, REACT JS E PYTHON.</div>
                    <div className="conteiner-social">
                        <a
                            className="box-social"
                            href="https://www.instagram.com/ricardo_zy_/"
                            target={'_blank'}
                            rel="noreferrer noopener"
                        >
                            <FiInstagram size={20} className="social" />
                        </a>
                        <a
                            className="box-social"
                            href="https://www.linkedin.com/in/ricardo-dias-24b5a6225/"
                            target={'_blank'}
                            rel="noreferrer noopener"
                        >
                            <FiLinkedin size={20} className="social" />
                        </a>
                        <a
                            className="box-social"
                            href="https://api.whatsapp.com/send?phone=+5574981019500"
                            target={'_blank'}
                            rel="noreferrer noopener"
                        >
                            <SiWhatsapp size={20} className="social" />
                        </a>
                    </div>
                    
                </div>

               
                <div className="Profile">
                            <Reflet />
                        </div>
            </div>
            <div ref={scrollWork}>
                <Works />
            </div>
            <div className="conteinerTexts">
                <div className='boxWorks'>
                    <h1 className="AboutMe" style={{ color: 'white', textAlign: 'center', marginTop: 50, color: '#8400e1' }}>RAPIDEZ</h1>
                    <h5 style={{
                        fontFamily: 'sans-serif',
                        fontSize: 15,
                        color: 'white'
                    }}
                    >
                        Ciências da Computação e Engenharia da Computação são cursos da área de Exatas,
                        então espera-se que o conhecimento em matemática seja um diferencial para um bom programador,
                        não? Bem, não exatamente… Um estudo conduzido na Universidade de Washington observou que a aptidão
                        mais importante para codificadores é a capacidade de aprender idiomas.
                        <br />
                        <br />

                        “Muitas barreiras aos cursos de programação estão baseadas no estereótipo de que as habilidades
                        de um bom programador estão centradas em matemática, mas não é isso que surgerem nossos dados”,
                        diz Chantel Prat, professora de psicologia que liderou o estudo publicado na Nature.
                        <br />
                        <br />

                        A pesquisa acompanhou pouco mais de 30 adultos enquanto eles aprendiam Python. Uma
                        bateria de testes que avaliavam tudo: desde atenção à resolução de problemas, memória,
                        habilidades numéricas, além de atividade cerebral em estado de repouso.
                    </h5>

                </div>
                <div className='boxWorks' ref={scrollText}>
                    <Texts />
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Landing;