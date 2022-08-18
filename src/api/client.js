const url = 'http://localhost:5000/api';

export const client = async (method, endpoint, payload) => {
	const options = {
		method,
		headers: {
			'Content-Type': 'application-json',
		},
	};

	if (payload) options.body = JSON.stringify(payload);

	try {
		const result = await fetch(`${url}/${endpoint}`, options);
		return result;
	} catch (error) {
		throw new Error('Error fetching data with the API');
	}
};
