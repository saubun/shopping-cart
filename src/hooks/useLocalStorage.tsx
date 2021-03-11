import { useState } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Checks if the item already exists
			const item = window.localStorage.getItem(key);

			// Returns the item if it exists, returns default value if not
			return item ? JSON.parse(item) : defaultValue;
		} catch (error) {
			// Returns the default value on error
			return defaultValue;
		}
	});

	// Function to change the value
	const setValue = (value: T): void => {
		try {
			// If the value is a function, call it as one
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			// Get the value to return
			setStoredValue(valueToStore);

			// Set item in local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
}
