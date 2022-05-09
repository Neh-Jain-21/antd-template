import { useState } from "react";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// ASSETS
import userpic from "src/Assets/image/user1.png";
// REDUX
import authAction from "src/Redux/auth/action";
// STYLES
import { TopbarDropdownWrapper } from "src/Components/Topbar/Topbar.style";

const { logout } = authAction;

const TopbarUser = () => {
	const dispatch = useDispatch();

	const [visible, setVisible] = useState<boolean>(false);

	const handleVisibleChange = () => {
		setVisible(!visible);
	};

	return (
		<Popover
			content={
				<TopbarDropdownWrapper className="isoUserDropdown">
					<Link className="isoDropdownLink" to="/change-password">
						Change Password
					</Link>
					<Link className="isoDropdownLink" onClick={() => dispatch(logout())} to="/">
						Logout
					</Link>
				</TopbarDropdownWrapper>
			}
			trigger="click"
			visible={visible}
			onVisibleChange={handleVisibleChange}
			arrowPointAtCenter={true}
			placement="bottomLeft"
		>
			<div className="isoImgWrapper">
				<img alt="user" src={userpic} />
				<span className="userActivity online" />
			</div>
		</Popover>
	);
};

export default TopbarUser;
