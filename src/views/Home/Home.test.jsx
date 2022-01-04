import React from 'react';
import Home from './Home';
import { UserContext } from '../../context/UserContext';

it('should render the Home view', () => {
  const { container } = (
    <UserContext>
      <Home />
    </UserContext>
  );
  expect(container).toMatchSnapshot();
});
