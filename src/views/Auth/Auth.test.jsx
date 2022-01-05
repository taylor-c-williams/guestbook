import React from 'react';
import Auth from './Auth';
import { UserContext } from '../../context/UserContext';

it('should render the Home view', () => {
  const { container } = (
    <UserContext>
      <Auth />
    </UserContext>
  );
  expect(container).toMatchSnapshot();
});
