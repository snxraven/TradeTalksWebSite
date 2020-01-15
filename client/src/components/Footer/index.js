import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Footer extends Component {
  render() {
    return (

      <div>

      <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <TradingViewEmbed
                    widgetType={widgetType.TICKER_TAPE}
                    widgetConfig={{
                      symbols: [
  {
    proName: "OANDA:SPX500USD",
    title: "S&P 500"
  },
  {
    proName: "OANDA:NAS100USD",
    title: "Nasdaq 100"
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR/USD"
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "BTC/USD"
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "ETH/USD"
  }
],
                      colorTheme: "dark",
                isTransparent: true,
                displayMode: "regular",
                locale: "en"
                    }}
                  />
                  <font color="white" size={1}>&copy; TradeTalks&#8482; 2020 | Coded with Love by: Raven Scott in beautiful Atlanta</font> <font color="white" size={2}>*TradeTalks™ is for entertainment purposes only, seek out the appropriate financial and tax advisors before making a financial decision*</font>


      </nav>

      </div>

    )
  }
}

export default Footer;
