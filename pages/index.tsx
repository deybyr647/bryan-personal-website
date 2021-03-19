import { Container, Row, Col, Jumbotron, Image, Card } from 'react-bootstrap';
import styles from '../styles/Landing.module.css';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <Container fluid className="my-3">
      <Row>
        <Col md={12} lg={4} xl={4} className="mb-2">
          <Card className="shadow text-center">
            <Card.Img src="/bryan.jpg"/>

            <Card.Body>
              <Card.Title>A Little Intro...</Card.Title>
              <Card.Text>
              Hey there! Welcome to my site!
              Make yourself at home while you grab some water. 
              This is my online portfolio, and is home to various things, from my resume and contact information,
              to a variety of personal projects I've invested time in. 
              I'm always willing to collaborate, and if you are too, don't hesitate to contact me! I don't bite, usually...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={4} xl={4} className="d-flex align-items-center order-first order-lg-0">
            <Jumbotron className="text-center shadow">
              <Image src="/bryan.jpg" className="w-100"/>
              <h3 className="mt-4">Bryan Bonilla Garay</h3>
              <p>Aspiring Computer Engineer</p>
            </Jumbotron>
        </Col>

        <Col md={12} lg={4} xl={4} className="mb-2">
          <Card className="shadow text-center">
            <Card.Img src="/bryan.jpg"/>

            <Card.Body>
              <Card.Title>A Little Intro...</Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem nulla provident ducimus. Accusamus laudantium, eveniet autem veniam, fugiat, delectus itaque quas minima quibusdam quisquam ab sit praesentium distinctio cum?
              </Card.Text>
            </Card.Body>
          </Card>
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
