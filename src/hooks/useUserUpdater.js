import { useState } from 'react';

import { update } from '../api';

export const useUserUpdater = (reloader) => {
	const [updating, setUpdating] = useState(false);
	const [error, setError] = useState(null);

	const userUpdater = async (id, user) => {
		try {
			setUpdating(true);
			await update(`users/${id}`, user);
			setUpdating(false);
			setError(null);
			reloader();
		} catch (error) {
			setError(error);
			setUpdating(false);
		}
	};

	return { userUpdater, updating, error };
};
