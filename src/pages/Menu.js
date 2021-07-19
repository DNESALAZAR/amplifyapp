import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/", secure: true, sameSite: 'none'})
        cookies.remove('apellido_paterno', {path: "/", secure: true, sameSite: 'none'})
        cookies.remove('apellido_pmterno', {path: "/", secure: true, sameSite: 'none'})
        cookies.remove('nombre', {path: "/", secure: true, sameSite: 'none'})
        cookies.remove('username', {path: "/", secure: true, sameSite: 'none'})
        window.location.href='./';
    }
    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }
    render() {
        console.log('id: ' + cookies.get('id'));
        console.log('apellido_paterno: ' + cookies.get('apellido_paterno'));
        console.log('apellido_materno: ' + cookies.get('apellido_materno'));
        console.log('nombre: ' + cookies.get('nombre'));
        console.log('username: ' + cookies.get('username'));
        return (
            <div>
                Menu Principal

                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Menu;