import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { UserContext } from '../../context/UserContext';

it('should render the Home view', () => {
  const { container } = (
    <UserContext>
      <Header />
    </UserContext>
  );
  expect(container).toMatchSnapshot();
});
