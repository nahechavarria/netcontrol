import { client } from './client';

export const remove = (endpoint) => {
	const result = client('DELETE', endpoint);
	return result;
};
