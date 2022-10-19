import { useState } from 'react';

import { useTransition, animated as a } from 'react-spring';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

import './Login.css';

export const Login = () => {
	const [item, setItem] = useState({
		status: false,
		xFrom: 500,
		xLeave: -500,
	});

	const trasition = useTransition(item, {
		from: { opacity: 0 },
		enter: { opacity: 1, delay: 1200 },
		leave: { opacity: 0 },
		config: { duration: 600 },
	});

	const toggleActive = () => {
		setItem(
			item.status
				? { status: false, xFrom: 500, xLeave: -500 }
				: { status: true, xFrom: -500, xLeave: 500 }
		);
	};

	const className = item.status
		? 'main-container sign-up-mode'
		: 'main-container';

	return (
		<>
			<div className={className}>
				{trasition((style, item) =>
					item.status ? (
						<a.div style={style}>
							<RegisterForm state={toggleActive} />
						</a.div>
					) : (
						<a.div style={style}>
							<LoginForm state={toggleActive} />
						</a.div>
					)
				)}
			</div>
		</>
	);
};
