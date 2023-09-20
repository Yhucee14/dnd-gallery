import { useRef, useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import { Link } from 'react-router-dom';

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null); // State to store the error message

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      try {
        await signInUser(email, password);
        navigate('/home');
      } catch (error) {
        // Handle sign-in error and set the error state
        setError('Invalid email or password'); // You can customize this error message
        console.error('Sign-in error:', error);
      }
    }
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email)
        .then(() => {
          emailRef.current.value = '';
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
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
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
        <button onClick={forgotPasswordHandler} className="pt-3"> <p className="text-white">Forgot Password?, click here</p></button>
       
       <Link to='/signup' className='flex justify-center py-3'>
       <button className="text-white font-bold flex justify-center">New user?, SignUp</button>
       </Link>
       
      </form>
    </div>
  );
};

export default Signin;
