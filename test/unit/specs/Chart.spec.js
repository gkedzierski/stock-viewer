import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Chart from 'components/Chart';
import store from 'store';

describe('Chart', () => {
  it('should initialize props correctly', () => {
    let chartComponent = TestUtils.renderIntoDocument(<Chart data={[]}/>);

    expect(chartComponent.props.data).to.exist;
  });
});
