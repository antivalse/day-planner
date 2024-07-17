/**
 * Login form component
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const [user, setUser] = useState("");

  // create navigate instance
  const navigate = useNavigate();

  // Form submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      navigate(`/today/${user}`, { replace: true });
    }, 2000);
  };

  return (
    <>
      <h1>Log in to start planning your day</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            required
            onChange={(e) => setUser(e.target.value.trim())}
            value={user}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" required />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default LogInForm;
