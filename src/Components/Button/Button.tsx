import StyledButton from "src/Components/Button/Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;

	/** Size of the button */
	size?: "small" | "medium" | "large";
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
