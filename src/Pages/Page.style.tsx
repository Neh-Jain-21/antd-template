import styled from "styled-components";
import theme from "src/settings/theme";

const PageWrapper = styled.div`
	padding: 40px 20px;
	display: flex;
	flex-flow: row wrap;
	overflow: hidden;

	@media only screen and (max-width: 767px) {
		padding: 50px 20px;
	}

	@media (max-width: 580px) {
		padding: 15px;
	}

	.card-container {
		width: 100%;
		padding: 35px;
		background-color: #ffffff;
		border: 1px solid ${theme.palette?.border[0]};
		height: 100%;
	}

	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 15px;
	}

	.action-button-container {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		.item {
			margin-left: 5px;
		}
	}
`;

export default PageWrapper;
