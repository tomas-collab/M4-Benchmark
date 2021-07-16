import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import SongFooter from './component/Footer';
import SongList from './component/SongList';

function App() {
  return (
    <Router>
      <Navbar/>
      <SongList/>
      <SongFooter/>
    </Router>
  );
}

export default App;
