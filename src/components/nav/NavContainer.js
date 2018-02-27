/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Nav.css';


class NavContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <div className="box_nav">
                    <img src="http://www.stetson.com/store/skin/frontend/base17/stetson/images/logo.svg" alt=""/>
                    <div className="flex">
                       <p>Urbano</p>
                        <p>Vaquero</p>
                        <p>Ecuestre</p>
                        <p>Regional</p>
                        <p>Blog</p>
                        <p>Contacto</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavContainer;