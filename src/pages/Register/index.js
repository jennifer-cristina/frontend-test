
import soon from '../../assets/icons/soon.png';
import background from '../../assets/images/background-register.jpg';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/styles.css';


import { ButtonClose } from '../../components/ButtonClose';
import { FormRegister } from '../../components/FormRegister';
import { Hamburger } from '../../components/Hamburger';
import { Menu } from '../../components/Menu';
import { MenuBar } from '../../components/MenuBar';
import { Soon } from '../../components/Soon';
import { SoonBar } from '../../components/SoonBar';
import { MobileMenuBar } from '../../components/MobileMenuBar';

export const Register = () => {

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
        <div id='main-register'
            style={{ backgroundImage: `URL(${background})` }}
        >

            {
                menu ? (
                    <div id='menu-mobile-container'>

                        <SoonBar />

                        <div className='nav-mobile'>

                            <div className='button-container'>
                                <ButtonClose onPress={() => setMenu(false)} />
                            </div>

                            <Menu />

                        </div>
                    </div>
                ) : (
                    <>
                        <div className='Card-menu-register'>

                            <MobileMenuBar />

                            <div id='Header'>

                                <SoonBar />
                                <Hamburger onPress={() => setMenu(true)} />

                            </div>

                        </div>

                        <div className='Card-form'>

                            <div id='Container'>
                                <div id='Soon-container'>
                                    <Soon />
                                </div>
                            </div>

                            <div id='Form-container'>

                                <FormRegister />

                            </div>

                        </div>
                    </>
                )
            }


        </div >
    );
}
