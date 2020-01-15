import React, { Component } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Features from './components/Features';

import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/Features" component={Features} />
              <Route component={NotFound} />
            </Switch>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
