import React from 'react'
import nurse from '../images/Nurse_short_home_image.jpg'
import './styles/Introduccion.css'

class Introduccion extends React.Component{ 
    render(){
        return( 
            <div>
                <div className="coverHome"
                style = {{
                    backgroundImage: `url(${nurse})`
                }}>
                    <div className="overlayHome"></div>
                    <div className="textoPreguntasPublicidad">
                        <h1 className="titulo1">¿Tiene una molestia?</h1>
                        <h1 className="titulo2">¿Se tomó estudios y no sabe como interpretarlos?</h1>
                        <h3>SmartMed es un médico virtual que esta diseñado para atender ciertos padecimientos médicos y lo apoyará refiriendolo con un especialista de ser necesario.</h3>
                        <h3>S.A.M. (Sistema Artificial Médico) ha sido diseñado por un médico y esta sustentado en la experiencia y estudios cientificos y clínicos.</h3>
                    </div>
                    <div className="atencionBtn" >
                        <button className="molestiaBtn" >Tengo una molestia</button>
                        <button className="estudiosBtn" >Interpreta mis estudios</button>
                    </div>
                    <div>
                        <img className="logoEstetos" src="Imagenes/Logo_small.PNG" alt=" " />
                    </div>
                    
                   
                            
                    <div className="cards" >
                        <div className="cardEdition" id="card1" >
                            <h1 className="headCard" id="cardColor1" >Paso 1</h1>
                            <p className="textCard" >Cree una cuenta</p>
                            <button id="abrirCuenta" className="regresoBtn" onclick="window.location.href = 'home.html';" >Crear cuenta</button>
                        </div>
                        <div className="cardEdition" id="card2">
                            <h1 className="headCard" id="cardColor2" >Paso 2</h1>
                            <p className="textCard">Ingrese sus datos y antecedentes para tener su historial médico</p>
                            <i className="fas fa-heartbeat"></i>
                        </div>
                        <div className="cardEdition" id="card3">
                            <h1 className="headCard" id="cardColor3">Paso 3</h1>
                            <p className="textCard">SmartMed está listo para poderlo apoyar y ayudarlo a tener una mejor salud</p>
                            <i className="far fa-check-square"></i>
                        </div>
                    </div>
                </div>    
            </div>      
        )
    }
}
                    

export default Introduccion