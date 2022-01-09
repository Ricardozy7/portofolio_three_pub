import React, { useState } from "react";
import './styles.css'
import R from '../../assets/imgs/rl.png'
import { FiAlignRight, FiX } from "react-icons/fi";
import { COLOR } from '../../Theme';

const Header = ({ refs }) => {

    const [openMenu, setOpenMenu] = useState()

    const OnPress = () => setOpenMenu(!openMenu)

    return (
        <div>
            <div className={openMenu ? "Header" : "Header-active"}>
                <img src={R} className={"logoHeader"} />
                <button className="BtnMenu" onClick={OnPress}>
                    {
                        openMenu ? <FiX size={30} className={"BtnMenuIcon"} /> : <FiAlignRight size={30} className="BtnMenuIcon" />
                    }
                </button>
            </div>
            <div className={openMenu ? "menu" : "menu-active"}>
                <button 
                onClick={()=> refs.work.current && refs.work.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
                className={openMenu ? "menu-item" : "menu-item-active"}>MEU TRABALHO</button>
                <button 
                onClick={()=> refs.text.current && refs.text.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
                className={openMenu ? "menu-item" : "menu-item-active"}>RAPIDEZ</button>
            </div >
        </div>
    )
}

export default Header;