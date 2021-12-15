import React from 'react';
import './entry-form.css';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useEntries } from '../../hooks/useEntries';

export default function EntryForm() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  console.log(user, 'user');
  console.log(guestEntry, 'guest entry');
  console.log(entries, 'entries');
  console.log(name, 'name');

  const newUserInput = (
    <input
      id="name"
      value={name}
      type="text"
      placeholder="Enter your Name"
      onChange={(e) => setName(e.target.value)}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestEntry) return;
    setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
    setGuestEntry('');
  };

  return (
    <section className="entry-form">
      <fieldset>
        <form onSubmit={handleSubmit}>
          {user ? `Welcome ${name}` : newUserInput}

          <textarea
            id="guestEntry"
            value={guestEntry}
            placeholder="Write your message here"
            onChange={(e) => setGuestEntry(e.target.value)}
          />
          <button
            type="submit"
            // onClick={() => {
            //   setUser('');
            //   setName('');
            // }}
          >
            Submit!
          </button>
        </form>
      </fieldset>
    </section>
  );
}
