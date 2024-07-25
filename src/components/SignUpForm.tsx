/**
 * Signup form component
 */

interface SignUpFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleSubmit }) => {
  return (
    <>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Create username:
          <input type="text" required />
        </label>
        <label htmlFor="password">
          Create password:
          <input type="password" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
