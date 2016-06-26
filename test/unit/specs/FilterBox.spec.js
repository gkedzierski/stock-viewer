import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import FilterBox from 'components/FilterBox';
import store from 'store';

describe('FilterBox', () => {
  it('should initialize props correctly', () => {
    let filterBoxComponent = TestUtils.renderIntoDocument(<FilterBox query="" onUserInput={() => null}/>);

    expect(filterBoxComponent.props.query).to.exist;
    expect(filterBoxComponent.props.onUserInput).to.exist;
  });
});
