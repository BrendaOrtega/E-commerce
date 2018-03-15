import React, {Component} from 'react';
import './Home.css';

class Categorias extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{width:"80%", margin:"50px auto", textAlign:"center"}}>
                <h2>YAKO MOODS</h2>
                <div className="flex centro">
                    <div className="urbana" style={{backgroundImage:`url("https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28424647_1553875294707853_7784804214084292327_o.jpg?oh=e3253e9899897a363656289e69f848bf&oe=5B0A6A9D")`}}>
                        <div className="cov">
                            <div style={{paddingTop:"35%"}}>
                                <h3>Urbano</h3>
                                <hr className="line_white"/>
                                <p className="trans text">THE CITY WITH A TOUCH OF HORSEWORLD</p>
                                <p className="trans sub text">La ciudad con un toque del mundo del caballo</p>
                            </div>
                        </div>
                    </div>
                    <div className="urbana" style={{backgroundImage:`url("https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28423554_1553875301374519_962216183565916169_o.jpg?oh=2b096b5f700e0a1c10cbd166621eba85&oe=5B0B7753")`}}>
                        <div className="cov">
                            <div style={{paddingTop:"35%"}}>
                                <h3>Vaquero</h3>
                                <hr className="line_white"/>
                                <p className="trans text">THE MODERN BUT ALWAYS CLASSIC COWBOY</p>
                                <p className="trans sub text">El moderno pero clásico estilo vaquero</p>
                            </div>
                        </div>
                    </div>
                    <div className="urbana" style={{backgroundImage:`url("https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28423491_1553875374707845_239192590176286401_o.jpg?oh=2baf32815db4d0a29ba49612152605b9&oe=5B04DE54")`}}>
                        <div className="cov">
                            <div style={{paddingTop:"35%"}}>
                                <h3>Europeo</h3>
                                <hr className="line_white"/>
                                <p className="trans text">THE ROYAL STYLE IN THE EVERYDAY EQUESTRIAN</p>
                                <p className="trans sub text">El estilo real en el día a día de un equitador</p>
                            </div>
                        </div>
                    </div>
                    <div className="urbana" style={{backgroundImage:`url("https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/28423296_1553875311374518_389312772128215882_o.jpg?oh=6acfd0ff7a2368bde0f710dc79f4b5cd&oe=5B0A4AF6")`}}>
                        <div className="cov">
                            <div style={{paddingTop:"35%"}}>
                                <h3>Regional</h3>
                                <hr className="line_white"/>
                                <p className="trans text">THE HORSEWORLD MADE MEXICAN</p>
                                <p className="trans sub text">El mundo del caballo hecho al mexicano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categorias;