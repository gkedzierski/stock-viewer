// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';

// Import enums
import DataState from './DataState';

// Import components
import Chart from 'components/Chart';

// Import config
import config from 'config';

// Import stylesheets
import styles from './DetailsBox.scss';

export default class DetailsBox extends Component {
  constructor(props) {
    super(props);

    this.handleData = this.handleData.bind(this);

    this.ws = null;
    this.state = {
      dataState: DataState.EMPTY,
      chartData: [
        { x: 1, open: 451.69, high: 456.23, low: 435, close: 439.88 },
        { x: 2, open: 437.82, high: 453.21, low: 435.86, close: 449.83 },
      ],
    };
  }

  componentWillReceiveProps(props) {
    // close websocket connection
    if (this.ws) {
      this.ws.close();
    }

    this.setState({
      dataState: DataState.LOADING,
    });

    this.ws = new WebSocket(`${config.apiUrl}/historical/${props.symbol}`);
    this.ws.onmessage = this.handleData;
  }

  componentWillUnmount() {
    // close websocket connection
    if (this.ws) {
      this.ws.close();
    }
  }

  handleData(dataString) {
    const data = JSON.parse(dataString.data);

    this.setState({
      dataState: DataState.ACTIVE,
      chartData: data,
    });
  }

  render() {
    let componentContent = null;

    if (this.state.dataState === DataState.EMPTY) {
      componentContent = (
        <div className={styles.emptyContainer}>Select ticker to view details</div>
      );
    } else if (this.state.dataState === DataState.LOADING) {
      componentContent = (
        <div className={styles.emptyContainer}>Loading {this.props.symbol}...</div>
      );
    } else {
      componentContent = (
        <div>
          <h2 className={styles.title}>{this.props.symbol}</h2>

          <Chart data={this.state.chartData.slice(0, 60)}/>
        </div>
      );
    }

    return (
      <div className={styles.root}>
        {componentContent}
      </div>
    );
  }
}

// prop definition
DetailsBox.propTypes = {
  symbol: React.PropTypes.string,
};
