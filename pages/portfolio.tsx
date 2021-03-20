import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PortfolioPageContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Portfolio Page</h1>
                </Col>
            </Row>
        </Container>
    )
}

const PortfolioPage = () => {
    return (
        <>
            <Metadata title="Portfolio"/>
            <Navigation/>
            <PortfolioPageContent/>
            <Footer/>
        </>
    )
}

export default PortfolioPage;