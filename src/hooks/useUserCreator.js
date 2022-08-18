import { useState } from 'react';

import { create } from '../api';

export const useUserCreator = () => {
	const [creating, setCreating] = useState(false);
	const [error, setError] = useState(null);

	const userCreator = async (user) => {
		try {
			setCreating(true);
			await create('users', user);
			setCreating(false);
			setError(null);
		} catch (error) {
			setError(error);
			setCreating(false);
		}
	};

	return { userCreator, creating, error };
};
