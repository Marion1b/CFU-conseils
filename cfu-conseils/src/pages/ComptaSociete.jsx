import React from "react";
import Button from '../components/Button.jsx';
import societeImage from '../assets/societe.svg';
import waveImmo from '../assets/waveImmo.svg';

function ComptaSociete(){
    return(
        <main className="service service-societe">
            <section className="service-presentation">
                <article className="service-presentation-text">
                    <h1>Comptabilité d'une société</h1>
                    <p>La tenue de la comptabilité est une tâche essentielle pour toute  entreprise, mais qui peut être chronophage et complexe. C'est pourquoi  nous proposons un service de tenue complète de la comptabilité pour vous  permettre de vous concentrer sur votre cœur de métier. Notre équipe de  professionnels de la comptabilité s'occupe de toutes les tâches liées à  la gestion de votre comptabilité, depuis la saisie des factures et des  pièces comptables jusqu'à la préparation des bilans et des comptes de  résultat. Nous nous assurons que votre comptabilité est à jour et en  conformité avec les normes en vigueur, pour vous permettre de prendre  des décisions éclairées et de gérer votre entreprise en toute sérénité.</p>
                    <Button content="Nous contacter" color="orange"/>
                    <Button content="En savoir plus" color="secondary"/>
                </article>
                <aside>
                    <img src={societeImage} alt="" />
                </aside>
            </section>
            <figure><img src={waveImmo} alt="" className="wave-immobilier"/></figure>
            <section className="service-more">
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
                    <Button content="Nous contacter" color="orange"/>
                </article>
            </section>
        </main>
    )
}

export default ComptaSociete;