// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import components
import StockList from 'components/StockList';
import DetailsBox from 'components/DetailsBox';
import Footer from 'components/Footer';

// Import stylesheets
import styles from './App.scss';

// Export component class
class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.sidebar}>
          <StockList/>
        </div>
        <div className={styles.chartContainer}>
          <DetailsBox symbol={this.props.selectedTicker}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

// prop definition
App.propTypes = {
  selectedTicker: React.PropTypes.string,
};

// map state to props
function mapState(state) {
  return {
    selectedTicker: state.selectedTicker,
  };
}

const Connector = connect(mapState)(App);

export default Connector;
