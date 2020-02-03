import React from 'react'
import './styles/Boton.css'

class Boton extends React.Component{ 
    render(){
        return( 
            <div className='botonFlex'>
                <button className='botonMargin'><img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" /></button>
            </div>
        )
    }
}

export default Boton