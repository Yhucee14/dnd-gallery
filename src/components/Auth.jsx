import { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { useUserContext } from "../context/userContext"; // Import your user context

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  
  // Initialize the navigate function
  const navigate = useNavigate();

  // Access user context to check if the user is authenticated
  const { user } = useUserContext();

  // Check if the user is authenticated and redirect to Home if needed
  useEffect(() => {
    // Assuming user is an object or value that indicates authentication status
    if (user) {
      navigate('/home');
    }
  }, [navigate, user]);

  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "New User?, Click here" : "Already have an account?, Click here to login."}
      </p>
    </div>
  );
};

export default Auth;
