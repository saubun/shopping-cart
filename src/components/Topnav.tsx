import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';

export default function Topnav() {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<Navbar bg="primary" variant="dark" expand="lg">
			<Navbar.Brand>Egg Cart</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/cart">Cart</Nav.Link>
				</Nav>
				<Form inline onSubmit={(e: any) => handleSubmit(e)}>
					<Button type="submit" variant="secondary">
						Press me
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}
