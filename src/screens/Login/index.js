import { useState } from 'react';

import { ButtonSubmit } from '../../components/Button';
import { ButtonClose } from '../../components/ButtonClose';
import { Form } from '../../components/Form';
import { Hamburger } from '../../components/Hamburger';
import { LinkRegister } from '../../components/LinkRegister';
import { Menu } from '../../components/Menu';
import { MenuBar } from '../../components/MenuBar';
import { Soon } from '../../components/Soon';
import { SoonBar } from '../../components/SoonBar';
import planet from '../../assets/images/planet.png';
// import '../Login/style.css';

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
        <div className='Main'>

            {
                menu ? (
                    <div id='Nav-bar'>

                        <SoonBar />

                        <div className='Nav'>

                            {/* <div className='Button-container'> */}
                            <ButtonClose onPress={() => setMenu(false)} />
                            {/* </div> */}

                            <Menu />

                        </div>
                    </div>
                ) : (
                    <>
                        <img src={planet} className='planet' />

                        <div className='Card-menu'>

                            <MenuBar />

                            <div id='Header'>

                                <SoonBar />
                                <Hamburger onPress={() => setMenu(true)} />

                            </div>

                        </div>

                        <div className='Card-login'>

                            <div id='Form'>

                                <div id='Soon-container'>
                                    <Soon />
                                </div>

                                <Form />

                                <div className='Button-container'>
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
