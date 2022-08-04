import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//import from paginas visibles
import Home from '../paginas/Home';
import Sobre from '../paginas/Sobre';
import Sabores from '../paginas/Sabores';


const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/sobre' element={<Sobre />} />
            <Route exact path='/sabores' element={<Sabores />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;