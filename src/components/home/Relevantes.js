import React, {Component} from 'react';
import './Home.css';
import Card from '../card/Card';

class Relevantes extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="box_relevantes">
                <h2>Más vendidos</h2>
                <div className="destacados flex">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default Relevantes;