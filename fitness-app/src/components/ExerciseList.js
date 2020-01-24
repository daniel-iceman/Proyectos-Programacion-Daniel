import React from 'react'
import Card from './Card'
function ExerciseList(props){
    // Aqui tomaremos la información del archivo de "Exercise.js" pero 
    // como no necesitamos que retorne el estado sino solo las props 
    // (ya que no es un constructor) cambiaremos la propiedad de "this.state"
    // por "props" y crearemos un nombre de esas props al cual llamaremos "exercises"
    return(
        <div>
            { props.exercises.map((exercise) =>{
                return (
                    <Card 
                        title = {exercise.title}
                        description = {exercise.description}
                        img = {exercise.img}                            
                        leftColor = {exercise.leftColor}
                        rightColor = {exercise.rightColor}
                    />
                )
            })} 
        </div>
    )

}

export default ExerciseList