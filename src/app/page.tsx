'use client';

import React, { useState } from 'react';
import Login from './Components/Login/Login';

export default function Home() {
  const [user, setUser] = useState(localStorage.getItem('username'));

  const handleLogin = (username: string) => {
    setUser(username);
  };

  return (
    <>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Bem-vindo, {user}!</h2>
        </div>
      )}
    </>
  );
}
