import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export const CardDisplay = ({ img, precio, nombre}) => {

    return (
        <div className="card ">
            <Link to="/" >
                <img src={img} alt=""/>
                <h3>{nombre}</h3>
                <p>${precio}.00</p>
            </Link>
        </div>
    );
}