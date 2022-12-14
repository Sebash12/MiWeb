import './Contacto.css'
function Contacto(){        
    return (
        <div>
            <h2>Nuestra Ubicación:</h2>
            <br />
            <iframe className='mapa'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1815853377307!2d-74.03906493595605!3d4.738490842649867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f857b9c742c8b%3A0xc72aecd134dccc1!2sCl.%20160%20%2314b-42%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1670982653519!5m2!1sen!2sco" 
                width="350vw" 
                height="350wh" 
                style={{ border: 0 }}
                allowfullscreen="yes" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='datos'>
                <h2> Desarrollador:</h2>
                <p className='informacion'>Sebastian Herrera Silva <br/>
                    Whatsapp: 3118899989 <br />
                    Correo: juanherrera.jshs@gmail.com
                </p>
            </div>
        </div>
    )
}
export default Contacto;