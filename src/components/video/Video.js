import React, {Component} from 'react';
import './Video.css';
import {Link} from 'react-router-dom';

class Video extends Component {

    render() {
        return (
            <div className="box_video">
                <div style={{width:"80%", margin:"50px auto"}}>
                    <div className="flex">
                        <div className="boxi">
                            <iframe className="video"  src="https://www.youtube.com/embed/T5GBgu1bBsY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        <div className=" boxi text_video">
                            <h3>The city with a touch of the horseworld.</h3>
                            <p>La ciudad con un toque del mundo del caballo.</p>
                            <Link to="" style={{textDecoration:"underline", color:"#e3801b"}}>
                                <span>Leer más...</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;