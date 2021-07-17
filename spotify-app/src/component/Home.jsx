import { Container, Row, Col } from "react-bootstrap";

import SingleSong from "./SingleSong";

const Home = () => {
  return (
    <Container fluid className="home-page">
     <Row>
         <Col>
         <Row className="text-white mt-4 mb-2 categories">
          <h3>#THROWBACKTHURSDAY</h3>
        </Row>
         <SingleSong genres="rock" />
         <Row className="text-white mt-5 mb-2 categories">
          <h3>Classifiche</h3>
        </Row>
         <SingleSong genres="summer" />
         <SingleSong genres="summer" />
         
         </Col>
     </Row>
    </Container>
  );
};

export default Home;