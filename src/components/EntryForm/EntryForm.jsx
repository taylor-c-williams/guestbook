import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useEntries } from '../../hooks/useEntries';
import './entry-form.css';

export default function EntryForm() {
  const [guestEntry, setGuestEntry] = useState('');
  // const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  // const newUserInput = (
  //   <input
  //     id="name"
  //     value={name}
  //     type="text"
  //     placeholder="Enter your Name"
  //     onChange={(e) => setName(e.target.value)}
  //   />
  // );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!guestEntry) return;
  //   // setUser(name);
  //   setEntries([...entries, { user, message: guestEntry }]);
  //   setGuestEntry('');
  // };

  return (
    <section className="entry-form">
      <fieldset>
        <form>
          Hello, {user}
          <textarea
            id="guestEntry"
            value={guestEntry}
            placeholder="Write your message here"
            onChange={(e) => setGuestEntry(e.target.value)}
          />
          <button type="submit">Submit!</button>
        </form>
      </fieldset>
    </section>
  );
}
