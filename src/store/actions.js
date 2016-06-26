// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

// action types
export const SELECT_TICKER = 'SELECT_TICKER';

// action creators
export const selectTicker = (symbol) => ({ type: SELECT_TICKER, symbol });
