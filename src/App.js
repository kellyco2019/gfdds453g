import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import "./index.css";


export class App extends Component {
  render() {
    return (
       <div>
        <Router>
        <nav>
          <ul>
            <li><Link to="/Page1">Page1</Link></li> 
            <li><Link to="/Page2">Page2</Link></li> 
          </ul>
        </nav>
          
           <Switch>  
            <Route exact path="/Page1" ><Page1/></Route>
            <Route path="/Page2" ><Page2 /></Route>
            <Route path="*" ><NotFound/></Route>
            <Redirect to="/Page1"/>
           </Switch>
        </Router>
      </div>
    );
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
