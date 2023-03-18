import React from "react";

import home from '../../assets/icons/home.png';
import setting from '../../assets/icons/setting.png';
import store from '../../assets/icons/store.png';
import phone from '../../assets/icons/phone.png';
import message from '../../assets/icons/message.png';
import './style.css'

export const Menu = () => {

    return (
        <div id='menu-mobile'>
            <ul>
                <li className='list'>
                    <a href='#'>
                        <img className='icon' src={home}>
                        </img>
                        <span className='title'>Casa</span>
                    </a>
                </li>
                <li className='list'>
                    <a href='#'>
                        <img className='icon' src={setting}></img>
                        <span className='title'>Configurações</span>
                    </a>
                </li>
                <li className='list'>
                    <a href='#'>
                        <img className='icon' src={store}></img>
                        <span className='title'>loja</span>
                    </a>
                </li>
                <li className='list'>
                    <a href='#'>
                        <img className='icon' src={phone}></img>
                        <span className='title'>Telefone</span>
                    </a>
                </li>
                <li className='list'>
                    <a href='#'>
                        <img className='icon' src={message}></img>
                        <span className='title'>Mensagem</span>
                    </a>
                </li>
            </ul>
        </div>

    );

}

