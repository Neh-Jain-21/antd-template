import { useDispatch } from "react-redux";
import { Button, Checkbox, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
// REDUX
import action from "src/Redux/auth/action";
// STYLES
import SignInStyleWrapper from "src/Pages/Signin/Signin.style";

const Signin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		event.preventDefault();

		dispatch(action.login({ loggedIn: "something" }));
		navigate("/dashboard");
	};

	return (
		<SignInStyleWrapper className="isoSignInPage">
			<div className="isoLoginContentWrapper">
				<div className="isoLoginContent">
					<div className="isoLogoWrapper">
						<Link to="/">Isomorphic</Link>
					</div>
					<div className="isoSignInForm">
						<div className="isoInputWrapper">
							<Input size="large" placeholder="Username" />
						</div>
						<div className="isoInputWrapper">
							<Input size="large" type="password" placeholder="Password" />
						</div>
						<div className="isoInputWrapper signinContainer">
							<Checkbox>Remember me</Checkbox>
							<Button type="primary" onClick={handleLogin}>
								Sign in
							</Button>
						</div>
					</div>
				</div>
			</div>
		</SignInStyleWrapper>
	);
};

export default Signin;
