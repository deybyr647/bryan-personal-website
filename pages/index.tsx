import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello World!</h1>
        </Col>
      </Row>
    </Container>
  )
}

const LandingPage = () => {
  return (
    <>
      <Metadata title="Home"/>
      <Navigation/>
      <Landing/>
      <Footer/>
    </>
  )
}

export default LandingPage;
