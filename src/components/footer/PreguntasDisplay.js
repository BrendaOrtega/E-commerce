
import React, { Component } from 'react';
import './Footer.css';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


class PreguntasDisplay extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{padding:"170px 20%", borderTop:"1px solid #f8f8f7", borderBottom:"1px solid #f8f8f7"}} className="asks">

                <h3 className="titulo">Preguntas frecuentes</h3>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="¿Es seguro pagar en YAKO?" key="1" >
                        <p>Sí, en Yako Horseworld garantizamos al 100% la
                            seguridad de tus pagos. Al momento de pagar con
                            tu tarjeta de crédito o débito, toda tu
                            información es cifrada mediante el mejor
                            sistema de protección Secure Sockets Layer
                            (SSL) de 256-bit. Así que puedes estar tranquilo,
                            nosotros no guardamos ningún dato de tu tarjeta.
                        </p>
                    </Panel>
                    <Panel header="¿Qué tarjetas puedo usar para realizar una compra?" key="2">
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
                    </Panel>
                    <Panel header="¿Qué hago si no procede mi orden?" key="3">
                        <p>Existen diferentes motivos por los cuales un pedido puede no proceder:
                            <br/>
                            - Método de pago no aceptado (ej. tarjeta internacional, depósito en cuenta errada).
                            <br/>
                            - El banco rechazo la transacción (tarjeta de débito, tarjeta de crédito):
                            <br/>
                            - Los datos de la tarjeta no coinciden con los del titular de la cuenta Linio y el banco por seguridad declina el pago.
                            <br/>
                            - La tarjeta pueda tener algún tipo de restricción para compras por Internet.
                            <br/>
                            - Los fondos de la tarjeta son insuficientes.
                            <br/>
                            - No realizaste el pago dentro del tiempo establecido (depósito).
                            <br/>
                            - Debido a la gran demanda del producto, lamentablemente nos quedamos sin existencias.
                        </p>
                    </Panel>
                    <Panel header="¿Cuánto tiempo tengo para devolver el producto?" key="4">
                        <p>
                            Tienes 8 días naturales para devolver el producto, a partir del momento que la paquetería hace entrega de tu producto.
                            *Te recordamos que si el estado del producto y su envoltura se encuentra dañada, no nos haremos responsables de la devolución de su dinero.</p>
                    </Panel>
                    <Panel header="¿Cuál es el costo de la devolución?" key="5">
                        <p>En caso de que Yako se haya equivocado en su orden, la devolución corre por nuestra cuenta.
                            <br/>
                            En caso de no ser así, hay dos opciones:
                            <br/>
                            1- Mandar el producto por la paquetería de tu preferencia.
                            <br/>
                            2- Pedirnos una etiqueta de devolución Yako, donde estarías obteniendo nuestros buenos precios de paquetería, este cargo se te cargaría a tu tarjeta y la etiqueta te llegaría vía email donde solo la imprimirías y pegarías a tu paquete.
                            <br/>
                            <br/>
                            *Te recordamos que si el estado del producto y su envoltura se encuentra dañada, no nos haremos responsables de la devolución de su dinero.
                        </p>
                    </Panel>
                    <Panel header="¿En qué condiciones debe estar el producto y el empaque?" key="6">
                        <p>En las mejores condiciones posibles. Es fundamental que conserves el empaque original,
                            pues es tan importante como el producto; cuídalo, guárdalo y manipúlalo con el mayor
                            de los cuidados, de esta forma no tendrás ningún inconveniente al momento de realizar
                            la devolución.
                            <br/>
                             Una vez que imprimas la guía de la paquetería, es importante no pegarla directamente
                            en la caja original del producto, ya que el pegamento puede dañar el empaque y
                            tu devolución puede ser rechazada. Utiliza otra caja o envoltura para pegar
                            tu guía y proteger el empaque original. Por favor, ten en cuenta que si no conservas
                            el empaque original, o si éste se encuentra en mal estado, tu devolución podrá ser rechazada.
                        </p>
                    </Panel>
                    <Panel header="¿Cómo sé si recibieron el producto que devolví?" key="7">
                        <p>Una vez que la paquetería ha recolectado tu producto y lo entregue en nuestro almacén,
                            te enviaremos un correo electrónico para confirmar su llegada e informarte sobre
                            los próximos pasos a seguir.
                            <br/>
                            Por seguridad, ten a la mano el número de rastreo del paquete.
                        </p>
                    </Panel>
                    <Panel header="¿Hasta donde hacen envíos?" key="8">
                        <p>Yako puede mandarte el paquete a cualquier parte del mundo,
                            solo hay que tener en cuenta que las tarifas de envío e impuestos en aduana son variantes.
                            Escríbenos y con muchos gusto te haremos una cotización.
                        </p>
                    </Panel>
                    <Panel header="¿Cómo limpio mi Sombrero o Texana?" key="9">
                        <p>Un sombrero típicamente esta hecho de palma, te recomendamos tomar un trapo húmedo o cepillo húmedo con muy poquito jabón y darle a todo el sombrero, después con un trapo o toalla seca, secarlo.
                            <br/>
                            Una texana típicamente esta hecha de pelo o lana de diferentes animales, las texanas son de más cuidado. Para quitar polvo o pelusa, les recomendamos cepillarlo con un cepillo de cerda de pelo natural. Si lo que usted busca es una limpieza más a fondo de manchas les recomendarlos llevar a algún de sombreros a su limpieza.
                        </p>
                    </Panel>
                    <Panel header="¿Qué pasa si no hay lo que buscas en nuestra página web?" key="10">
                        <p>Manejamos un catálogo interno muy amplio, poco a poco vamos a ir teniendo más inventario en línea,
                            es por eso que si no encuentras un producto en especial te invitamos a escribirnos y decirnos cual
                            es, ya que lo más probable es que si lo tengamos, solo que no está en línea.  </p>
                    </Panel>
                </Collapse>



            </div>
        );
    }
}

export default PreguntasDisplay;