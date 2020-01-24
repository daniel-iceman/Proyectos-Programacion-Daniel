import React from 'react'
// Se importan los estilos de css de la carpeta styles
import './styles/Welcome.css'

// Esta es la forma mas sencilla de crear un componente en React es esta:
// A este tipo de componentes se les llama funcionales porque literalmente
// son funciones de javascript.   
// Estos componentes son utiles cuando no es necesario generar cambios en ellos
// y no es necesario estar revisando el estado o ciclo de vida del componente,
// es decir solo van a mostrar un mensaje o un titulo etc.
function Welcome(props) {
    return(
        <div className='container'>
            <div className='Fitness-User-Info'>
                <h1>Hello {props.username}!</h1>
                <p>Let´s workout to get someone gains!</p>
            </div>
        </div>
    )

}

export default Welcome