import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const LinkRegister = () => {

    return (
        <div className='Register-container'>
            <text>
                Ainda não possui uma conta?
            </text>

            <Link to="/register" className='link'>Cadastre-se</Link>

        </div>

    );

}

