import react from 'react'
import { Link } from "react-router-dom";
import './menu.css'

function Menu(props){
    return(
        <div>
            <h1>Mi primera App</h1>
            <Link to="/Eduard">
                <button>Eduard</button>
            </Link>
            <Link to="/Sebas">
                <button>Sebas</button>
            </Link>
        </div>
        
    );
}



export default Menu;
