import Link from 'next/link';

import { Nav, Navbar, Image } from 'react-bootstrap';
import styles from '../styles/etc.module.css';

const Navigation = () => {
    return (
        <Navbar variant='light' expand='lg' className="sticky-top">
            <Navbar.Brand>
                <Link 
                    href="/"
                >
                    <a><Image src="/Logo.svg" alt="Logo" width="40px" className={styles.logo}/></a>
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="nav"/>
            <Navbar.Collapse id="nav">
                <Nav className="font-weight-bold ml-auto text-center">
                    <Nav.Item className="nav-link">
                        <Link href="/portfolio">Portfolio</Link>
                    </Nav.Item>

                    <Nav.Item className="nav-link">
                        <Link href="/resume">Resume</Link>
                    </Nav.Item>

                    <Nav.Item className="nav-link">
                        <Link href="/about">About</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;