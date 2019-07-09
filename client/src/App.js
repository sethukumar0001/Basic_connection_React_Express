import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import select from './components/select';
import './App.css';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/select" component={select} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
