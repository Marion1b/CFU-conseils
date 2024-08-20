import React from "react";
import Button from '../components/Button.jsx';
import immobilierImage from '../assets/immobilier.svg';
import waveImmo from '../assets/waveImmo.svg';

function ComptaGestion(){
    return(
        <main className="service service-immo">
            <section className="service-presentation">
                <article className="service-presentation-text">
                    <h1>Comptabilité gestion locative immobilière</h1>
                    <p>Un service de comptabilité de gestion locative immobilière est un service qui aide les propriétaires d'immeubles à gérer les aspects financiers de leur propriété locative. Ce service peut inclure la tenue de la comptabilité des loyers perçus et des dépenses liées à la propriété, la préparation de rapports financiers périodiques, la gestion des factures et des paiements, ainsi que la préparation de déclarations fiscales. Les propriétaires peuvent ainsi avoir une vue d'ensemble claire de la performance financière de leur propriété et prendre des décisions éclairées en conséquence. Ce service peut également aider les propriétaires à respecter les réglementations fiscales et comptables en vigueur, ce qui peut les aider à éviter des problèmes juridiques et financiers potentiels. En somme, un service de comptabilité de gestion locative immobilière peut être un outil précieux pour les propriétaires qui cherchent à maximiser la rentabilité de leur propriété tout en respectant les règles et les réglementations en vigueur.</p>
                    <a href="/contact"><Button content="Nous contacter" color="orange"/></a>
                    <a href="#more"><Button content="En savoir plus" color="secondary"/></a>
                </article>
                <aside>
                    <img src={immobilierImage} alt="" />
                </aside>
            </section>
            <figure><img src={waveImmo} alt="" className="wave-immobilier"/></figure>
            <section className="service-more" id="more">
                <article className="service-more-container">
                    <h2>Que contient ce service ?</h2>
                    <article className="service-more-explain">
                        <div>
                            <p><span className="bold">Comptabilité générale</span> : nous vous accompagnons dans le suivi de l'ensemble des transactions  financières de votre entreprise, en préparant vos bilans et comptes de  résultat de manière rigoureuse et en vous fournissant une vision claire  et précise de votre situation financière.</p>
                            <p><span className="bold">Comptabilité générale</span> : nous vous accompagnons dans le suivi de l'ensemble des transactions  financières de votre entreprise, en préparant vos bilans et comptes de  résultat de manière rigoureuse et en vous fournissant une vision claire  et précise de votre situation financière.</p>
                            <p><span className="bold">Comptabilité générale</span> : nous vous accompagnons dans le suivi de l'ensemble des transactions  financières de votre entreprise, en préparant vos bilans et comptes de  résultat de manière rigoureuse et en vous fournissant une vision claire  et précise de votre situation financière.</p>
                        </div>
                        <div>
                            <p><span className="bold">Comptabilité générale</span> : nous vous accompagnons dans le suivi de l'ensemble des transactions  financières de votre entreprise, en préparant vos bilans et comptes de  résultat de manière rigoureuse et en vous fournissant une vision claire  et précise de votre situation financière.</p>
                            <p><span className="bold">Comptabilité générale</span> : nous vous accompagnons dans le suivi de l'ensemble des transactions  financières de votre entreprise, en préparant vos bilans et comptes de  résultat de manière rigoureuse et en vous fournissant une vision claire  et précise de votre situation financière.</p>
                            <p><span className="bold">Comptabilité générale</span> : nous vous accompagnons dans le suivi de l'ensemble des transactions  financières de votre entreprise, en préparant vos bilans et comptes de  résultat de manière rigoureuse et en vous fournissant une vision claire  et précise de votre situation financière.</p>
                        </div>
                    </article>
                    <p>Si vous êtes intéressés uniquement par une partie de ces services, n'hésitez pas à nous contacter. Nous serons ravis de discuter de vos  besoins et de vous proposer une offre adaptée à vos attentes.</p>
                    <a href="/contact"><Button content="Nous contacter" color="orange"/></a>
                </article>
            </section>
        </main>
    )
}

export default ComptaGestion;