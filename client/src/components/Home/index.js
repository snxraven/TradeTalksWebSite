import React, { Component } from 'react';
import './style.css';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import {
  isMobile
} from "react-device-detect";

class Home extends Component {
  render() {

    if (isMobile) {
    return (

      <div>
      <div className="jumbotronMobile">
      <h4>Welcome to TradeTalks™</h4>
<h1 className="display-3"><h3>Trading can be boring!</h3></h1>
<p className="lead">Sitting in front a screen all day. <br/> No one to talk to, no second opinion on your charts.<br/> No one around to share that funny meme with that Elon Musk just posted to Twitter.</p>
<hr className="my-2" />
<p>Introducing: TradeTalks™ - A server full of traders from various markets all around the globe.<br/> Here you can find discussions and charts of stocks, forex, metals and crypto. Completely free to join and participate. Join TradeTalks today!</p>
<p className="lead">
<center>  <a className="btn btn-primary btn-lg" href="https://discord.gg/bhnDzd7" role="button">Join Us On Discord</a> </center>
</p>
</div>
</div>
    )
  } else {

    return (<div>
    <div className="jumbotron">
    <h4>Welcome to TradeTalks™</h4>
<h1 className="display-3"><h3>Trading can be boring!</h3></h1>
<p className="lead">Sitting in front a screen all day. <br/> No one to talk to, no second opinion on your charts.<br/> No one around to share that funny meme with that Elon Musk just posted to Twitter.</p>
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
export default Home;
