import React from "react";
import Button from '../components/Button.jsx';
import conseilImage from '../assets/conseil.svg';
import waveImmo from '../assets/waveImmo.svg';

function Conseil(){
    return(
        <main className="service service-societe">
            <section className="service-presentation">
                <article className="service-presentation-text">
                    <h1>Conseils en gestion</h1>
                    <p>Un service de conseils en gestion est un service qui aide les entreprises à améliorer leur performance et leur efficacité opérationnelle. Ce service peut inclure des conseils en matière de stratégie d'entreprise, de gestion des coûts, d'optimisation des processus métier, de gestion des ressources humaines, de gestion de la chaîne d'approvisionnement, de gestion de la qualité, de gestion des risques, etc. Les conseillers en gestion travaillent souvent en étroite collaboration avec les équipes de direction de l'entreprise pour comprendre leurs besoins et leurs défis, puis élaborent des plans d'action personnalisés pour les aider à atteindre leurs objectifs. Les entreprises peuvent ainsi bénéficier d'une expertise externe pour les aider à prendre des décisions stratégiques éclairées, à améliorer leur performance et à atteindre leurs objectifs de croissance et de rentabilité. En somme, un service de conseils en gestion peut être un atout précieux pour les entreprises qui cherchent à améliorer leur performance et leur efficacité opérationnelle.</p>
                    <a href="/contact"><Button content="Nous contacter" color="orange"/></a>
                    <a href="#more"><Button content="En savoir plus" color="secondary"/></a>
                </article>
                <aside>
                    <img src={conseilImage} alt="" />
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

export default Conseil;