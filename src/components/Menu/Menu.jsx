import react from 'react'
import { Link } from "react-router-dom";
import './menu.css'

function Menu(props){
    return(
        <div>
            <h1>Mi Emprendimiento</h1>
            <p className='inicio'>
                Es un desarrollopersonal de prueba en el cual busco generar mis pruebas y demas cosas que sean necesarias para lograr mi emprendimiento personal es una forma de seguir puliendo mis conocimientos
            </p>
        </div>
    );
}
export default Menu;
