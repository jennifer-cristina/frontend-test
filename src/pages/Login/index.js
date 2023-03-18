import { useState } from 'react';

import { ButtonSubmit } from '../../components/Button';
import { ButtonClose } from '../../components/ButtonClose';
import { Form, LoginForm } from '../../components/Form';
import { Hamburger } from '../../components/Hamburger';
import { LinkRegister } from '../../components/LinkRegister';
import { Menu } from '../../components/Menu';
import { MenuBar } from '../../components/MenuBar';
import { Soon } from '../../components/Soon';
import { SoonBar } from '../../components/SoonBar';
import planet from '../../assets/images/planet.png';
import './style.css';

export const Login = () => {

    const [menu, setMenu] = useState(false);

    const list = document.querySelectorAll('.list')

    function activeLink() {
        list.forEach((item) =>
            item.classList.remove('active'))
        this.classList.add('active')
    }

    list.forEach((item) =>
        item.addEventListener('click', activeLink))

    return (
        <div id='main-login'>

            {
                menu ? (

                    <div id='menu-mobile-container'>

                        <SoonBar />

                        <nav className='nav-mobile'>

                            <ButtonClose onPress={() => setMenu(false)} />

                            <Menu />

                        </nav>

                    </div>

                ) : (
                    <>
                        <img src={planet} id='planet' />

                        <div id='menu-container'>

                            <MenuBar />

                            <div id='Header'>

                                <SoonBar />
                                <Hamburger onPress={() => setMenu(true)} />

                            </div>

                        </div>

                        <div id='login-form-container'>

                            <div id='Form'>

                                <div id='Soon-container'>
                                    <Soon />
                                </div>

                                <LoginForm />

                                <div className='button-container'>
                                    <ButtonSubmit
                                        title='ENTRAR'
                                    />
                                </div>

                                <div id='Register'>
                                    <LinkRegister />
                                </div>
                            </div>

                        </div>
                    </>
                )
            }
        </div >
    );
}
