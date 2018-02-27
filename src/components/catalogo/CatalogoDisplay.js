import React from 'react';
import {Link} from 'react-router-dom';


export const UrbanoDisplay = ({}) => {

    return (
        <div className="urbano">
            <h2>Urbano</h2>
            <div className="flex box_urbano" style={{width:"80%", margin:"50px auto", textAlign:"center"}}>
                <div>
                    <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/28276392_1551183131643736_7121110285937348855_n.jpg?oh=ba6d5d9c729e9cd421ca10d7848e6e3c&oe=5B4C553E" alt=""/>
                </div>
                <div>
                    <h3>The city with a touch of the horseworld.</h3>
                    <p>La ciudad con un toque del mundo del caballo.</p>
                    <Link to="" style={{textDecoration:"underline", color:"#e3801b"}}>
                        <span>Leer más...</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};