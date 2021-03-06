import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Container from "./components/Container"
import ProductDetal from "./components/ProductDetal"
import CreateLogin from './components/CreateLogin'
import Login from './components/Login'
import Carrinho from "./components/Carrinho";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Container} />
            <Route path="/productdetal/:id" component={ProductDetal} />
            <Route path="/createlogin" component={CreateLogin} />
            <Route path="/login" component={Login} />
            <Route path="/carrinho" component={Carrinho} />
        </Switch>
    </BrowserRouter>
);

export default Routes;