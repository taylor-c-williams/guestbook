import React from 'react';
import Header from '../components/Header/Header';
import EntryForm from '../components/EntryForm/EntryForm';
import EntryList from '../components/EntryList/EntryList';
import { EntryProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      {/* <Header /> */}
      sup
      <EntryForm />
      <EntryList />
    </EntryProvider>
  );
}
