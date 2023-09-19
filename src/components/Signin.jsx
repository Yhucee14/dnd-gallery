import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();
  const navigate = useNavigate(); 

  const onSubmit = async (e) => { // Make the onSubmit function asynchronous
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      try {
        await signInUser(email, password); // Use await to wait for the sign-in to complete
        // Redirect to the Home component after successful sign-in
        navigate('/home'); // Use the navigate function to redirect to the Home component
      } catch (error) {
        // Handle sign-in error, if needed
        console.error('Sign-in error:', error);
      }
    }
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email)
        .then(() => {
          emailRef.current.value = "";
        })
        .catch((error) => {
          // Handle forgot password error, if needed
          console.error('Forgot password error:', error);
        });
    }
  };

  return (
    <div className="flex flex-col py-2">
      <form onSubmit={onSubmit} className="form flex flex-col py-2 bg-gray-500">
        <h1 className="flex justify-center text-[35px] text-bold text-white"> Login </h1>
        <div className="flex flex-col py-1 xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
          <label className="py-3 text-bold text-white">Enter Your Email</label>
          <input placeholder="Email" type="email" ref={emailRef} className="text-black px-3 py-2 border-1 border-slate-950 rounded-[20px]" />
        </div>
        <div className="flex flex-col xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
          <label className="py-3 text-bold text-white">Enter Your Password</label>
          <input placeholder="Password" type="password" ref={psdRef} className="text-black px-3 py-2 rounded-[20px] " />
        </div>
        <div className="py-3 flex justify-center mt-3">
          <button type="submit" className="black_btn font-bold w-full">Sign In</button>
        </div>
        <button onClick={forgotPasswordHandler} className="pt-3"> <p className="text-white">Forgot Password?</p></button>
      </form>
    </div>
  );
};

export default Signin;
