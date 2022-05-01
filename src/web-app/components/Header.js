import React from 'react'
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Header = () => {
	return (
		<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-2">
		<Link href='/' passHref>
			<Navbar.Brand>School Managements</Navbar.Brand>
		</Link>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="me-auto">
				<Link href='/about' passHref>
					<Nav.Link >About</Nav.Link>
				</Link>
				<Link href='/contact' passHref>
					<Nav.Link >Contact</Nav.Link>
				</Link>
			</Nav>
			<Nav>
				<Link href='/login' passHref>
					<Nav.Link >Login</Nav.Link>
				</Link>
				<Link href='/register' passHref>
					<Nav.Link >Register</Nav.Link>
				</Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}

export default Header
