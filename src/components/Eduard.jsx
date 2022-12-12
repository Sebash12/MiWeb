import react from 'react'
import { Link } from "react-router-dom";

function Eduard(props){
    return(
        <div>
            <h1>Sobre Eduard</h1>
            <p>
            Egresado de la Universidad Santo Tomas. Entre mis habilidades se encuentra el desarrollo de programas en lenguaje c. Tengo conocimientos básicos de la librería de Python para el análisis de datos conocida como pandas, que en conjunto con el software Knime puede convertirse en una herramienta muy poderosa. Además, tengo conocimiento acerca de modelado y sistemas de control en tiempo continuo y discreto. Me considero una persona sincera, leal, puntual, responsable, persistente, soñadora y familiar, dispuesta a dedicar su tiempo a aprender y crecer profesionalmente. 
            </p>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
}
export default Eduard;