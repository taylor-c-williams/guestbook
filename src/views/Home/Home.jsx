import React from 'react';
import Header from '../../components/Header/Header';
import Guestbook from '../../views/Guestbook/Guestbook';
import { EntryProvider } from '../../context/EntryContext';

export default function Home() {
  return (
    <main>
      <Header />
      <Guestbook />
    </main>
  );
}
