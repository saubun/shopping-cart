import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Home() {
	return (
		<>
			<Jumbotron>
				<h3>Welcome to Egg Cart</h3>
				<p>
					Welcome, click the cart link in the navbar or the button below to get
					started.
				</p>
				<Button href="/cart">Go To Your Cart!</Button>
			</Jumbotron>
		</>
	);
}
