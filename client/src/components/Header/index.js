import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiNavLink from '../LiNavLink';

import './style.css';

class Header extends Component {
  render() {
    return (
      <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">TradeTalks&#8482;</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Features">Features</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    )
  }
}

export default Header;
