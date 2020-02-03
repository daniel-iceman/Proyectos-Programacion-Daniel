import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './MenuBar.css'


const MenuBar = props => (
    <header className = "menubar">
        <nav className = "menubar_navigation">
            <div className='menubar_toogle_button'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="menubar_logo"><a href ="/">The Logo</a></div>
            <div className='spacer'></div>
            <div className='menubar_navigation_items'>
                <ul>
                    <li><a href = '/'>Cuenta</a></li>
                    <li><a href = '/'>Inicio</a></li>
                    <li><a href = '/'>Consulta Sintomas</a></li>
                    <li><a href = '/'>Consulta Laboratorios</a></li>
                    <li><a href = '/'>Consejos para tu salud</a></li>
                    <li><a href = '/'>Busca Médicos</a></li>
                </ul>
            </div>
        </nav>

    </header>
);

export default MenuBar







/*class MenuBar extends React.Component{ 
    render(){
        return( 
            <div>
                <div>
                    <img id="LogoHeader" src={LogoMenu} alt=" " /> 
                    <input type="checkbox" id="menu_checkbox"></input>
                    <label onPress={() => props.toggle()} for="menu_checkbox" id="menu_label">
                        <div id="menu_text_bar"></div>
                    </label>
                    <nav className="menu" id="menuNavegacion" >
                        <ul> 
                            <li><a className="altoOpcionMenu" href="top#">Ver perfil</a></li>
                            <li><a href="top#">Cuenta</a></li>
                            <li><a href="top#">Inicio</a></li>
                            <li><a href="top#">Consulta sintomas</a></li>
                            <li><a href="top#">Consulta laboratorios</a></li>
                            <li><a href="top#">Médicos</a></li>
                            <li ><a className="altoOpcionMenu" href="top#">Consejos para tu salúd</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
                

                
    
        )
    }
}
*/


