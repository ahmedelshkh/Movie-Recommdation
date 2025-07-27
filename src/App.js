import logo from './logo.svg';
import './App.css';
import HeaderSec from './compontents/HeaderSec';
import { Routes, Route} from 'react-router-dom';
import MessageSec from './compontents/MessageSec';
import PopularSec from './compontents/PopularSec/PopularSec';


function App() {
  return (
    <div className="App">
      <HeaderSec />
      <Routes>
        <Route path='/' element={<MessageSec />} />
        <Route path='/' element={<PopularSec />} />
      </Routes>
      <ul className='pages'>
        <li>
          <a className='selected' herf='#'>1</a>
        </li>
        <li>
          <a herf='#'>2</a>
        </li>
        <li>
          <a herf='#'>3</a>
        </li>
        <li>
          <a herf='#'>4</a>
        </li>
        <li>
          <a herf='#'>...</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
