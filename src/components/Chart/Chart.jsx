// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';
import Moment from 'moment';
import { CandlestickChart } from 'react-d3';

// Import stylesheets
import styles from './Chart.scss';

export default class Chart extends Component {
  render() {
    const ohlcData = [{
      values: this.props.data.map((value) => ({
        ...value,
        x: Moment.unix(value.timestamp).toDate(),
      })),
    }];

    const chartWidth = window.innerWidth - 450;

    const fillUp = () => '#35ba95';
    const fillDown = () => '#a3443e';
    const yAxisFormatter = (value) => value.toFixed(2);

    return (
      <div className={styles.root}>
        <CandlestickChart
          data={ohlcData}
          width={chartWidth}
          height={600}
          fillUp={fillUp}
          fillDown={fillDown}
          hoverAnimation={false}
          yAxisFormatter={yAxisFormatter}
          margin={ { left: 200, top: 0, right: 0, bottom: 40 } }
        />
      </div>
    );
  }
}

// prop definition
Chart.propTypes = {
  data: React.PropTypes.array,
};
