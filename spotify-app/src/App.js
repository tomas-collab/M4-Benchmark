
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import SongFooter from './component/Footer';
import SideBar from './component/SideBar';
import SingleSong from './component/SingleSong';
import Artist from './component/Artist';
import {Row,Col,Container} from 'react-bootstrap'
import Album from './component/Album';
import Home from  './component/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Row>
            <Col className="col-1 col-sidebar">
              <SideBar />
            </Col>
            <Col className="col-11 nav-bar">
              {/* <CustomNavbar /> */}
            <Route path="/" exact component={Home} />
            <Route path="/album/:id" exact component={Album} />
            <Route path="/artist" exact component={Artist} />
            </Col>
          </Row>
         
          <Row>
          <SongFooter/>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;