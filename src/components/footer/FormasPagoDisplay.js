
import React, { Component } from 'react';
import './Footer.css';


class FormasPagoDisplay extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{padding:"200px 20%", borderTop:"1px solid #f8f8f7", borderBottom:"1px solid #f8f8f7"}} className="asks">

                <h3 className="titulo">Formas de Pago</h3>
                        <p>Puedes realizar tus compras con cualquier tarjeta de crédito o débito.
                        </p>
                        <br/>
                        <div className="formas">
                            <div>
                                <img src="https://s3.amazonaws.com/conekta.static/business/commissions/methods_cards.png" alt=""/>
                            </div>
                            <div>
                                <p>Aplica a tarjetas locales y extranjeras.</p>
                            </div>
                            <div>
                                <img src="https://s3.amazonaws.com/conekta.static/business/commissions/methods_oxxopay.png" alt=""/>
                            </div>
                            <div>
                                <p>OXXO cobra $ 10 pesos MXN adicionales a tus clientes por pagar en caja.</p>
                            </div>
                        </div>



            </div>
        );
    }
}

export default FormasPagoDisplay;/**
 * Created by brendaortega on 16/03/18.
 */
