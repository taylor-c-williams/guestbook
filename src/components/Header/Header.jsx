import React from 'react';
import { useUser } from '../../hooks/useUser';
import './header.css';

export default function Header() {
  const { user } = useUser();
  return <header>Header Hi my name is {user}</header>;
}
