// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';
import Websocket from 'react-websocket';
import Moment from 'moment';
import classNames from 'classnames';

// Import config
import config from 'config';

// Import stylesheets
import styles from './Ticker.scss';

// Export component class
export default class Ticker extends Component {
  constructor(props) {
    super(props);

    this.handleData = this.handleData.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      securityName: '-',
      price: 0,
      change: 0,
      timestamp: 0,
    };
  }

  handleData(data) {
    this.setState({
      securityName: data.issuer_name,
      price: parseFloat(data.price),
      change: parseFloat(data.chg_percent),
      timestamp: parseInt(data.ts, 10),
    });
  }

  onClick(event) {
    event.preventDefault();

    this.props.selectTicker(this.props.symbol);
  }

  render() {
    // Format values
    const price = this.state.price.toFixed(2);
    const change = `${this.state.change >= 0 ? '+' : ''}${this.state.change.toFixed(2)}`;
    const rootClassNames = classNames({
      [styles.root]: true,
      [styles.selected]: this.props.selected,
    });
    const linkClassNames = classNames({
      [styles.link]: true,
      [styles.hidden]: this.state.timestamp === 0,
    });
    const changeClassNames = classNames({
      [styles.change]: true,
      [this.state.change >= 0 ? styles.gain : styles.loss]: true,
    });
    const lastUpdateString =
      this.state.timestamp ? `Last update ${Moment.unix(this.state.timestamp).format()}` : '';

    return (
      <div className={rootClassNames}>
        <Websocket url={`${config.apiUrl}/quote/${this.props.symbol}`} onMessage={this.handleData}/>
        <a
          className={linkClassNames}
          href="#"
          title={lastUpdateString}
          onClick={this.onClick}
        >
          <div className={styles.symbol}>{this.props.symbol}</div>
          <div className={styles.name}>{this.state.securityName.replace('&amp;', '&')}</div>
          <div className={styles.price}>{price}</div>
          <div className={changeClassNames}>{change}%</div>
        </a>
      </div>
    );
  }
}

// prop definition
Ticker.propTypes = {
  symbol: React.PropTypes.string.isRequired,
  selectTicker: React.PropTypes.func.isRequired,
  selected: React.PropTypes.bool,
};

// prop defaults
Ticker.defaultProps = {
  selected: false,
};
