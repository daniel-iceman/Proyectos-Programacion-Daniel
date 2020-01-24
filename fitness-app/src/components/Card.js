// Primero se debe importar React
import React from 'react'

// Cuando se importa de un folder que esta afuera del folder en el que se está trabajando
// se deben poner ".." par salir al folder "src" y despues entrar al nuevo en este caso "images".
import exerciseImg from '../images/exercise.png'

// Importamos la imagen de la tarjeta desde Card.css, esto para hacer los promps.
import circlesImg from '../images/circles.png'

// Se importan los estilos de css de la carpeta styles
import './styles/Card.css'

// Se crea un "componente de clase"
// Dentro de la clase debemos definir si o si una función, en este caso "render"
// que nos servirá para pintar (renderear) lo que definamos dentro.
// Cuando solo es un elemento elemento el que se va a renderizar se puede
// escribir simplemente así "return <h1>fitnes-app</h1>".   Si son varios elementos
// seguido del return se abrirá parentesis que contenga a todos los elementos.
// Dentro de esta función nos retornara el o los componentes
// Se le pasa la "prop" a la source de img
class Card extends React.Component{
/*
    //Para los datos que van a cambiar debemos usar el estado (this.state) dentro de
    // un constructor.  El primer link aparece al inicio y con la función de "componentDidMount"
    // se cambia a la imagen del segundo link despues de los 5000 mlseg (5 segundos)
    constructor(props){
        super(props)
        this.state = {
            image: 'https://www.stickpng.com/assets/images/580b585b2edbce24c47b2b98.png'
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            })
        }, 5000)
    }
*/
    render(){
        // Se crea una constante para hacer el "destructuring" propio de ECMA6
        // para evitar tener que poner todo el codigo de las props "this.props"
        // y solo poner la variable.
        // En la imagen se pone como source (src) un "this.state.image" ya que
        // será un valor que cambiará, no será estatico (o bien "img" para el caso
        // de trabajar con la pagina y varias imagenes contenidas en un json).
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className='card mx-auto Fitness-Card'
            style = {{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor},${rightColor})`

            }}
            >
                <div className='card-body'>  
                    <div className='row center'>
                        <div className='col-6'>
                            <img src={img} className='float-right'/>  
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
// ***** Las "props" son las variables a las que se les asigno valor en el "index.js"
// ***** Su sintaxis es {this.props.NOMBRE_DE_VARIABLE_(PROPS)} aunque con el
// "destructuring" de ECMA 6 solo se usa el nombre de la variable.
// En la imagen no se usó el props porque no se tiene el link de la nube.
                        


                                                

// Como estamos generando una clase debemos exportarla
export default Card