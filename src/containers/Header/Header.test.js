import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { findTodaysDate, formatTodaysDate, findDay  } from '../../utils/helpers';

jest.mock('../../utils/helpers')


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header
      findTodaysDate={findTodaysDate}
      formatTodaysDate={formatTodaysDate}
      findDay={findDay} 
    />)
  });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
});
