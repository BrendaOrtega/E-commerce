/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Urbano.css';
import {UrbanoDisplay} from './UrbanoDisplay';

class Urbano extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <UrbanoDisplay />
            </div>
        );
    }
}

export default Urbano;