import React from "react";
import logo from "../assets/logo-light.svg";
import polygon from "../assets/Polygon.svg";
import { useState } from 'react';
import {isHide} from '../utils.js';

function Header(){
    const [hide, setHide]=useState(true);
    return(
        <header>
            <section className="header-container">
                <img src={logo} alt="logo de CFU conseils" />
                <nav className="header-nav">
                    <ul className="header-nav-main">
                        <li>Accueil</li>
                        <li onClick={() => isHide(hide, setHide)} className={`${hide ? '' : 'services-active'}`}>Services <img src={polygon} alt="" />
                            <ul className={`header-nav-services ${hide ? 'hide' : ''}`}>
                                <li>Comptabilité gestion locative immobilière</li>
                                <li>Comptabilité d'une société</li>
                                <li>Conseils en gestion</li>
                            </ul>
                        </li>
                        <li>Qui sommes-nous ?</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;