import React from 'react';
import { Link } from 'react-router-dom';

export default function Topo(){
    return(
        <header>
            <div className="top-bar">
                <div className="top-bar__logotipo">
                    <figure>
                        <img src="../../public/assets/logo.png" alt="logotipo" />
                    </figure>
                </div>
                <div className="top-bar__navbar">
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/sabores'>Sabores</Link></li>
                            <li><Link to='/sobre'>Sobre</Link></li>
                        </ul>
                    </nav>
                </div>{/* ++ end .top-bar__navbar ++ */}
            </div>
        </header>
    );
}
