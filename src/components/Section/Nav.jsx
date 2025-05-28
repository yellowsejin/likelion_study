import React from 'react'
import Logo from '../../assets/img/Nav_Logo.png'
import First from '../../assets/img/Nav_right_first.png'
import Second from '../../assets/img/Nav_right_second.png'
import Third from '../../assets/img/Nav_right_third.png'
import Forth from '../../assets/img/Nav_right_forth.png'

const Nav = () => {
    return(
        <div className='Nav_wrap'>
            <div className='nav_left'>
                <img src={Logo} alt = "Logo"/>
            </div>

            <ul className='nav_menu'>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
                <li>|</li>
                <li>TENNIS</li>
                <li>BRAND</li>
            </ul>

            <div className='nav_right'>
                <div>
                    <img src={First} alt="" className='first'></img>
                </div>
                <div>
                    <img src={Second} alt="" className='second'></img>
                </div>
                <div>
                    <img src={Third} alt="" className='third'></img>
                </div>
                <div>
                    <img src={Forth} alt="" className='forth'></img>
                </div>
            </div>
        </div>
    )
}

export default Nav 