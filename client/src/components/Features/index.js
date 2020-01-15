import React, { Component } from 'react';
import {
  isMobile
} from "react-device-detect";

import './style.css';

class Features extends Component {
  render() {
    if (isMobile) {
    return (
      <div>
      <div className="jumbotronMobile vertical-center">
  <center>    <h4>Feature Rich for your success!</h4>
<h1 className="display-3"><h3>Automated Liquidation Signals</h3></h1>
<h1 className="display-3"><h3>Automated Airdrop Alerts</h3></h1>
<h1 className="display-3"><h3>Mastered CSS Feeds</h3></h1>
<h1 className="display-3"><h3>In-Channel Chart Generation</h3></h1>
<h1 className="display-3"><h3>Custom PaperTrader Bot</h3></h1>
<h1 className="display-3"><h3>Open Development Community</h3></h1></center>
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
<center>    <h4>Feature Rich for your success!</h4>
<h1 className="display-3"><h3>Automated Liquidation Signals</h3></h1>
<h1 className="display-3"><h3>Automated Airdrop Alerts</h3></h1>
<h1 className="display-3"><h3>Mastered CSS Feeds</h3></h1>
<h1 className="display-3"><h3>In-Channel Chart Generation</h3></h1>
<h1 className="display-3"><h3>Custom PaperTrader Bot</h3></h1>
<h1 className="display-3"><h3>Open Development Community</h3></h1></center>
<hr className="my-2" />
<p>Introducing: TradeTalks™ - A server full of traders from various markets all around the globe.<br/> Here you can find discussions and charts of stocks, forex, metals and crypto. Completely free to join and participate. Join TradeTalks today!</p>
<p className="lead">
<center>  <a className="btn btn-primary btn-lg" href="https://discord.gg/bhnDzd7" role="button">Join Us On Discord</a> </center>
</p>
</div>
</div>)
  }
}
}
export default Features;
