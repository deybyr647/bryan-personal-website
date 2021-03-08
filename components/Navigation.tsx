import Link from 'next/link';
import Image from 'next/image';

import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar variant='light' expand='lg'>
            <Navbar.Brand>
                <Image src="/Logo.svg" width={50} height={50}/>
                &nbsp; <Link href="/">Bryan Bonilla Garay</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav"/>
            <Navbar.Collapse id="nav">
                <Nav className="font-weight-bold ml-auto">
                    <Nav.Link as={Link} href='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link as={Link} href='/resume'>Resume</Nav.Link>
                    <Nav.Link as={Link} href='/about'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;