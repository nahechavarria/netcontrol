import { client } from './client';

export const read = (endpoint) => {
	const result = client('GET', endpoint);
	return result;
};
