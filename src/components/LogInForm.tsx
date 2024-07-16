/**
 * Login form component
 */

interface LogInFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LogInForm: React.FC<LogInFormProps> = ({ handleSubmit }) => {
  return (
    <>
      <h1>Log in to start planning your day</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input type="text" required />
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
