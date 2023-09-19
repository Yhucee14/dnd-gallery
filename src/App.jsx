import { useUserContext } from "./context/userContext"
import Home from '../src/components/Home'
import Auth from '../src/components/Auth'
import Signin from '../src/components/Signin';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const { loading, user } = useUserContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
