import styled from "styled-components";
import bgImage from "src/Assets/image/signin.jpg";

const SignInStyleWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100vh;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	background: url(${bgImage}) no-repeat center center;
	background-size: cover;

	&:before {
		content: "";
		width: 100%;
		height: 100%;
		display: flex;
		background-color: rgba(0, 0, 0, 0.6);
		position: absolute;
		z-index: 1;
		top: 0;
		left: "0";
		right: "inherit";
	}

	.isoLoginContentWrapper {
		width: 500px;
		overflow-y: auto;
		z-index: 10;
		position: relative;
		margin: 0 auto;
	}

	.isoLoginContent {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		padding: 50px;
		position: relative;
		background-color: #ffffff;
		border-radius: 7px;

		@media only screen and (max-width: 767px) {
			width: 100%;
			padding: 70px 20px;
		}

		.isoLogoWrapper {
			width: 100%;
			display: flex;
			margin-bottom: 50px;
			justify-content: center;
			flex-shrink: 0;

			a {
				font-size: 24px;
				font-weight: 300;
				line-height: 1;
				text-transform: uppercase;
				color: #2d3446;
			}
		}

		.isoSignInForm {
			width: 100%;
			display: flex;
			flex-shrink: 0;
			flex-direction: column;

			.isoInputWrapper {
				margin-bottom: 15px;

				&:last-of-type {
					margin-bottom: 0;
				}

				input {
					&::-webkit-input-placeholder {
						color: #bababa;
					}

					&:-moz-placeholder {
						color: #bababa;
					}

					&::-moz-placeholder {
						color: #bababa;
					}
					&:-ms-input-placeholder {
						color: #bababa;
					}
				}
			}

			.signinContainer {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			button {
				font-weight: 500;
			}
		}
	}
`;

export default SignInStyleWrapper;
