import react from 'react';
import { Link } from 'react-router-dom'

export default function Home(){
   
    return(
        <main>
                <h1>Home Page false</h1>
                <Link to='/Sobre'>Sobre</Link>
        </main>
    );
}