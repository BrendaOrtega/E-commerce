/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class NavContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <div className="box_nav">
                    <img src="http://www.stetson.com/store/skin/frontend/base17/stetson/images/logo.svg" alt=""/>
                    <div className="flex pestanas">

                        <div className="dropdown">
                            <button className="dropbtn"> <p>Urbano</p></button>
                            <div className="dropdown-content">
                                <Link to="/urbano">Todo</Link>
                                <Link to="/">Cintos</Link>
                                <Link  to="/">Carteras</Link>
                                <Link  to="/">Bolsas</Link>
                                <Link  to="/">Guantes</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <p>Vaquero</p></button>
                            <div className="dropdown-content">
                                <Link to="/">Todo</Link>
                                <Link to="/">Cintos</Link>
                                <Link  to="/">Carteras</Link>
                                <Link  to="/">Bolsas</Link>
                                <Link  to="/">Guantes</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <p>Ecuestre</p></button>
                            <div className="dropdown-content">
                                <Link to="/">Todo</Link>
                                <Link to="/">Cintos</Link>
                                <Link  to="/">Carteras</Link>
                                <Link  to="/">Bolsas</Link>
                                <Link  to="/">Guantes</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <p>Regional</p></button>
                            <div className="dropdown-content">
                                <Link to="/">Todo</Link>
                                <Link to="/">Cintos</Link>
                                <Link  to="/">Carteras</Link>
                                <Link  to="/">Bolsas</Link>
                                <Link  to="/">Guantes</Link>
                            </div>
                        </div>

                        <Link to="/">
                            <p>Blog</p>
                        </Link>
                        <Link to="/">
                            <p>Contacto</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavContainer;