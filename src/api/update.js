import { client } from './client';

export const update = (endpoint, payload) => {
	const result = client('PUT', endpoint, payload);
	return result;
};
