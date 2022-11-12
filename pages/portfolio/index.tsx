import { Container, Row, Col, Jumbotron, Image, Card, CardColumns } from 'react-bootstrap';

import Metadata from '../../components/Metadata';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface ProjectContainerProps {
    children: React.ReactNode
}

const ProjectCard = () => {
    return (
        <Card>

        </Card>
    )
}

const ProjectContainer = ({children}: ProjectContainerProps) => {
    return (
        <Row>
            <Col>
                <CardColumns>
                    {children}
                </CardColumns>
            </Col>
        </Row>
    )
}

const PortfolioPageContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Jumbotron className="text-center">
                        <h1>My Projects</h1>
                    </Jumbotron>
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