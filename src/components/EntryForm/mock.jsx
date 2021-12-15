import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestBook.css';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  function updateGuestName() {
    if (!guestEntry) return;
    // set username here
    setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestName();
  };

  const guestNameInput = (
    <input
      id="guestName"
      type="text"
      placeholder="Guest Name..."
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );

  const displayMessage = user
    ? `Thanks for Signing ${user}!`
    : 'Please Sign the Guestbook!';

  return (
    <>
      {displayMessage}
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}

        <textarea
          id="guestEntry"
          value={guestEntry}
          placeholder="Your Entry!"
          onChange={(e) => setGuestEntry(e.target.value)}
        />

        <button className="button" type="submit">
          Sign 🖊️
        </button>
        {user && (
          <button
            type="button"
            onClick={() => {
              setUser('');
              setName('');
            }}
          >
            Not {user} ❓
          </button>
        )}
      </form>
    </>
  );
}
