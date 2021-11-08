import React from 'react';
import { rtlRender } from '@/tests/test-utils';
import App from './App';

it('renders without crashing', () => {
  rtlRender(<App />);
});
