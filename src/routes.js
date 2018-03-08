import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Catalogo from './components/catalogo/Catalogo';
import Perfil from './components/perfil/Perfil';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/perfil" component={Perfil} />
    </Switch>
);