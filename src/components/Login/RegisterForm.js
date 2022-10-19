import { useState } from 'react';

import { useUserCreator } from '../../hooks/useUserCreator';
import { useUsers } from '../../hooks/useUsers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RegisterImg from '../../assets/images/register.svg';

import './RegisterForm.css';

export const RegisterForm = ({ state }) => {
	const defaultValues = {
		user: '',
		email: '',
		password: '',
		passwordRepeated: '',
	};

	const [user, setUser] = useState(defaultValues);
	const { getUsers } = useUsers();
	const { userCreator } = useUserCreator(getUsers);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await userCreator(user);
	};

	const handleClick = () => {
		state();
	};

	return (
		<div className="container-register">
			<form action="" className="sign-up-form" onSubmit={handleSubmit}>
				<h2 className="title">Sign up</h2>

				<div className="input-field">
					<i>
						<FontAwesomeIcon icon="fa-user" />
					</i>
					<input
						type="text"
						name="user"
						placeholder="Username"
						value={user.user}
						onChange={handleChange}
					/>
				</div>
				<div className="input-field">
					<i>
						<FontAwesomeIcon icon="fa-envelope" />
					</i>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={user.email}
						onChange={handleChange}
					/>
				</div>
				<div className="input-field">
					<i>
						<FontAwesomeIcon icon="fa-lock" />
					</i>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={user.password}
						onChange={handleChange}
					/>
				</div>
				<div className="input-field">
					<i>
						<FontAwesomeIcon icon="fa-lock" />
					</i>
					<input
						type="password"
						name="passwordRepeated"
						placeholder="Repeat Password"
						value={user.passwordRepeated}
						onChange={handleChange}
					/>
				</div>

				<input type="submit" value="Register" className="btn solid" />
				<p className="social-text">Or sign in with social platforms</p>
				<div className="social-media">
					<a href="#" className="social-icon">
						<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
					</a>
					<a href="#" className="social-icon">
						<FontAwesomeIcon icon="fa-brands fa-twitter" />
					</a>
					<a href="#" className="social-icon">
						<FontAwesomeIcon icon="fa-brands fa-google" />
					</a>
					<a href="#" className="social-icon">
						<FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
					</a>
				</div>
			</form>

			<div className="right-panel">
				<div className="content">
					<h3>One of us ?</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
						dignissimos asperiores hic!
					</p>
					<button
						className="btn transparent"
						id="sign-in-btn"
						onClick={handleClick}
					>
						Sign In
					</button>
				</div>

				<img className="image" src={RegisterImg} alt="RegisterImg" />
			</div>
		</div>
	);
};
