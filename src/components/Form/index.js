import React from "react";

import email from '../../assets/icons/email.png';
import password from '../../assets/icons/password.png';
import './style.css';

export const LoginForm = () => {

    return (
        <div id='Form-container'>

            <div className='Text-container'>
                <text>Olá, seja bem-vindo!</text>
            </div>

            <div className='Inputs-container'>

                <div class="wrapper">
                    <div class="icon">
                        <img src={email} />
                    </div>
                    <input class="input" placeholder='Email'></input>
                </div>

                <div class="wrapper">
                    <div class="icon">
                        <img src={password} />
                    </div>
                    <input class="input" placeholder='Senha'></input>
                </div>

                <button>
                    Esqueci minha senha
                </button>

            </div>
        </div>
    );
}

