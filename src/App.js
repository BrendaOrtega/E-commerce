import React, { Component } from 'react';
import {Routes} from './routes';
import './App.css';
import NavContainer from './components/nav/NavContainer';
import FooterContainer from './components/footer/FooterContainer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavContainer />
                    <Routes />
                    <FooterContainer />
                </div>
            </div>
        );
    }
}

export default App;