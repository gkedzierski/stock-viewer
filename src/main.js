// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// Import libraries
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import Redux store
import store from 'store';

// Import components
import App from 'components/App';

// Import stylesheets
import 'stylesheets/base.scss';

// Render to DOM
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
