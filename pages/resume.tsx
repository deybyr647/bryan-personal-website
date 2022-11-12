import { Container, Row, Col, Jumbotron, ResponsiveEmbed } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ResumeDoc = () => {
    return (
        <ResponsiveEmbed>
            <embed src="/Resume.pdf" width="100%" height="100%" type="application/pdf"/>
        </ResponsiveEmbed>
    );
}

const ResumePageContent = () => {
    return (
        <Container fluid>
            <Row className="d-flex flex-column align-items-center justify-content-center">
                <Col>
                    <Jumbotron className="text-center shadow">
                        <h2>My Resume</h2>
                    </Jumbotron>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} sm={12} lg={8} xl={6}>
                    <Jumbotron className="shadow">
                        <ResumeDoc/>
                    </Jumbotron>
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