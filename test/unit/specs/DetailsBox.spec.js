import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import DetailsBox from 'components/DetailsBox';
import store from 'store';

describe('DetailsBox', () => {
  it('should initialize props correctly', () => {
    let detailsBoxComponent = TestUtils.renderIntoDocument(<DetailsBox symbol="APPL"/>);

    expect(detailsBoxComponent.props.symbol).to.exist;
  });
});
