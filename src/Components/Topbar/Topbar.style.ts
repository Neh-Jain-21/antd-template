import styled from "styled-components";
import theme from "src/settings/theme";
import { transition, borderRadius, boxShadow } from "src/settings/style-util";

const TopbarWrapper = styled.div`
	.isomorphicTopbar {
		display: flex;
		justify-content: space-between;
		background-color: #ffffff;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 0 31px 0 265px;
		z-index: 1000;
		${transition()};

		@media only screen and (max-width: 767px) {
			padding: 0px 15px 0px 260px !important;
		}

		&.collapsed {
			padding: 0 31px 0 109px;
			@media only screen and (max-width: 767px) {
				padding: 0px 15px !important;
			}
		}

		.isoLeft {
			display: flex;
			align-items: center;

			@media only screen and (max-width: 767px) {
				margin: "0 20px 0 0";
			}

			.triggerBtn {
				width: 24px;
				height: 100%;
				display: -webkit-inline-flex;
				display: -ms-inline-flex;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				background-color: transparent;
				border: 0;
				outline: 0;
				position: relative;
				cursor: pointer;

				&:before {
					content: "\f20e";
					font-family: "Ionicons";
					font-size: 26px;
					color: inherit;
					line-height: 0;
					position: absolute;
				}
			}
		}

		.isoRight {
			display: flex;
			align-items: center;

			li {
				margin-left: "0";
				margin-right: "35px";
				cursor: pointer;
				line-height: normal;
				position: relative;
				display: inline-block;

				@media only screen and (max-width: 360px) {
					margin-left: "0";
					margin-right: "25px";
				}

				&:last-child {
					margin: 0;
				}

				i {
					font-size: 24px;
					color: ${theme.palette?.text[0]};
					line-height: 1;
				}

				.isoIconWrapper {
					position: relative;
					line-height: normal;

					span {
						font-size: 12px;
						color: #fff;
						background-color: ${theme.palette?.secondary[1]};
						width: 20px;
						height: 20px;
						display: -webkit-inline-flex;
						display: -ms-inline-flex;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						line-height: 20px;
						position: absolute;
						top: -8px;
						left: "10px";
						right: "inherit";
						${borderRadius("50%")};
					}
				}

				&.isoMail {
					.isoIconWrapper {
						span {
							background-color: ${theme.palette?.color[0]};
						}
					}
				}

				&.isoNotify {
					.isoIconWrapper {
						span {
							background-color: ${theme.palette?.primary[2]};
						}
					}
				}

				&.isoMsg {
					.isoIconWrapper {
						span {
							background-color: ${theme.palette?.color[1]};
						}
					}
				}

				&.isoCart {
					.isoIconWrapper {
						span {
							background-color: ${theme.palette?.color[2]};
						}
					}
				}

				&.isoUser {
					.isoImgWrapper {
						width: 40px;
						height: 40px;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;
						background-color: ${theme.palette?.grayscale[9]};
						${borderRadius("50%")};

						img {
							height: 100%;
							object-fit: cover;
						}

						.userActivity {
							width: 10px;
							height: 10px;
							display: block;
							background-color: ${theme.palette?.color[3]};
							position: absolute;
							bottom: 0;
							right: 3px;
							border: 1px solid #ffffff;
							${borderRadius("50%")};
						}
					}
				}
			}
		}
	}

	.isoUserDropdown {
		.ant-popover-inner {
			.ant-popover-inner-content {
				.isoUserDropdownContent {
					padding: 7px 0;
					display: flex;
					flex-direction: column;
					position: absolute;
					top: 0;
					right: 0;
					background-color: #ffffff;
					width: 220px;
					min-width: 160px;
					flex-shrink: 0;
					${borderRadius("5px")};
					${boxShadow("0 2px 10px rgba(0,0,0,0.2)")};
					${transition()};

					.isoDropdownLink {
						font-size: 13px;
						color: ${theme.palette?.text[1]};
						line-height: 1.1;
						padding: 7px 15px;
						background-color: transparent;
						text-decoration: none;
						display: flex;
						justify-content: flex-start;
						${transition()};

						&:hover {
							background-color: ${theme.palette?.secondary[6]};
						}
					}
				}
			}
		}
	}

	// Dropdown
	.ant-popover {
		.ant-popover-inner {
			.ant-popover-inner-content {
				.isoDropdownContent {
					display: flex;
					flex-direction: column;
					position: absolute;
					top: 0;
					right: 0;
					background-color: #ffffff;
					width: 360px;
					min-width: 160px;
					flex-shrink: 0;
					${borderRadius("5px")};
					${boxShadow("0 2px 10px rgba(0,0,0,0.2)")};
					${transition()};

					@media only screen and (max-width: 767px) {
						width: 310px;
					}

					.isoDropdownHeader {
						border-bottom: 1px solid #f1f1f1;
						margin-bottom: 0px;
						padding: 15px 30px;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;

						h3 {
							font-size: 14px;
							font-weight: 500;
							color: ${theme.palette?.text[0]};
							text-align: center;
							text-transform: uppercase;
							margin: 0;
						}
					}

					.isoDropdownBody {
						width: 100%;
						height: 300px;
						overflow-y: auto;
						display: flex;
						flex-direction: column;
						margin-bottom: 10px;
						background-color: ${theme.palette?.grayscale[6]};

						.isoDropdownListItem {
							padding: 15px 30px;
							flex-shrink: 0;
							text-decoration: none;
							display: flex;
							flex-direction: column;
							text-decoration: none;
							width: 100%;
							${transition()};

							&:hover {
								background-color: ${theme.palette?.grayscale[3]};
							}

							.isoListHead {
								display: flex;
								justify-content: space-between;
								align-items: center;
								margin-bottom: 5px;
							}

							h5 {
								font-size: 13px;
								font-weight: 500;
								color: ${theme.palette?.text[0]};
								margin-top: 0;
							}

							p {
								font-size: 12px;
								font-weight: 400;
								color: ${theme.palette?.text[2]};
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}

							.isoDate {
								font-size: 11px;
								color: ${theme.palette?.grayscale[1]};
								flex-shrink: 0;
							}
						}
					}

					.isoViewAllBtn {
						font-size: 13px;
						font-weight: 500;
						color: ${theme.palette?.text[2]};
						padding: 10px 15px 20px;
						display: flex;
						text-decoration: none;
						align-items: center;
						justify-content: center;
						text-align: center;
						${transition()};

						&:hover {
							color: ${theme.palette?.primary[0]};
						}
					}

					.isoDropdownFooterLinks {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 10px 30px 20px;

						a {
							font-size: 13px;
							font-weight: 500;
							color: ${theme.palette?.text[0]};
							text-decoration: none;
							padding: 10px 20px;
							line-height: 1;
							border: 1px solid ${theme.palette?.border[1]};
							display: flex;
							align-items: center;
							justify-content: center;
							${transition()};

							&:hover {
								background-color: ${theme.palette?.primary[0]};
								border-color: ${theme.palette?.primary[0]};
								color: #ffffff;
							}
						}

						h3 {
							font-size: 14px;
							font-weight: 500;
							color: ${theme.palette?.text[0]};
							line-height: 1.3;
						}
					}

					&.withImg {
						.isoDropdownListItem {
							display: flex;
							flex-direction: row;

							.isoImgWrapper {
								width: 35px;
								height: 35px;
								overflow: hidden;
								margin-right: 15px;
								display: -webkit-inline-flex;
								display: -ms-inline-flex;
								display: inline-flex;
								align-items: center;
								justify-content: center;
								flex-shrink: 0;
								background-color: ${theme.palette?.grayscale[9]};
								${borderRadius("50%")};

								img {
									width: 100%;
									height: 100%;
									object-fit: cover;
								}
							}

							.isoListContent {
								width: 100%;
								display: flex;
								flex-direction: column;

								.isoListHead {
									display: flex;
									justify-content: space-between;
									align-items: center;
									margin-bottom: 10px;
								}

								h5 {
									margin-bottom: 0;
									padding-right: 15px;
								}

								.isoDate {
									font-size: 11px;
									color: ${theme.palette?.grayscale[1]};
									flex-shrink: 0;
								}

								p {
									white-space: normal;
									line-height: 1.5;
								}
							}
						}
					}
				}
			}
		}

		&.topbarMail {
			.ant-popover-inner {
				.ant-popover-inner-content {
					.isoDropdownContent {
						@media only screen and (max-width: 519px) {
							right: -170px;
						}
					}
				}
			}
		}

		&.topbarMessage {
			.ant-popover-inner {
				.ant-popover-inner-content {
					.isoDropdownContent {
						@media only screen and (max-width: 500px) {
							right: -69px;
						}
					}
				}
			}
		}

		&.topbarNotification {
			.ant-popover-inner {
				.ant-popover-inner-content {
					.isoDropdownContent {
						@media only screen and (max-width: 500px) {
							right: -120px;
						}
					}
				}
			}
		}

		&.topbarAddtoCart {
			.ant-popover-inner {
				.ant-popover-inner-content {
					.isoDropdownContent {
						@media only screen and (max-width: 465px) {
							right: -55px;
						}

						.isoDropdownHeader {
							margin-bottom: 0;
						}

						.isoDropdownBody {
							background-color: ${theme.palette?.grayscale[6]};
						}
					}
				}
			}
		}
	}
`;

export const TopbarDropdownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	margin: -12px -16px;
	width: 360px;
	min-width: 160px;
	flex-shrink: 0;
	${borderRadius("5px")};
	${boxShadow("0 2px 10px rgba(0,0,0,0.2)")};
	${transition()};

	@media only screen and (max-width: 767px) {
		width: 310px;
	}

	.isoDropdownHeader {
		border-bottom: 1px solid #f1f1f1;
		margin-bottom: 0px;
		padding: 15px 30px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		h3 {
			font-size: 14px;
			font-weight: 500;
			color: ${theme.palette?.text[0]};
			text-align: center;
			text-transform: uppercase;
			margin: 0;
		}
	}

	.isoDropdownBody {
		width: 100%;
		height: 300px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
		background-color: ${theme.palette?.grayscale[6]};

		a {
			text-decoration: none;
		}

		.isoDropdownListItem {
			padding: 15px 30px;
			flex-shrink: 0;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			text-decoration: none;
			text-align: "left";
			width: 100%;
			border-bottom: 1px solid ${theme.palette?.border[2]};
			${transition()};

			&:hover {
				background-color: ${theme.palette?.grayscale[3]};
			}

			.isoListHead {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 5px;
			}

			h5 {
				font-size: 13px;
				font-weight: 500;
				color: ${theme.palette?.text[0]};
				margin-top: 0;
			}

			p {
				font-size: 12px;
				font-weight: 400;
				color: ${theme.palette?.text[2]};
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.isoDate {
				font-size: 11px;
				color: ${theme.palette?.grayscale[1]};
				flex-shrink: 0;
			}
		}
	}

	.isoViewAllBtn {
		font-size: 13px;
		font-weight: 500;
		color: ${theme.palette?.text[2]};
		padding: 10px 15px 20px;
		display: flex;
		text-decoration: none;
		align-items: center;
		justify-content: center;
		text-align: center;
		${transition()};

		&:hover {
			color: ${theme.palette?.primary[0]};
		}
	}

	.isoDropdownFooterLinks {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 30px 20px;

		a {
			font-size: 13px;
			font-weight: 500;
			color: ${theme.palette?.text[0]};
			text-decoration: none;
			padding: 10px 20px;
			line-height: 1;
			border: 1px solid ${theme.palette?.border[1]};
			display: flex;
			align-items: center;
			justify-content: center;
			${transition()};

			&:hover {
				background-color: ${theme.palette?.primary[0]};
				border-color: ${theme.palette?.primary[0]};
				color: #ffffff;
			}
		}

		h3 {
			font-size: 14px;
			font-weight: 500;
			color: ${theme.palette?.text[0]};
			line-height: 1.3;
		}
	}

	&.withImg {
		.isoDropdownListItem {
			display: flex;
			flex-direction: row;

			.isoImgWrapper {
				width: 35px;
				height: 35px;
				overflow: hidden;
				margin: "0 15px 0 0";
				display: -webkit-inline-flex;
				display: -ms-inline-flex;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex-shrink: 0;
				background-color: ${theme.palette?.grayscale[9]};
				${borderRadius("50%")};

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.isoListContent {
				width: 100%;
				display: flex;
				flex-direction: column;

				.isoListHead {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10px;
				}

				h5 {
					margin-bottom: 0;
					padding: 0 15px 0 0;
				}

				.isoDate {
					font-size: 11px;
					color: ${theme.palette?.grayscale[1]};
					flex-shrink: 0;
				}

				p {
					white-space: normal;
					line-height: 1.5;
				}
			}
		}
	}

	&.topbarMail {
		@media only screen and (max-width: 519px) {
			right: -170px;
		}
	}

	&.topbarMessage {
		@media only screen and (max-width: 500px) {
			right: -69px;
		}
	}

	&.topbarNotification {
		@media only screen and (max-width: 500px) {
			right: -120px;
		}
	}

	&.topbarAddtoCart {
		@media only screen and (max-width: 465px) {
			right: -55px;
		}

		.isoDropdownHeader {
			margin-bottom: 0;
		}

		.isoDropdownBody {
			background-color: ${theme.palette?.grayscale[6]};
			display: flex;
			flex-direction: column;

			.isoNoItemMsg {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				span {
					font-size: 30px;
					font-weight: 300;
					color: ${theme.palette?.grayscale[1]};
					line-height: 1.2;
				}
			}
		}
	}

	&.isoUserDropdown {
		padding: 7px 0;
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		width: 220px;
		min-width: 160px;
		flex-shrink: 0;
		${borderRadius("5px")};
		${boxShadow("0 2px 10px rgba(0,0,0,0.2)")};
		${transition()};

		.isoDropdownLink {
			font-size: 13px;
			color: ${theme.palette?.text[1]};
			line-height: 1.1;
			padding: 7px 15px;
			background-color: transparent;
			text-decoration: none;
			display: flex;
			justify-content: flex-start;
			${transition()};

			&:hover {
				background-color: ${theme.palette?.secondary[6]};
			}
		}
	}
`;

export default TopbarWrapper;
