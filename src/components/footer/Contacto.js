import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';


class Contacto extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{padding:"170px 20%", borderTop:"1px solid #f8f8f7", borderBottom:"1px solid #f8f8f7"}} className="asks">

                <h3 className="titulo">Contáctanos</h3>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <div className="data_ctc">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.963495642311!2d-103.3652193385966!3d20.67106408486116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae040e0d0525%3A0x7950969517c105ad!2sCalle+Atenas+388%2C+Americana%2C+44160+Guadalajara%2C+Jal.!5e0!3m2!1ses-419!2smx!4v1521230466851" width={400} height={360} frameborder={0} style={{border:"0"}} allowfullscreen></iframe>
                    </div>
                    <div className="data_ctc">
                        <div>
                            <p>ventas@yakowh.com</p>
                            <p>33 333 33 33</p>

                            <p >Nuestras redes</p>
                            <FontAwesome name="facebook-square" size="2x" />
                            <FontAwesome name="twitter-square" size="2x"/>
                            <FontAwesome name="instagram" size="2x"/>
                            <FontAwesome name="youtube" size="2x"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacto;
