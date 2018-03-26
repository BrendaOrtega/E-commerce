/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Perfil.css';
import {PerfilDisplay} from './PerfilDisplay';


class Perfil extends Component {

    componentWillMount(){
        const user = localStorage.getItem('user');
        if(!user) this.props.history.push('/login');
    }

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="">
                <PerfilDisplay />
            </div>
        );
    }
}

export default Perfil;