import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Přihlašovací údaje:', { username, password });
    onLogin();
  };

  return (
    <div>
      <h2>Přihlášení</h2>
      <input type="text" placeholder="Uživatelské jméno" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Přihlásit</button>
    </div>
  );
};

export default Login;
