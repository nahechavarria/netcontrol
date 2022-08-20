import { useState } from 'react';

import { read } from '../api';

export const useUsers = () => {
	const [users, setUsers] = useState([{}]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getUsers = async () => {
		try {
			setLoading(true);
			const saveUsers = await read('users');
			setUsers(saveUsers);
			setLoading(false);
			setError(null);
			console.log(saveUsers);
		} catch (error) {
			setError(error);
			setLoading(false);
			setUsers([{}]);
		}
	};

	// useEffect(() => {
	// 	getUsers();
	// }, []);

	return { getUsers, users, loading, error };
};
