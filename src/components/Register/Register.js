import { useState } from 'react';

import { useUserCreator } from '../../hooks/useUserCreator';
import { useUsers } from '../../hooks/useUsers';

import './Register.css';

export const Register = () => {
	const initialValues = {
		user: '',
		email: '',
		password: '',
		repeatPwd: '',
	};

	const [data, setData] = useState(initialValues);
	const { getUsers } = useUsers();
	const { userCreator, creating, error } = useUserCreator(getUsers);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = (e) => {
		e.preventDefault();

		if (creating) return alert('Creating');
		if (error) return alert(error);

		if (!data.user || !data.email || !data.password || !data.repeatPwd)
			return alert('Missing fields to entry');

		if (data.password !== data.repeatPwd) return alert('Password dont match');

		userCreator(data)
			.then(() => console.log('User created successfully'))
			.catch((e) => console.log(e));

		setData(initialValues);
	};

	return (
		<div className="container">
			<div className="logo"></div>
			<div className="title">
				<p>REGISTER</p>
			</div>
			<div className="inputs">
				<input
					type="text"
					name="user"
					placeholder="Username"
					tabIndex={1}
					value={data.user}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					tabIndex={2}
					value={data.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					tabIndex={3}
					value={data.password}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="repeatPwd"
					placeholder="Repeat Password"
					tabIndex={4}
					value={data.repeatPwd}
					onChange={handleChange}
				/>
			</div>
			<div className="buttons">
				<button onClick={handleClick}>Register</button>
				<button>Atras</button>
			</div>
		</div>
	);
};
