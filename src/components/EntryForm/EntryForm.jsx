import React from 'react';
import './entry-form.css';

export default function EntryForm() {
  return (
    <section className="entry-form">
      <fieldset>
        <form>
          <input value="dingus" />
          <input value="brownunder" />
          <input type="submit" />
        </form>
      </fieldset>
    </section>
  );
}
