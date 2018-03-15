/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import logo from '../../assets/yako.png';

class NavContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="nav_fix">
                <div className="box_nav">
                    <div className="nav_superior fle">
                        <label className="bx search" style={{textAlign:"left"}}>
                            <input type="text" name="name" placeholder="Buscar"/>
                            <FontAwesome name="search" />
                        </label>
                        <span className="bx">
                            <Link to="/">
                                <img src={logo} alt=""/>
                            </Link>
                        </span>
                        <div className="user_nav bx" style={{textAlign:"right"}}>
                            <Link to="/perfil">
                                <span>Mi cuenta</span>
                            </Link>
                                <span><FontAwesome name="shopping-cart" /></span>
                        </div>
                    </div>
                        <div className="flex pestanas">

                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Sombreros</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/catalogo">Todo</Link>
                                <Link to="/">Texanas</Link>
                                <Link  to="/">De palma</Link>
                                <Link  to="/">Niños</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Botas</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/">Todo</Link>
                                <Link to="/">Hombre</Link>
                                <Link  to="/">Mujer</Link>
                                <Link  to="/">Niños</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Ropa</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/">Todo</Link>
                                <Link to="/">Hombre</Link>
                                <Link  to="/">Mujer</Link>
                                <Link  to="/">Niños</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Accesorios</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/">Todo</Link>
                                <Link to="/">Gorras</Link>
                                <Link to="/">Cintos</Link>
                                <Link  to="/">Bolsas</Link>
                                <Link  to="/">Guantes</Link>
                                <Link  to="/">Toquillas</Link>
                                <Link  to="/">Lllaveros</Link>
                                <Link  to="/">Bohinas</Link>
                                <Link  to="/">Cascos</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Para caballo</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/">Todo</Link>
                                <Link to="/">Espuelas/asicates/correones</Link>
                                <Link to="/">Bocados/frenos</Link>
                                <Link  to="/">Mantillas/Caronas/Sudaderas</Link>
                                <Link  to="/">Cabezadas y Riendas</Link>
                                <Link  to="/">Almartigones y Guías</Link>
                                <Link  to="/">Equipo de entrenamiento</Link>
                                <Link  to="/">Protectores</Link>
                                <Link  to="/">Covertores/Calentadores</Link>
                                <Link  to="/">Limpieza para el cabello</Link>
                                <Link  to="/">Limpieza de equipo</Link>
                                <Link  to="/">Talabateria</Link>
                                <Link  to="/">Fuetes/Latigos</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Marcas</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/">Todo</Link>
                                <Link to="/">Ariat</Link>
                                <Link to="/">Stetson</Link>
                                <Link  to="/">Resistol</Link>
                                <Link  to="/">Weaver Leather</Link>
                                <Link  to="/">Hooey</Link>
                                <Link  to="/">Cactus Ropes</Link>
                                <Link  to="/">Impact Gel</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn"> <h3>Blog</h3></button>
                            <div className="dropdown-content av">
                                <Link to="/">Todo</Link>
                                <Link to="/">Entrevistas</Link>
                                <Link to="/">Artículos</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default NavContainer;