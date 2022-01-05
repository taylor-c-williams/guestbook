import React from 'react';
import { useEntries } from '../../hooks/useEntries';
import './entry-list.css';

export default function EntryList() {
  const { entries } = useEntries();
  return (
    <section className="entry-list">
      <ul>
        {entries.map((entry) => {
          return (
            <li key={`${entry.name}-${entry.message}`}>
              {entry.message}
              <p>-{entry.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
