import React, {Component} from 'react'
import {BrowserRouter,Route, Switch} from "react-router-dom"
import Home from './Home'
import Prueba from './Prueba'
import Error from './Error'
import Header from './Header'
import Insertar from './Insertar'
import ListarEstudiante from './listarestudiante'
class Router extends Component {
   render() {
        return (
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/prueba" component={Prueba}></Route>
                    <Route exact path="/insertar" component={Insertar}></Route>
                    <Route exact path="/listarestuadiantes" component={ListarEstudiante}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>

        )
    }
}
export default Router