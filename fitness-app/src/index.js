// Se importa React y ReactDOM siempre
import React from 'react';
import ReactDOM from 'react-dom';

// Se importa la clase (componente) que se creo en el otro archivo de js, para esto
// se debe anotar el nombre de la clase a importar y su ubicación.   Debemos tener
// cuidado de anotar su ubicación con el punto y las diagonales para dar la dirección
// del folder donde se encuentra el archivo "Card.js"
//          import Card from './components/Card';
//          import Welcome from './components/Welcome'

// O bien si se trabaja con paginas, se importa la pagina y la clase de la pagina
import Exercises from './pages/Exercises'

// Dentro de index.js incorporamos a bootstrap
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')


// ReactDOM.render(_QUE_, _DONDE_)

// Pero cuando se trabaja con paginas se agrega como elemento en "QUE" el nombre
// de la pagina.
ReactDOM.render(<Exercises/>, container);



// Dentro del "ReactDOM.render" recibe un "Que" se va a renderear, en este caso
// es un componente y para renderizar un componente debemos definirlo mediante
// sus etiquetas.
// Deberiamos crear un "div" que sería el contenedor "padre" que contendria los
// elementos que se vayan creando y añadiendo al DOM si solo fuese una pagina.
// Aqui tambien le damos las propiedades al componente (title, description etc)
// que serán las "props" (variables con valores) y que podremos utilizar dentro
// de nuestro codigo en lugar de usar los valores.

/* ReactDOM.render(<div>
                    <Welcome 
                        username = 'Daniel'
                    />
                    <Card 
                        title = "Technique Guides"
                        description = "Learn amazing street workout of profesional trainers"
                        img = "https://www.theahaconnection.com/wp-content/uploads/2016/06/audra_exercise-01.png"
                        leftColor="#A74CF2"
                        rightColor = "#617BFB"
                    />
                </div>, container);*/



