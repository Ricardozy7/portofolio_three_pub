import React, { useState } from "react";

const Footer = ({ refs }) => {

    const [openMenu, setOpenMenu] = useState()

    const OnPress = () => setOpenMenu(!openMenu)

    return (
        <div style={{ width: '100%', padding: 20}}>
            <div style={{
                fontFamily: 'sans-serif',
                color: '#fff',
                fontSize: 12
            }}>@{new Date().getFullYear()}, Ricardo Dias | all rigths reserved.</div>
        <div style={{ width: '3%', height: 1, backgroundColor: '#8400e1', marginTop: 10 }}></div>
        </div>
    )
}

export default Footer;