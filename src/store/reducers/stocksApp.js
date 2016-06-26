// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// import action types
import { SELECT_TICKER } from '../actions';

// define initial state
const initialState = {
  selectedTicker: null,
};

// define reducer
function stocksApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_TICKER:
      return Object.assign({}, state, {
        selectedTicker: action.symbol,
      });

    default:
      return state;
  }
}

export default stocksApp;
