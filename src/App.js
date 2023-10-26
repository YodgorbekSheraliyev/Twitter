import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Profile from './components/profile/profile';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
