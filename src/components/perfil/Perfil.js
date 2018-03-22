/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Perfil.css';
import {PerfilDisplay} from './PerfilDisplay';


class Perfil extends Component {

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