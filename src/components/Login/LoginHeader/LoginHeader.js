import React from 'react';
import { logo } from '../../../assets/Img/Img';
import './LoginHeader.css';

const Header = () => {

    return (
        <div className='login-header-container'>
            <div className='login-header-subcontainer'>
                <img className='login-header-image' src={logo} alt="Hello" />
                <h1>Survey</h1>
            </div>
        </div>
    )
}

export default Header;
