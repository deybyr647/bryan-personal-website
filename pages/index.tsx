import { Container, Row, Col, Jumbotron, Image, Card, ListGroup, Accordion, Button } from 'react-bootstrap';
import styles from '../styles/Landing.module.css';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <Container fluid className="my-3">
      <Row>
        <Col md={12} lg={4} xl={4} className="mb-2">
          <Card className="shadow text-left">
            <Card.Img src="/bryan2.webp" alt="Bryan"/>

            <Card.Body>
              <Card.Title className="text-center">A Little Intro...</Card.Title>

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

        <Col md={12} lg={4} xl={4} className="order-first order-lg-0">
            <Jumbotron className="text-center shadow">
              <Image src="/bryan.jpg" className="w-100 rounded" alt="Bryan"/>
              <h3 className="mt-4">Bryan Bonilla Garay</h3>
              <p>Aspiring Computer Engineer</p>
            </Jumbotron>
        </Col>

        <Col md={12} lg={4} xl={4} className="mb-2">
          <Card className="shadow text-left">
            <Card.Img src="/hardware.jpg" alt="Bryan"/>

            <Card.Body>
              <Card.Title className="text-center">Hardware: What I'm All About</Card.Title>

              <Card.Text>
                Spoiler Alert! System & Hardware programming is what I'm all about!
                Here are some of my latest projects at a glance. Feel free to check
                them out, along with all my other projects in the Portfolio page!
              </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Button} variant="info" eventKey="0">
                      Radar
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                      <>
                        <Card.Img src="/Radar.jpg"/>

                        <Card.Body>
                          <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil molestias ratione aspernatur ea. Inventore nemo fugiat officia necessitatibus ab perferendis, debitis recusandae pariatur vel. Consequatur fuga perspiciatis sapiente blanditiis veritatis.
                          </Card.Text>
                        </Card.Body>
                      </>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </ListGroup.Item>

              <ListGroup.Item>
                <Accordion>
                  <Card>
                      <Accordion.Toggle as={Button} variant="info" eventKey="0">
                        Radar
                      </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                      <>
                        <Card.Img src="/Radar.jpg"/>

                        <Card.Body>
                          <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil molestias ratione aspernatur ea. Inventore nemo fugiat officia necessitatibus ab perferendis, debitis recusandae pariatur vel. Consequatur fuga perspiciatis sapiente blanditiis veritatis.
                          </Card.Text>
                        </Card.Body>
                      </>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </ListGroup.Item>

              <ListGroup.Item>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Button} variant="info" eventKey="0">
                        Radar
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                      <>
                        <Card.Img src="/Radar.jpg"/>

                        <Card.Body>
                          <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil molestias ratione aspernatur ea. Inventore nemo fugiat officia necessitatibus ab perferendis, debitis recusandae pariatur vel. Consequatur fuga perspiciatis sapiente blanditiis veritatis.
                          </Card.Text>
                        </Card.Body>
                      </>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </ListGroup.Item>
            </ListGroup>
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
