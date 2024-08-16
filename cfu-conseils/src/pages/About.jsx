import React from 'react';
import Button from '../components/Button.jsx';
import photo from '../assets/photo.png';
import waveAbout from '../assets/wave-about.svg';

function About(){
    return(
        <main className='about'>
            <section className="about-presentation">
                <h1>CFU conseils</h1>
                <p>Notre société de conseil en gestion et de comptabilité est spécialisée  dans l'accompagnement des entreprises de toutes tailles dans la gestion  de leur activité. Nous proposons une gamme complète de services de  comptabilité, allant de la tenue de la comptabilité générale à la  gestion de la fiscalité, en passant par la gestion de la trésorerie et  la préparation des bilans. Nous sommes également spécialisés dans le  conseil en gestion, et nous accompagnons nos clients dans la mise en  place de stratégies de gestion efficaces pour optimiser la performance  de leur entreprise. Notre équipe de professionnels expérimentés est là  pour vous fournir des solutions sur mesure, adaptées à vos besoins  spécifiques, pour vous permettre de prendre les meilleures décisions  pour votre entreprise et de la faire grandir.</p>
                <p>Notre société de conseil en gestion et de comptabilité est spécialisée  dans l'accompagnement des entreprises de toutes tailles dans la gestion  de leur activité. Nous proposons une gamme complète de services de  comptabilité, allant de la tenue de la comptabilité générale à la  gestion de la fiscalité, en passant par la gestion de la trésorerie et  la préparation des bilans. Nous sommes également spécialisés dans le  conseil en gestion, et nous accompagnons nos clients dans la mise en  place de stratégies de gestion efficaces pour optimiser la performance  de leur entreprise. Notre équipe de professionnels expérimentés est là  pour vous fournir des solutions sur mesure, adaptées à vos besoins  spécifiques, pour vous permettre de prendre les meilleures décisions  pour votre entreprise et de la faire grandir.</p>
                <div>
                    <Button content="Nos services" color="orange"/>
                    <Button content="Nous contacter" color="light"/>
                </div>
            </section>
            <figure><img src={waveAbout} alt="" className='wave-about'/></figure>
            <section className="about-team">
                <h1>Qui sommes-nous ?</h1>
                <div className="about-cards-container">
                    <article className="team-card">
                        <img src={photo} alt="profil de Catherine" />
                        <h2>Catherine</h2>
                        <p className="bold">Fonction</p>
                        <p>Je suis une comptable expérimentée, passionnée par la gestion financière  des entreprises. Je suis là pour vous aider à tenir votre comptabilité  de manière rigoureuse et précise, pour vous permettre de prendre des  décisions éclairées et de gérer votre entreprise en toute confiance.</p>
                    </article>
                    <article className="team-card">
                        <img src={photo} alt="profil de François" />
                        <h2>François</h2>
                        <p className="bold">Fonction</p>
                        <p>En tant que conseiller en gestion, je suis là pour vous aider à  optimiser la performance de votre entreprise. Je vous accompagne dans la  mise en place de stratégies de gestion efficaces, pour vous permettre  de atteindre vos objectifs et de développer votre activité.</p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default About;