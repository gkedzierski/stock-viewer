// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';

// Import stylesheets
import styles from './FilterBox.scss';

// Export component class
export default class FilterBox extends Component {
  handleChange() {
    this.props.onUserInput(
      this.refs.filterQueryInput.value
    );
  }

  render() {
    return (
      <div className={styles.root}>
        <input
          className={styles.field}
          type="text"
          ref="filterQueryInput"
          value={this.props.query}
          onChange={this.handleChange.bind(this)}
          placeholder="Find ticker..."
          autoFocus
        />
      </div>
    );
  }
}

FilterBox.propTypes = {
  query: React.PropTypes.string.isRequired,
  onUserInput: React.PropTypes.func.isRequired,
};
