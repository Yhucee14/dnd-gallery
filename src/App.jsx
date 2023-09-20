import { useUserContext } from "./context/userContext"
import Home from '../src/components/Home'
import Auth from '../src/components/Auth'
import Signin from '../src/components/Signin';
import Signup from '../src/components/Signup';
import './index.css'; 
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #36D7B7; 
`;


const App = () => {
  const { loading, user } = useUserContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader
          css={override}
          size={150}
          color={'green'}
          loading={true}
        />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={user ? <Home /> : <Auth />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App
