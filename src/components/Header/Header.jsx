import React from 'react';
import { useUser } from '../../hooks/useUser';
import './header.css';

export default function Header() {
  const { user } = useUser();
  return <header>{user ? `Signing as  ${user}` : null}</header>;
}
