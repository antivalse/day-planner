const SignUpForm = () => {
  return (
    <>
      <h1>Create account</h1>
      <form id="signup-form">
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
