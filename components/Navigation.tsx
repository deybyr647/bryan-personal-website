import Link from 'next/link';

import { Nav, Navbar, Image } from 'react-bootstrap';
import styles from '../styles/etc.module.css';

const Navigation = () => {
    return (
        <Navbar variant='light' expand='lg' className="sticky-top mb-4">
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
                    <Link href="/portfolio">
                        <a className="nav-link">Portfolio</a>
                    </Link>

                    <Link href="/resume">
                        <a className="nav-link">Resume</a>
                    </Link>

                    <Link href="/about">
                        <a className="nav-link">About</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;