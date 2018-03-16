/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Home.css';
import { Carousel } from 'antd';
import OwlCarousel from 'react-owl-carousel';


class Slide extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <div>
                    <Carousel autoplay>
                        <div>
                            <div className="im uno" >
                            </div>
                        </div>
                        <div>
                            <div className="im dos">
                            </div>
                        </div>
                        <div>
                            <div className="im tres" >
                            </div>
                        </div>
                        <div>
                            <div className="im cuatro" >
                            </div>
                        </div>
                        <div>
                            <div className="im cinco" >
                            </div>
                        </div>
                        <div>
                            <div className="im seis" >
                            </div>
                        </div>
                        <div>
                            <div className="im siete" >
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Slide;