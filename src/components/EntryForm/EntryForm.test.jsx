import React from 'react';
import { render } from '@testing-library/react';
import EntryForm from './EntryForm';
import { UserContext } from '../../context/UserContext';

it('should render the Home view', () => {
  const { container } = (
    <UserContext>
      <EntryForm />
    </UserContext>
  );
  expect(container).toMatchSnapshot();
});
