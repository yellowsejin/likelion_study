import React from 'react'
import Logo from '../../assets/img/Footer_Logo.png'
import Contents from '../../assets/img/Footer_contents.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='logo_wrap'>
                <img src={Logo} alt="Logo" className='logo'/>
            </div>
            <img src={Contents} alt="" className='contents'/>
        </div>
    )
}

export default Footer;