import logo from './logo.svg';
import './App.css';
import HeaderSec from './compontents/HeaderSec';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MessageSec from './compontents/MessageSec';
import PopularSec from './compontents/PopularSec/PopularSec';


function App() {
  return (
    <div className="App">
      <HeaderSec />
      <Routes>
        <Route path='/' element={MessageSec} />
      </Routes>
      <PopularSec />
    </div>
  );
}

export default App;
