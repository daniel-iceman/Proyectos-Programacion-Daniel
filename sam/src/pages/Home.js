import React from 'react'
import MenuBar from  '../components/Toolbar/MenuBar'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Backdrop from '../components/Backdrop/Backdrop'
import Introduccion from '../components/Introduccion'

/* El "state" "sideDrawerOpen: false" mantiene el recuadro del menu emergente cerrado
y el "drawerToogleClickHandler" lo abre ya que retorna un estado opuesto al cerrado
"!prevState.sideDrawerOpen".
El "backdropClickHandler" cierra el menu emergente una vez que esta abierto.
*/
class Home extends React.Component{ 
    state = {
        sideDrawerOpen: false
    };

    drawerToogleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};

        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});                
    };

    render(){
        
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click = {this.backdropClickHandler} />
        }

        return( 
            <div style = {{height: '100%'}}>
                <MenuBar drawerClickHandler = {this.drawerToogleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Introduccion style={{marginTop: '56px'}}
                    introduccion = 'introduccion'
                />
            </div>
    
        )
    }
    
}

                       
export default Home
                    
                
                    
                




