import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useEntries } from '../../hooks/useEntries';
import './entry-form.css';

export default function EntryForm() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();

  // const newUserInput = (
  //   <input
  //     id="name"
  //     value={name}
  //     type="text"
  //     placeholder="Enter your Name"
  //     onChange={(e) => setName(e.target.value)}
  //   />
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestEntry) return;
    // setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
    setGuestEntry('');
  };

  return (
    <section className="entry-form">
      <fieldset>
        <form onSubmit={handleSubmit}>
          {/* {user ? 
          `sup ${user}` 
          : newUserInput} */}
          Hello, {user}
          <textarea
            id="guestEntry"
            value={guestEntry}
            placeholder="Write your message here"
            onChange={(e) => setGuestEntry(e.target.value)}
          />
          <button type="submit">Submit!</button>
          {user ? (
            <button
              onClick={() => {
                setUser('');
                setName('');
              }}
            >
              Not {user}? Log Out!
            </button>
          ) : null}
        </form>
      </fieldset>
    </section>
  );
}
