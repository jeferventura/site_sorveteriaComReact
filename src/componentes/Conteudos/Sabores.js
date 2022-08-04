import React from 'react';

export function Sabores(){
    return(
        <section className="sabores">
            <div className="sabores__box">
                <figure>
                    <img src="assets/images/content/banner-sabores.jpg" alt="Sabores da Sorveteria" />
                </figure>
            </div>
            <div className="sabores__box">
                <h2 className="Title-secao">Nossos Sabores</h2>
                <span className="generic-text">Novos e deliciosos!</span>
                <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais e sem nenhum conservante! Também temos opções sem lactose e sem açucar. Venha, conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
        </section>

    );
}
