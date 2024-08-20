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
                        <li><a href="/">Accueil</a></li>
                        <li onClick={() => isHide(hide, setHide)} className={`${hide ? '' : 'services-active'}`}>Services <img src={polygon} alt="" />
                            <ul className={`header-nav-services ${hide ? 'hide' : ''}`}>
                                <li><a href="/comptabilite-gestion">Comptabilité gestion locative immobilière</a></li>
                                <li><a href="/comptabilite-societe">Comptabilité d'une société</a></li>
                                <li><a href="/conseil">Conseils en gestion</a></li>
                            </ul>
                        </li>
                        <li><a href="/about">Qui sommes-nous ?</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;