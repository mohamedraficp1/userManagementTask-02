import './App.css';
import {Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Dashboard />} /> 
       <Route path="/signup" element={ <SignUp />} /> 
       <Route path="/login" element={<Login />} /> 
    </Routes >
    </div>
  );
}

export default App;
