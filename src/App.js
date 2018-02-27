import React, { Component } from 'react';
import {Routes} from './routes';
import './App.css';
import NavContainer from './components/nav/NavContainer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavContainer />
                    <Routes />
                </div>
            </div>
        );
    }
}

export default App;