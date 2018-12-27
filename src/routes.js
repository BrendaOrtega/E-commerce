import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Catalogo from './components/catalogo/Catalogo';
import Perfil from './components/perfil/Perfil';
import PreguntasDisplay from './components/footer/PreguntasDisplay';
import FormasDisplay from './components/footer/FormasPagoDisplay';
import SobreYako from './components/footer/SobreYako';
import Politicas from './components/footer/Politicas';
import Contacto from './components/footer/Contacto';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/preguntas-frecuentes" component={PreguntasDisplay} />
        <Route path="/formas-de-pago" component={FormasDisplay} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/politicas-de-privacidad" component={Politicas} />
        <Route path="/yako" component={SobreYako} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
    </Switch>
);