import React from 'react'
import './SideDrawer.css'

const sideDrawer = props => { 
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href = '/'>Cuenta</a></li>
                <li><a href = '/'>Inicio</a></li>
                <li><a href = '/'>Consulta Sintomas</a></li>
                <li><a href = '/'>Consulta Laboratorios</a></li>
                <li><a href = '/'>Consejos para tu salud</a></li>
                <li><a href = '/'>Busca Médicos</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer