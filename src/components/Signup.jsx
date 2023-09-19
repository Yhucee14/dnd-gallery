import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const navigate = useNavigate(); 

  const onSubmit = async (e) => { // Make the onSubmit function asynchronous
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) {
      try {
        await registerUser(email, password, name); // Use await to wait for the registration to complete
        // Redirect to the Signin component after successful registration
        navigate('/home'); // Use the navigate function to redirect to the Home component
      } catch (error) {
        // Handle registration error, if needed
        console.error('Registration error:', error);
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit} className="form flex flex-col py-2 bg-gray-500">
        <h1 className="flex justify-center text-[35px] text-bold text-white"> New User </h1>
        <div className="flex flex-col py-1 xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
          <label className="py-3 text-bold text-white">Enter Your Email</label>
          <input
            placeholder="Email"
            type="email"
            ref={emailRef}
            className="px-3 py-2 border-1 border-slate-90 text-black rounded-[20px]"
          />
        </div>
        <div className="flex flex-col py-1 xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
          <label className="py-3 text-bold text-white">Enter Your Name</label>
          <input
            placeholder="Name"
            type="name"
            ref={nameRef}
            className="px-3 py-2 border-1 border-gray-200 text-black rounded-[20px]"
          />
        </div>
        <div className="flex flex-col xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
          <label className="py-3 text-bold text-white">Enter Your Password</label>
          <input
            placeholder="Password"
            type="password"
            ref={psdRef}
            className="text-black px-3 py-2 rounded-[20px]"
          />
        </div>
        <div className="py-3 flex justify-center mt-3">
          <button type="submit" className="pt-3 black_btn font-bold text-white">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
