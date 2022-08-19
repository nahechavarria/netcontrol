import { client } from './client';

export const read = (endpoint, payload) => {
	const result = client('GET', endpoint, payload);
	return result;
};
