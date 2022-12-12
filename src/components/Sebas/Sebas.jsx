import react from 'react'
import { Link } from "react-router-dom";

function Sebas(props){
    return(
        <div>
            <h1>Sobre Sebas</h1>
            <p>
            Egresado de la Universidad Santo Tomas. Actualmente trabaja como ingeniero en una empresa llamada Tecnimaq ingenieria de la cual hace parte desde el año 2021, maneja diferentes lenguajes de programcion entre los cuales esta python, java, c , C#, flask, entre otros y se encuentra actualmente aprendiendo a utilizar, react. 
            </p>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
        
    );
}
export default Sebas;