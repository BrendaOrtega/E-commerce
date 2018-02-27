import React, {Component} from 'react';
import './Home.css';

class Categorias extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{width:"80%", margin:"50px auto", textAlign:"center"}}>
                <h2>Nuestra colección</h2>
                <p>DREAMS ON THE DIVIDE  PHOTOS & STORY BY JORDAN KILLPACK</p>
                <div className="flex centro">
                    <div className="urbana">
                        <div style={{marginBottom:"20px"}}>
                            <h3>Urbano</h3>
                            <hr className="line_white"/>
                        </div>
                    </div>
                    <div className="urbana">
                        <div style={{marginBottom:"20px"}}>
                            <h3>Vaquero</h3>
                        <hr className="line_white"/>
                        </div>
                    </div>
                    <div className="urbana">
                        <div style={{marginBottom:"20px"}}>
                            <h3>Ecuestre</h3>
                            <hr className="line_white"/>
                        </div>
                    </div>
                    <div className="urbana">
                        <div style={{marginBottom:"20px"}}>
                            <h3>Regional</h3>
                            <hr className="line_white"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categorias;