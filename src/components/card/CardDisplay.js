import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export const CardDisplay = ({ img}) => {

    return (
        <div className="card ">
            <Link to="/" >
                <img src={img} alt=""/>
                <h3>GALLATIN OUTDOOR HAT</h3>
                <p>$78.00</p>
            </Link>
        </div>
    );
}