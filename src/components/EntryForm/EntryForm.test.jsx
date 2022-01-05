import React from 'react';
import EntryForm from './EntryForm';
import { UserContext } from '../../context/UserContext';

it('should render the Auth view', () => {
  const { container } = (
    <UserContext>
      <EntryForm />
    </UserContext>
  );
  expect(container).toMatchSnapshot();
});
