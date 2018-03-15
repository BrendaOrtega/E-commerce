/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import logoy from '../../assets/logoY.png';

class FooterContainer extends Component {
    render() {
        return (
            <div className="footer">
                <div style={{width:"80%", margin:"0px auto"}}>
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        <div>
                            <h3 style={{color:"white"}}>Yako</h3>
                            <p>Sobre Yako</p>
                            <p>Preguntas Frecuentes</p>
                            <p>Contactanos</p>
                        </div>
                        <div>
                            <h3 style={{color:"white"}}>Ayuda</h3>
                            <p>Políticas y Devoluciones</p>
                            <p>Formas de Pago</p>
                            <p>Guía de Tallas</p>
                        </div>
                        <div className="redes">
                            <img className="logo_y" src={logoy} alt=""/>
                            <h3 style={{color:"white"}}>Nuestras redes</h3>
                            <FontAwesome name="facebook-square" size="2x" />
                            <FontAwesome name="twitter-square" size="2x"/>
                            <FontAwesome name="instagram" size="2x"/>
                        </div>
                    </div>
                    <hr className="linea"/>
                    <p>Copyright © 2018 Yako</p>
                </div>
            </div>
        );
    }
}

export default FooterContainer;