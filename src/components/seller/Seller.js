import React, {Component} from 'react';
import './Seller.css';
import FontAwesome from 'react-fontawesome';

class Seller extends Component {

    render() {
        return (
            <div style={{width:"80%", margin:"50px auto", textAlign:"center"}}>
                {/*<h2>Encuentra tu Mood</h2>*/}
                <div className="blog_img_large">
                    <h3>YAKO BLOG</h3>
                </div>
                <div className="flex">
                    <div style={{margin:"10px 10px 0 0"}} className="blog_img">
                        <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/28471863_1551183054977077_4787599912348101153_n.jpg?oh=7249b27d68b0533aef51fe0e122f448c&oe=5B0669F2" alt=""/>
                        <p>Las diferentes hormas de sombreros</p>
                        {/*<p style={{textDecoration:"underline", fontSize:"12px", margin:"0"}}>Leer más...</p>*/}

                    </div>
                    <div className="blog_img" style={{margin:"10px 0px 0 10px"}}>
                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/28379187_1553934564701926_3624079076517426893_n.jpg?oh=6d24452ebe52abf1564a531cc8973430&oe=5B068858" alt=""/>
                        <p>Entrevista con Beto Pena y sus caballos </p>
                        {/*<p style={{textDecoration:"underline", fontSize:"12px", margin:"0"}}>Leer más...</p>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Seller;