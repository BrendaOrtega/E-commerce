import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Urbano from './components/moods/urbano/Urbano';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/urbano" component={Urbano} />
    </Switch>
);