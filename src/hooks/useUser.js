import { useState } from 'react';

import { read } from '../api';

export const useUser = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getUser = async (id) => {
		try {
			setLoading(true);
			const saveUser = await read(`users/${id}`);
			setUser(saveUser);
			setLoading(false);
			setError(null);
			return saveUser;
		} catch (error) {
			setError(error);
			setLoading(false);
			setUser({});
		}
	};

	return { getUser, user, loading, error };
};
