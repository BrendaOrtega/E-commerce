import React, {Component} from 'react';
import './Home.css';
import {CardDisplay} from '../card/CardDisplay';

class Relevantes extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="box_relevantes">
                <h2>YAKO TRENDS</h2>
                <div className="destacados flex">
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1733/34c64e8911b8f8eff21cdb3b181977e548821aaea99bc35d42281b327a2548e8a/A"
                        nombre={"Temple Fedora"}
                                 precio={"2,060"}
                    />
                    <CardDisplay img="https://cdn.shopify.com/s/files/1/0243/2873/products/10018717_3-4_front_large.jpg?v=1495229726"
                                 nombre={"ARIAT CHUTE BOSS"}
                                 precio={"5,400"}
                    />
                    <CardDisplay img="https://cdn.shopify.com/s/files/1/0243/2873/products/Trail_Gear_Alforjas_Cafe_large.jpg?v=1476227990"
                                 nombre={"ALFORJAS TRAIL GEAR"}
                                 precio={"1,440 "}
                    />
                    <CardDisplay img="https://cdn.shopify.com/s/files/1/0841/5443/products/CWRHIG-2540C8.jpg?v=1488392450"
                                 nombre={"CHARLIE 1 HORSE ROYAL HIGHNESS BLUE"}
                                 precio={"2,510"}
                    />
                </div>
            </div>
        );
    }
}

export default Relevantes;