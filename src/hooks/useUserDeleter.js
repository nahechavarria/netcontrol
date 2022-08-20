import { useState } from 'react';

import { remove } from '../api';

export const useUserDeleter = () => {
	const [deleting, setDeleting] = useState(false);
	const [error, setError] = useState(null);

	const userDeleter = async (id) => {
		try {
			setDeleting(true);
			await remove(`users/${id}`);
			setDeleting(false);
			setError(null);
		} catch (error) {
			setError(error);
			setDeleting(false);
		}
	};

	return { userDeleter, deleting, error };
};
