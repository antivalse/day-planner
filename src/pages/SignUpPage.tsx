/**
 * Sign up page
 */

import SignUpForm from "../components/SignUpForm";
import { registerUser } from "../services/UserAPI";

interface NewUser {
  username: string;
  password: string;
}

function SignUpPage() {
  // const [usernameInput, setUsernameInput] = useState("");
  // const [passwordInput, setPasswordInput] = useState("");
  const addUser = async (user: NewUser) => {
    try {
      await registerUser(user);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("something unexpected happened");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
    addUser({ username: "Georgina", password: "Barbson" });
  };
  return (
    <>
      <h1>Create account</h1>
      <SignUpForm handleSubmit={handleSubmit} />
    </>
  );
}

export default SignUpPage;
