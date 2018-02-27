/**
 * Created by brendaortega on 26/02/18.
 */
import React, {Component} from 'react';
import './Home.css';
import Slide from './Slide';
import Categorias from './Categorias';
import Publi from '../publi/Publi';
import Relevantes from './Relevantes';
import Video from '../video/Video';
import Seller from '../seller/Seller';

class HomeContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Slide />
                <Categorias />
                <Publi />
                <Relevantes />
                <Video />
                <Seller />
            </div>
        );
    }
}

export default HomeContainer;