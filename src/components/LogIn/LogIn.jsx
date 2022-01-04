import { useUser } from '../../hooks/useUser';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function LogIn() {
  const history = useHistory();
  const location = useLocation();
  const { user, setUser } = useUser();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = (username, password) => {
      const loginSuccessful =
        username === process.env.AUTH_USERNAME &&
        password === process.env.AUTH_PASSWORD;
      if (loginSuccessful) setUser(username);
      return loginSuccessful;
    };
    const loginWasSuccessful = login(usernameInput, passwordInput);
    return loginWasSuccessful
      ? history.replace(from)
      : setError('Login Unsuccess');
  };

  // TODO
  // can I put setUsername and setPassword in User Context?
  // can I put setUsername and setPassword in User Context?
  // can I put setUsername and setPassword in User Context?
  return (
    <div>
      <fieldset className="w-1/4 border p-4">
        <legend>Sign In</legend>
        <form
          className="grid grid-cols-[1fr_2fr] grid-rows-3"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username" className="self-center text-right">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="border p-2 m-3"
            required
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <label htmlFor="password" className="self-center text-right">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="border p-2 m-3"
            required
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button
            type="submit"
            className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-red-500 font-bold">
          Error message goes here
        </p>
      </fieldset>
    </div>
  );
}
