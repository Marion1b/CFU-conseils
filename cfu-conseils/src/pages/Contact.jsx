import React from 'react';
import contactImage from'../assets/contact.svg';
import waveContact from '../assets/wave-contact.svg';

function Contact(){
    return(
        <main className="contact">
            <section className='contact-presentation'>
                <img src={contactImage} alt="" />
                <article>
                    <h1>Nous contacter</h1>
                    <p>Vous souhaitez en savoir plus sur nos services de comptabilité et de  conseil en gestion ? Vous avez des questions sur la gestion de votre  entreprise ? N'hésitez pas à nous contacter ! Notre équipe de  professionnels est à votre disposition pour répondre à toutes vos  questions et vous fournir des informations personnalisées. Vous pouvez  nous contacter par téléphone, par email ou en utilisant le formulaire de  contact ci-dessous. Nous sommes là pour vous accompagner dans la  gestion de votre entreprise et vous permettre de prendre les meilleures  décisions pour son développement.</p>
                </article>
            </section>
            <figure><img src={waveContact} alt="" className="wave-contact" /></figure>
            <section className="contact-infos">
                <h1 hidden>Informations de contact</h1>
                <div className='contact-infos-cards-container'>
                    <article className="contact-infos-card">
                        <i class="fa-solid fa-phone"></i>
                        <div>
                        <p className="bold">Téléphone</p>
                        <p>01.23.45.67.89</p>
                        </div>
                    </article>
                    <article className="contact-infos-card">
                        <i class="fa-solid fa-envelope"></i>
                        <div>
                        <p className="bold">Mail</p>
                        <p>mail@mail.com</p>
                        </div>
                    </article>
                    <article className="contact-infos-card">
                        <i class="fa-brands fa-linkedin"></i>
                        <div>
                        <p className="bold">Linkedin</p>
                        <p>Catherine</p>
                        <p>François</p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Contact;