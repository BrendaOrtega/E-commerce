import React, {Component} from 'react';
import './Seller.css';
import FontAwesome from 'react-fontawesome';

class Seller extends Component {

    render() {
        return (
            <div style={{width:"80%", margin:"50px auto", textAlign:"center"}}>
                {/*<h2>Encuentra tu Mood</h2>*/}
                <div className="blog_img_large">
                    <h3>Encuentra tu Mood</h3>
                </div>
                <div className="flex">
                    <div style={{margin:"10px 10px 0 0"}} className="blog_img">
                        <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/28471863_1551183054977077_4787599912348101153_n.jpg?oh=7249b27d68b0533aef51fe0e122f448c&oe=5B0669F2" alt=""/>
                        <p>Discover our world of blue </p>
                        <p style={{textDecoration:"underline", fontSize:"12px", margin:"0"}}>Leer más...</p>

                    </div>
                    <div className="blog_img" style={{margin:"10px 0px 0 10px"}}>
                        <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/28336384_1551183131643736_7121110285937348855_o.jpg?oh=9c0c018c4a75b854aa6a34aaf5e53f61&oe=5B4BD018" alt=""/>
                        <p>Discover our world of blue </p>
                        <p style={{textDecoration:"underline", fontSize:"12px", margin:"0"}}>Leer más...</p>

                    </div>

                    {/*<div className="blog_img">*/}
                        {/*<div className="cubierta">*/}
                            {/*<div className="box_span">*/}
                                {/*<FontAwesome name="shopping-bag" size="2x"/>*/}
                                {/*<br/>*/}
                                {/*<span><p>Discover our world of blue and lock <br/> down the jeans that work for you.</p></span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="blog_img">*/}
                        {/*<div className="cubierta">*/}
                            {/*<div className="box_span">*/}
                                {/*<FontAwesome name="shopping-bag" size="2x"/>*/}
                                {/*<br/>*/}
                                {/*<span><p>Discover our world of blue and lock <br/> down the jeans that work for you.</p></span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="blog_img">*/}
                        {/*<div className="cubierta">*/}
                            {/*<div className="box_spans">*/}
                                {/*<FontAwesome name="shopping-bag" size="2x"/>*/}
                                {/*<br/>*/}
                                {/*<span><p>Discover our world of blue and lock <br/> down the jeans that work for you.</p></span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Seller;