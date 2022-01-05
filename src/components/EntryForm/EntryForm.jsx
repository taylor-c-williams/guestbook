import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useEntries } from '../../hooks/useEntries';
import './entry-form.css';

export default function EntryForm() {
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestEntry) return;
    setEntries([...entries, { name: user, message: guestEntry }]);
    setGuestEntry('');
  };

  return (
    <section className="entry-form">
      <fieldset>
        <form onSubmit={handleSubmit}>
          Hello, {user}
          <textarea
            id="guestEntry"
            placeholder="Write your message here"
            onChange={(e) => setGuestEntry(e.target.value)}
          />
          <button type="submit">Submit!</button>
        </form>
        <button onClick={() => setUser('')}> Not {user}?</button>
      </fieldset>
    </section>
  );
}
