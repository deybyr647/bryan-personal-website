import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ResumePageContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Resume Page</h1>
                </Col>
            </Row>
        </Container>
    )
}

const ResumePage = () => {
    return (
        <>
            <Metadata title="Resume"/>
            <Navigation/>
            <ResumePageContent/>
            <Footer/>
        </>
    )
}

export default ResumePage;