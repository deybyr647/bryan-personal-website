import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPageContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>About Page</h1>
                </Col>
            </Row>
        </Container>
    )
}

const AboutPage = () => {
    return (
        <>
            <Metadata title="About"/>
            <Navigation/>
            <AboutPageContent/>
            <Footer/>
        </>
    )
}

export default AboutPage;