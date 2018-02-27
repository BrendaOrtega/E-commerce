/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Card.css';
import {CardDisplay} from './CardDisplay';

class Card extends Component {
    render() {
        return (
            <div>
                <CardDisplay />
            </div>
        );
    }
}

export default Card;