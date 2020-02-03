/* Este será el archivo "Base" que compilará los componentes
tanto de funciones como de clases y aqui deberan estan importados
todos los componentes */

import React from 'react'
import './global.css'

/* El nombre que se importa, por ejemplo "FuncionDeSaludo" lo inventamos
nosotros, no existe en el archivo de "Funciones" pero ese mismo nombre
es el que debemos colocar dentro de la etiqueta del return
*/
import FuncionDeSaludo from './components/ComponenteFuncion'
import ClaseBienvenida from './components/ComponenteClase'
import Hello from './components/AgregandoHijos'


/* Se crea una clase de componente que contendrá en una estructura
de html los componentes en el orden en el que se mostrarán */

class AprendiendoReact extends React.Component{ 
    render(){
        return( 
            <div>
                {/*Un componente se puede reutilizar cuantas veces
                se requiera y bastará indicar una variable con un
                valor para que cada uno de estos tengan propiedades
                distintas, esto se logra por medio de las "props"
                que se encuentran aquí (name, heroName) y se asocian 
                en el archivo "ComponenteFuncion"*/}
                <FuncionDeSaludo name='Clark Kent' heroName='Superman' />

                {/* Tambien se pueden agregar "props children" especificamente
                a uno de los componente creados, esto se hace creando una 
                doble etiqueta como en html y escribiendo dentro la nueva etiqueta
                que se creará (ej Un <div> y dentro un <p>). */}
                <FuncionDeSaludo name='Bruce Wayne' heroName='Batman'>
                    <p>Esta es una children props de Batman</p>
                </FuncionDeSaludo>
                
                <FuncionDeSaludo name='Diana Prince' heroName='Wonderwoman'>
                    <button>Alerta para Wonderwoman</button>
                </FuncionDeSaludo>

                {/* Podemos hacer lo mismo con los componentes de clase agregandoles
                props para que aunque el componente se reutilice, cada uno tenga
                propiedades especificas.  Se añaden props igual que en un componente
                de función. */}
                <ClaseBienvenida name='Clark Kent' heroName='Superman' />
                <ClaseBienvenida name='Bruce Wayne' heroName='Batman' />
                <ClaseBienvenida name='Diana Prince' heroName='Wonderwoman' />
                <Hello />
                

            </div>
            
        )
    }
}


export default AprendiendoReact
//    *****   EXPLICACIÓN    *****
/* 1. La etiqueta "<Constantes />" asigna a "name" que es la constante
creada en el archivo "Constantes" un valor (Clark Kent) y por eso se
despliega en el DOM */

/* 2. En el caso de la etiqueta <Funciones> solo se implanta dentro del div
y lo que hace es regresar lo que contiene.
*/