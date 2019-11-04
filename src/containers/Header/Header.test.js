import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let wrapper;

  const mockFindTodaysDate = jest.fn();
  const mockFormatTodaysDate = jest.fn();
  const mockFindDay = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header 
      
    />)
  });
});