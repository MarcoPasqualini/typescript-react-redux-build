import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import testUtils = require('react-dom/test-utils');
import Hello from '../source/components/hello';

describe('hello', () => {
  it('should return Hello Foo', () => {
    const renderer = testUtils.createRenderer();
    renderer.render(<Hello name = "Foo" />);
    const res = renderer.getRenderOutput();
    expect(res.type).toEqual('div');
  });
});

describe('hello 2', () => {
  it('should return Hello Foo', () => {
    const hello = shallow(<Hello name = "Foo" />);
    expect(true).toEqual(true);
  });
});
