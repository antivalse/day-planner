import SignUpForm from "../components/SignUpForm";

interface NewUser {
  username: string;
  password: string;
}

function SignUpPage() {
  const addUser = async (user: NewUser) => {
    try {
        await 
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("something unexpected happened");
      }
    }
  };
  return (
    <>
      <h1>Create account</h1>
      <SignUpForm />
    </>
  );
}

export default SignUpPage;
