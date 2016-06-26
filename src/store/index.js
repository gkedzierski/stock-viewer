// stock-viewer
// A stock viewing app.
//
// Copyright (c) 2016 Greg Kedzierski
// http://gregkedzierski.com
// greg@gregkedzierski.com

import { createStore } from 'redux';
import stocksApp from './reducers/stocksApp';

export default createStore(stocksApp);
