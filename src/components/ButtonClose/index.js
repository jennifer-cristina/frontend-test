import React from "react";

import close from '../../assets/icons/close.png';
import './style.css'

export const ButtonClose = ({ onPress }) => {

    return (
        <button className='Button-close' onClick={() => onPress()}>
            <img src={close} />
        </button>
    );
}

