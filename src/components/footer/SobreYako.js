
import React, { Component } from 'react';
import './Footer.css';



class SobreYako extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{padding:"170px 20%", borderTop:"1px solid #f8f8f7", borderBottom:"1px solid #f8f8f7"}} className="asks">

                <h3 className="titulo">Sobre Yako</h3>
                    <p className="text_yako">Fundado por 3 apasionados y profesionistas del mundo del caballo,
                        Yako busca proveer productos que causen buenas
                        experiencias entre el caballo y jiente/amazona.
                        <br/>
                        <br/>
                        Yako Horseworld es una tienda Mexicana que comercializa productos para el mundo del caballo.
                        Nuestros servicios se basan en la calidad y buen valor, es por eso que solo manejamos marcas internacionales pioneras por su excelencia, o marcas de empresas “pequeñas” que cumplen con los más exigentes estándares.
                        <br/>
                        <br/>
                        Establecidos en Guadalajara, México, buscamos llegar hasta el ultimo rincón de México y más allá, por medio de nuestras tiendas y venta online.
                        <br/>
                        <br/>

                        Bienvenidos a nuestra marca hecha para todos en el mundo del caballo.
                        <br/>
                        <br/>
                        Yako
                        <br/>
                        “Horseworld style for all”</p>
            </div>
        );
    }
}

export default SobreYako;
