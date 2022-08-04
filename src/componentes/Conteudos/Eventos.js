import React from 'react';

export function Eventos(){
    return(
        <section className="eventos section-flex">
            <div className="eventos__box">
                <figure>
                    <img src="assets/images/content/eventos-image.jpg" alt="Sabores da Sorveteria" />
                </figure>
            </div>
            <div className="eventos__box">
                <h2 className="Title-secao">Nossos eventos</h2>
                <span className="generic-text">Delicias com sorvete!</span>
                <p>Mais do que uma Sorveteria, uma extensão de sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
            </div>
        </section>

    );
}