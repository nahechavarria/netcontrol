import { client } from './client';

export const create = (endpoint, payload) => {
	const result = client('POST', endpoint, payload);
	return result;
};
