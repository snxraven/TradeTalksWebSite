import React, { Component } from 'react';
import './style.css';
import {
  isMobile
} from "react-device-detect";

class About extends Component {
  render() {
    if (isMobile) {
      return (

          <div>
          <div className="jumbotronMobile vertical-center">
          <h4>We have had many forms...</h4>
  <h1 className="display-3"><h3>From each we have learned.</h3></h1>
    <p className="lead">From WhalePool to GoatClub, now to TradeTalks. <br/> Our group is comprised of Legacy and Crypto Traders<br/>A fully open minded Trading Community, without all of the extra bullshit.</p>
    <hr className="my-2" />
    <p>Introducing: TradeTalks™ - A server full of traders from various markets all around the globe.<br/> Here you can find discussions and charts of stocks, forex, metals and crypto. Completely free to join and participate. Join TradeTalks today!</p>
    <p className="lead">
    <center>  <a className="btn btn-primary btn-lg" href="https://discord.gg/bhnDzd7" role="button">Join Us On Discord</a> </center>
    </p>
  </div>
  </div>
      )
  } else {
    return (

        <div>
        <div className="jumbotron vertical-center">
        <h4>We have had many forms...</h4>
<h1 className="display-3"><h3>From each we have learned.</h3></h1>
  <p className="lead">From WhalePool to GoatClub, now to TradeTalks. <br/> Our group is comprised of Legacy and Crypto Traders<br/>A fully open minded Trading Community, without all of the extra bullshit.</p>
  <hr className="my-2" />
  <p>Introducing: TradeTalks™ - A server full of traders from various markets all around the globe.<br/> Here you can find discussions and charts of stocks, forex, metals and crypto. Completely free to join and participate. Join TradeTalks today!</p>
  <p className="lead">
  <center>  <a className="btn btn-primary btn-lg" href="https://discord.gg/bhnDzd7" role="button">Join Us On Discord</a> </center>
  </p>
</div>
</div>
    )
  }
}
}
export default About;
