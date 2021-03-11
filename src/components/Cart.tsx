import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
	const [items, setItems] = useLocalStorage('items', ['']);
	const [itemToAdd, setItemToadd] = useState('');
	const [itemPrice, setItemPrice] = useState('');

	// Gets item to be added to the array
	const handleItemChange = (e: any) => {
		setItemToadd(e.target.value);
	};

	// Gets price to be added to the array
	const handlePriceChange = (e: any) => {
		setItemPrice(e.target.value);
	};

	// Adds a new item to the array and updates localstorage
	const addItem = (e: any) => {
		e.preventDefault();

		// Defines new item to add with a unique key
		const newItem: Item = {
			name: itemToAdd,
			key: uuidv4(),
			price: itemPrice,
		};

		// Makes sure we're not just sending empty strings
		if (itemToAdd.length > 0) {
			setItems([...items, newItem]);
		}

		// Reset the item to add
		setItemToadd('');
		setItemPrice('');
	};

	// Removes item of that key from the array
	const deleteItem = (key: string) => {
		setItems(items.filter((item: any) => item.key !== key));
	};

	return (
		<>
			<h1>Cart</h1>
			<ListGroup>
				{items.map((item: Item) => (
					<ListGroup.Item key={item.key} className="d-flex flex-row">
						<h4 className="mr-3">{item.name}</h4>
						<p className="mr-auto text-muted">${item.price}</p>
						<Button variant="primary" onClick={() => deleteItem(item.key)}>
							Delete
						</Button>
					</ListGroup.Item>
				))}
			</ListGroup>
			<Form
				onSubmit={(e) => addItem(e)}
				className="mt-4 d-flex justify-content-center flex-column"
			>
				<Form.Control
					value={itemToAdd}
					onChange={handleItemChange}
					placeholder="item name..."
					className="mb-2"
				/>
				<Form.Control
					value={itemPrice}
					onChange={handlePriceChange}
					placeholder="item price..."
					className="mb-2"
				/>
				<Button type="submit">Add Item</Button>
			</Form>
		</>
	);
}
