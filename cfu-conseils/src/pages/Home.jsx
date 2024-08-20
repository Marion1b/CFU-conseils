import React from 'react';
import Button from '../components/Button.jsx';
import waveHome from '../assets/wave-home.svg';
import photo from '../assets/photo.png';

function Home(){
    return(
        <main className='home'>
            <section className="home-presentation">
                <h1>Comptabilité et conseils en gestion</h1>
                <p>CFU conseils est là pour vous aider à gérer efficacement vos finances et à prendre  des décisions éclairées pour votre entreprise. Nous sommes une équipe de  professionnels expérimentés et passionnés, déterminés à fournir un  service personnalisé et de qualité à chaque client.</p>
                <a href="#services"><Button content="Nos services" color="orange"/></a>
                <a href="/about"><Button content="Nous contacter" color="secondary"/></a>
            </section>
            <figure><img src={waveHome} alt="" className='wave-home' /></figure>
            <section className="home-services"id='services'>
                <h1>Nos services</h1>
                <section className="home-services-cards-container">
                    <article className="home-services-card">
                        <h2>Comptabilité gestion locative</h2>
                        <p>Gestion des tâches administratives liées à la location de vos biens immobiliers.</p>
                        <a href="/comptabilite-gestion"><Button content="En savoir plus" color="orange"/></a>
                    </article>
                    <article className="home-services-card">
                        <h2>Comptabilité d'une société</h2>
                        <p>Tenue complète de la comptabilité d’une société. A destination des TPE, associations, indépendants, libéraux...</p>
                        <a href="/comptabilite-societe"><Button content="En savoir plus" color="orange"/></a>
                    </article>
                    <article className="home-services-card">
                        <h2>Conseils en gestion</h2>
                        <p>Conseils pour la fraude fiscale et ne pas payer vos impôts pour devenir aussi riche que Bernard Arnault.</p>
                        <a href="/conseil"><Button content="En savoir plus" color="orange"/></a>
                    </article>
                </section>
            </section>
            <section className="home-team">
                <h1>Qui sommes-nous ?</h1>
                <section className="home-team-cards-container">
                    <article className="home-team-card">
                        <img src={photo} alt="profil de Catherine" />
                        <div>
                            <p className="bold">Catherine</p>
                            <p>Comptable</p>
                        </div>
                    </article>
                    <article className="home-team-card">
                        <img src={photo} alt="profil de François" />
                        <div>
                            <p className="bold">François</p>
                            <p>Conseiller en gestion</p>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default Home;