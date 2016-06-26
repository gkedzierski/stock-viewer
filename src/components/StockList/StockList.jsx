// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import components
import FilterBox from 'components/FilterBox';
import Ticker from 'components/Ticker';

// Import data
import tickers from 'data/tickers';

// Import actions
import * as actions from 'store/actions';

// Import stylesheets
import styles from './StockList.scss';

// Export component class
class StockList extends Component {
  constructor(props) {
    super(props);

    this.filterByQuery = this.filterByQuery.bind(this);

    this.state = {
      filterQuery: '',
    };
  }

  handleUserInput(queryValue) {
    this.setState({
      filterQuery: queryValue,
    });
  }

  filterByQuery(value) {
    return value.indexOf(this.state.filterQuery.toUpperCase().trim()) !== -1;
  }

  render() {
    return (
      <div className={styles.root}>
        <FilterBox query={this.state.filterQuery} onUserInput={this.handleUserInput.bind(this)}/>
        <div className={styles.list}>
          { tickers.filter(this.filterByQuery).map(symbol =>
            <Ticker
              key={symbol}
              symbol={symbol}
              selected={symbol === this.props.selectedTicker}
              selectTicker={this.props.actions.selectTicker}
            />
          )}
        </div>
      </div>
    );
  }
}

// prop definition
StockList.propTypes = {
  selectedTicker: React.PropTypes.string,
  actions: React.PropTypes.object,
};

function mapState(state) {
  return {
    selectedTicker: state.selectedTicker,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const Connector = connect(mapState, mapDispatch)(StockList);

export default Connector;
