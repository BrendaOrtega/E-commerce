import React, {Component} from 'react';
import './Seller.css';
import FontAwesome from 'react-fontawesome';

class Seller extends Component {

    render() {
        return (
            <div style={{width:"80%", margin:"50px auto", textAlign:"center", paddingBottom:"50px"}}>
                <div className="blog_img_large">
                    <h2>YAKO BLOG</h2>
                </div>
                <div className="flex">
                    <div  className="blog_img maruno">
                        <div className="noti" style={{backgroundImage:`url("https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/28471863_1551183054977077_4787599912348101153_n.jpg?oh=7249b27d68b0533aef51fe0e122f448c&oe=5B0669F2")`}}>
                        </div>
                        <h3>Las diferentes hormas de sombreros</h3>
                        <p className="av justify">Hay que hacer una pequeña diferenciación entre el sombrero de ceremonia o el
                            tocado con el sombrero de diario, menos formal y menos integrado con el vestuario.
                            También es un factor a tener en cuenta, el lugar, momento y circunstancia en
                            el que se vista el sombrero.</p>
                        {/*<p style={{textDecoration:"underline", fontSize:"12px", margin:"0"}}>Leer más...</p>*/}

                    </div>
                    <div className="blog_img mardos" >
                        <div className="noti" style={{backgroundImage:`url("https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/28379187_1553934564701926_3624079076517426893_n.jpg?oh=6d24452ebe52abf1564a531cc8973430&oe=5B068858")`}}>
                        </div>
                        <h3>Entrevista con Beto Pena y sus caballos </h3>
                        <p className="av justify">Hay que hacer una pequeña diferenciación entre el sombrero de ceremonia o el
                            tocado con el sombrero de diario, menos formal y menos integrado con el vestuario.
                            También es un factor a tener en cuenta, el lugar, momento y circunstancia en
                            el que se vista el sombrero.</p>
                        {/*<p style={{textDecoration:"underline", fontSize:"12px", margin:"0"}}>Leer más...</p>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Seller;