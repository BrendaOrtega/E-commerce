/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Home.css';
import OwlCarousel from 'react-owl-carousel';


class Slide extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <OwlCarousel
                    className="owl-theme"
                    loop margin={10} items={1} autoplay={true} nav={false}
                >
                    <div class="item"><img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28238862_1550835415011841_5904580611411321067_o.jpg?oh=7dd25a32612a3b954c47039f4017e3dd&oe=5B16DFAB" alt=""/></div>
                    <div class="item"><img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28424408_1550835585011824_5397605594672573659_o.jpg?oh=3fda582bdc4f00944067c7a251abe133&oe=5B0C204D" alt=""/></div>
                    <div class="item"><img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28424215_1550835465011836_3690738709987288401_o.jpg?oh=6f515fc3bb699c98efdcd0d208ca8d63&oe=5B0B3A32" alt=""/></div>
                    <div class="item"><img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t31.0-8/28516613_1550835811678468_4512410741186911594_o.jpg?oh=9de1e191edad59fbc5be705c33590109&oe=5B0A4B60" alt=""/></div>
                
                </OwlCarousel>
            </div>
        );
    }
}

export default Slide;