import React, { useState } from "react";
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';

import password from '../../assets/icons/password.png';
import name from '../../assets/icons/name.png';
import documents from '../../assets/icons/documents.png';
import smartphone from '../../assets/icons/smartphone.png';

import { useForm } from 'react-hook-form';

import './style.css';
import { Link } from "react-router-dom";

export const FormRegister = () => {

    const [showMessage, setShowMessage] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleForm = (data) => {
        console.log(data)
        setShowMessage(true)
        // return (

        //     // window.location.href = "/"
        // )
    }

    return (
        <div className='Card'>

            {

                showMessage ? (

                    <div className='Card-message'>
                        <text className='title'>Cadastro realizado com sucesso!</text>
                        <text className='text'>Muito bem, agora você possui uma conta em nosso site, aproveite e veja um lar que seja a sua cara! Há muitos e diversos imóveis, temos certeza de que achará o seu.</text>

                        <a href='/'>
                            <button className="Button-container" type="submit" onClick={() => setShowMessage(false)}>
                                <text>VAMOS LÁ</text>
                            </button>
                        </a>
                    </div>

                ) : (
                    <>
                        <Form onSubmit={handleSubmit((data) => handleForm(data))} className='Container'>

                            <div className='Header'>
                                <text className='Header-title'>Cadastro de usuário</text>
                                <text className='Header-text'>Falta pouco para encontrar seu lar doce lar, preencha seus dados. </text>
                            </div>


                            <div className='Body'>

                                <div className='input-container'>

                                    <div class="wrapper">
                                        <div class="icon">
                                            <img src={name} />
                                        </div>
                                        <input {...register('firstName')} class="input" placeholder='Nome'></input>
                                    </div>

                                    <div class="wrapper">
                                        <div class="icon">
                                            <img src={name} />
                                        </div>
                                        <input {...register('lastName')} class="input" placeholder='Sobrenome'></input>

                                    </div>

                                    <div class="wrapper">
                                        <div class="icon">
                                            <img src={documents} />
                                        </div>
                                        <Form.Control
                                            as={IMaskInput}
                                            mask="000.000.000-00"
                                            placeholder="CPF"
                                            className="input"
                                        // {...register('cpf', { required: true })}
                                        />
                                    </div>

                                </div>

                                <div className='input-container'>

                                    <div class="wrapper">
                                        <div class="icon">
                                            <img src={smartphone} />
                                        </div>
                                        <Form.Control
                                            as={IMaskInput}
                                            mask="(00) 00000-0000"
                                            placeholder="Telefone"
                                            className="input"
                                        />
                                    </div>

                                    <div class="wrapper">
                                        <div class="icon">
                                            <img src={password} />
                                        </div>
                                        <input {...register('password', { required: true })} class="input" type="password" placeholder='Senha'></input>
                                    </div>

                                    <div class="wrapper">
                                        <div class="icon">
                                            <img src={password} />
                                        </div>
                                        <input {...register('passwordAgain', { required: true })} class="input" type="password" placeholder='Confirme a senha'></input>
                                    </div>

                                </div>

                            </div>
                            {errors.password && <p>Senha obrigatória</p>}
                            {errors.passwordAgain && <p>Sua senha precisa ser igual a de cima</p>}



                            <div className='Footer'>

                                {/* <input type="submit" value="Cadastrar" /> */}
                                <button className="Button-container" type="submit">
                                    <text>CADASTRAR</text>
                                </button>

                            </div>

                        </Form>
                    </>
                )
            }

        </div>
    );
}

