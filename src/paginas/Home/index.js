//import react from 'react';
//import { Link } from 'react-router-dom'

//import component's pages
import Topo from '../../componentes/Topo';
import { Banner } from '../../componentes/Conteudos/Banner';
import { Sabores } from '../../componentes/Conteudos/Sabores';
import { Eventos } from '../../componentes/Conteudos/Eventos';

export default function Home(){

    return(
        <div className="container">
            <Topo />
            <main>
                <Banner />
                <Sabores />
                <Eventos />
            </main>
        </div>
    );
}