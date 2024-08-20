import React from "react";
import logo from "../assets/logo-light.svg";
import polygon from "../assets/Polygon.svg";
import { useState } from 'react';
import {isHide} from '../utils.js';

function HeaderMobile(){
    const [hide, setHide]=useState(true);
    const [close, setClose]=useState(true);
    return(
        <header className="header-mobile">
            <section className="header-mobile-container">
                <a href="/"><img src={logo} alt="logo de CFU conseils" className="logo"/></a>
                <div id="nav-icon2" onClick={()=>isHide(close, setClose)} className={`${close ? '' : 'open'}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`${close ? 'header-mobile-nav' : 'header-mobile-nav nav-active'}`} >
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
    )
}

export default HeaderMobile;