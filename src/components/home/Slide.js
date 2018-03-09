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
                    loop margin={10} items={1} autoplay={true} nav={false} responsiveClass={true} height={500}>
                    <div class="item"><img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28619416_1553863831375666_8068399721793726937_o.jpg?oh=ae3364869f762c9b6b03e6c14f616abe&oe=5B1500FA" alt=""/></div>
                    <div class="item"><img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28423119_1553863834708999_8084045171279792914_o.jpg?oh=0fbebe07cd8ff2d0c64fb4e23b7f5dc3&oe=5B462254" alt=""/></div>
                    <div class="item"><img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28337077_1553863828042333_3372838152335741476_o.jpg?oh=3ece3f493def67e025982b65a0178775&oe=5B0AF50F" alt=""/></div>
                    <div class="item"><img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28700841_1553863914708991_4307832786742561005_o.jpg?oh=55de691565d5e39726fd97004685765b&oe=5B3F9B2F" alt=""/></div>
                    <div class="item"><img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28424550_1553863924708990_153515074389511749_o.jpg?oh=949d5474149bdfc30b57f7475f83bc36&oe=5B017A1C" alt=""/></div>
                </OwlCarousel>
            </div>
        );
    }
}

export default Slide;