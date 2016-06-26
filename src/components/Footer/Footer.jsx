// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React, { Component } from 'react';

// Import stylesheets
import styles from './Footer.scss';

// Export component class
export default class Foote extends Component {
  render() {
    return (
      <footer className={styles.root}>
        <p>&copy; Copyright 2016&nbsp;
          <a className={styles.link} href="mailto:greg@gregkedzierski.com">Greg Kedzierski</a>.
            All rights reserved.
        </p>
        <p>
          Information is provided 'as is' and solely for informational purposes,
          not for trading purposes or advice, and is delayed.
        </p>
      </footer>
    );
  }
}
