import styled from "styled-components";

type ButtonProps = {
	size?: "small" | "medium" | "large";
};

const StyledButton = styled.button<ButtonProps>`
	width: auto;
	height: ${(props) => (props.size === "small" ? "20px" : props.size === "medium" ? "30px" : "40px")};
`;

export default StyledButton;
