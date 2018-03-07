/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Catalogo.css';
import {CatalogoDisplay} from './CatalogoDisplay';

class Catalogo extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <CatalogoDisplay />
            </div>
        );
    }
}

export default Catalogo;