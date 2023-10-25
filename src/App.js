import { Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/feed/feed';
import Signup from './components/signup/signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
