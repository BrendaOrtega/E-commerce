import React, {Component} from 'react';
import './Seller.css';
import FontAwesome from 'react-fontawesome';

class Seller extends Component {

    render() {
        return (
            <div style={{width:"80%", margin:"50px auto", textAlign:"center"}}>
                <h2>Encuentra tu Mood</h2>
                <div className="flex">
                    <div className="blog_img">
                        <div className="cubierta">
                            <div className="box_span">
                                <FontAwesome name="shopping-bag" size="2x"/>
                                <br/>
                                <span><p>Discover our world of blue and lock <br/> down the jeans that work for you.</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="blog_img">
                        <div className="cubierta">
                            <div className="box_span">
                                <FontAwesome name="shopping-bag" size="2x"/>
                                <br/>
                                <span><p>Discover our world of blue and lock <br/> down the jeans that work for you.</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="blog_img">
                        <div className="cubierta">
                            <div className="box_spans">
                                <FontAwesome name="shopping-bag" size="2x"/>
                                <br/>
                                <span><p>Discover our world of blue and lock <br/> down the jeans that work for you.</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seller;