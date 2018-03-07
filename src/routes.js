import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Catalogo from './components/catalogo/Catalogo';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/catalogo" component={Catalogo} />
    </Switch>
);