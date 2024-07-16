/**
 * Homepage
 */

import LogInForm from "../components/LogInForm";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/today", { replace: true });
    alert("form submitted");
  };

  return (
    <>
      <LogInForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Homepage;
