import React from "react";

import hamburger from '../../assets/icons/hamburger.png';
import './style.css'

export const Hamburger = ({ onPress }) => {

    return (
        <button className='hamburger' onClick={() => onPress()}>
            <img src={hamburger} />
        </button>
    );
}

