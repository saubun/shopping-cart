import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import Cart from './Cart';
import Home from './Home';
import Topnav from './Topnav';

export default function App() {
	return (
		<>
			<Topnav />
			<Container className="mt-4">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
				</Switch>
			</Container>
		</>
	);
}
