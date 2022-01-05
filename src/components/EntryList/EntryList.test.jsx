import React from 'react';
import { render } from '@testing-library/react';
import EntryList from './EntryList';
import { UserContext } from '../../context/UserContext';

it('should render the Home view', () => {
  const { container } = (
    <UserContext>
      <EntryList />
    </UserContext>
  );
  expect(container).toMatchSnapshot();
});
