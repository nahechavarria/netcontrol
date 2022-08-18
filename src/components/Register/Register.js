import { useState } from 'react';

import { useUserCreator } from '../../hooks/useUserCreator';

import './Register.css';

export const Register = () => {
	const initialValues = {
		user: '',
		email: '',
		password: '',
		repeatPwd: '',
	};

	const [user, setUser] = useState(initialValues);
	const { userCreator, creating, error } = useUserCreator();

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = (e) => {
		e.preventDefault();

		if (creating) return alert('Creating');
		if (error) return alert(error);

		if (!user.user || !user.email || !user.password || !user.repeatPwd)
			return alert('Missing fields to entry');

		if (user.password !== user.repeatPwd) return alert('Password dont match');

		userCreator(user)
			.then(() => console.log('User created successfully'))
			.catch((e) => console.log(e));

		setUser(initialValues);
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
					value={user.user}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					tabIndex={2}
					value={user.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					tabIndex={3}
					value={user.password}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="repeatPwd"
					placeholder="Repeat Password"
					tabIndex={4}
					value={user.repeatPwd}
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
