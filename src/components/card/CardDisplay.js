import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export const CardDisplay = ({}) => {

    return (
        <div className="card ">
            <Link to="/" >
                <img src="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1733/34c64e8911b8f8eff21cdb3b181977e548821aaea99bc35d42281b327a2548e8a/A" alt=""/>
                <h3>GALLATIN OUTDOOR HAT</h3>
                <p>$78.00</p>
            </Link>
        </div>
    );
}