import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Ticker from 'components/Ticker';
import store from 'store';

describe('Ticker', () => {
  it('should initialize props correctly', () => {
    let tickerComponent = TestUtils.renderIntoDocument(<Ticker symbol="APPL" selectTicker={() => null} selected={false} />);

    expect(tickerComponent.props.symbol).to.exist;
    expect(tickerComponent.props.selectTicker).to.exist;
    expect(tickerComponent.props.selected).to.exist;
  });
});
