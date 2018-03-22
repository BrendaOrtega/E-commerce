/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import logoy from '../../assets/logoYfooter.png';
import {Link} from 'react-router-dom';

class FooterContainer extends Component {
    render() {
        return (
            <div className="footer">
                <div style={{width:"80%", margin:"0px auto"}}>
                    <div className="flexi">
                        <div>
                            <h3 style={{color:"white"}}>Yako</h3>
                            <Link to="/yako">
                                <p>Sobre Yako</p>
                            </Link>
                            <Link to="/preguntas-frecuentes">
                                <p>Preguntas Frecuentes</p>
                            </Link>
                            <Link to="/contacto">
                                <p>Contáctanos</p>
                            </Link>
                        </div>
                        <div>
                            <h3 style={{color:"white"}}>Ayuda</h3>
                            <Link to="/politicas-de-privacidad" >
                                <p>Políticas de Privacidad</p>
                            </Link>
                            <Link to="formas-de-pago">
                                <p>Formas de Pago</p>
                            </Link>
                            <p>Guía de Tallas</p>
                        </div>
                        <div className="redes">

                            <h3 style={{color:"white"}}>Nuestras redes</h3>
                                <Link  to="https://www.facebook.com/yakohw/" target="_blank">
                                    <FontAwesome name="facebook-square" size="2x" />
                                </Link>
                                <Link to="https://twitter.com/YakoHorseworld" target="_blank">
                                    <FontAwesome name="twitter-square" size="2x"/>
                                </Link>
                                <Link to="https://www.instagram.com/yakohw/?hl=es-la" target="_blank">
                                    <FontAwesome name="instagram" size="2x"/>
                                </Link>
                                <Link to="" target="_blank">
                                    <FontAwesome name="youtube" size="2x"/>
                                </Link>
                        </div>
                        <div>
                            <img className="logo_y" src={logoy} alt=""/>
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