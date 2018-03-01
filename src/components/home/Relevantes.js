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
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1733/34c64e8911b8f8eff21cdb3b181977e548821aaea99bc35d42281b327a2548e8a/A" />
                    <CardDisplay img="http://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw8c456871/images/zoom/10023133_3-4_front.jpg?sw=680&sh=680" />
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1743/0e293772b0dab658512d3428d1da2c55659193d19016c4790d13dc10c79ee0b9a/A"/>
                    <CardDisplay img="http://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw89dfc4b7/images/zoom/10018693_3-4_front.jpg?sw=680&sh=680"/>
                </div>
            </div>
        );
    }
}

export default Relevantes;