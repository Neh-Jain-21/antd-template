import { useState, useRef, CSSProperties } from "react";
import { Button, Input, InputRef } from "antd";
// COMPONENTS
// STYLES
import PageWrapper from "src/Pages/Page.style";

const Dashboard = (): JSX.Element => {
	const inputRef = useRef<InputRef>(null);

	const [counter, setCounter] = useState<number>(0);

	const Style: CSSProperties = { marginBottom: 20 };

	const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (inputRef.current?.input?.value && !isNaN(parseInt(inputRef.current.input.value))) {
			setCounter(counter + parseInt(inputRef.current.input.value));
		} else {
			setCounter(counter + 1);
		}
	};

	return (
		<PageWrapper>
			<div className="card-container">
				<p style={Style}>Counter: {counter}</p>
				<Input style={Style} ref={inputRef} type="text" placeholder="Enter number" />
				<Button size="middle" type="primary" onClick={handleClick}>
					INCREMENT
				</Button>
			</div>
		</PageWrapper>
	);
};

export default Dashboard;
