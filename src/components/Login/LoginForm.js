import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LoginImg from '../../assets/images/login.svg';

import './LoginForm.css';

export const LoginForm = ({ state }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleClick = () => {
		state();
	};

	return (
		<div className="container-login">
			<div className="left-panel">
				<div className="content">
					<h3>Now here ?</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
						dignissimos asperiores hic!
					</p>
					<button
						className="btn transparent"
						id="sign-up-btn"
						onClick={handleClick}
					>
						Sign Up
					</button>
				</div>

				<img className="image" src={LoginImg} alt="LoginImg" />
			</div>

			<form action="" className="sign-in-form" onSubmit={handleSubmit}>
				<h2 className="title">Sign in</h2>

				<div className="input-field">
					<i>
						<FontAwesomeIcon icon="fa-user" />
					</i>
					<input type="text" name="username" placeholder="Username" />
				</div>
				<div className="input-field">
					<i>
						<FontAwesomeIcon icon="fa-lock" />
					</i>
					<input type="password" name="password" placeholder="Password" />
				</div>
				<input type="submit" value="Login" className="btn solid" />
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
		</div>
	);
};
