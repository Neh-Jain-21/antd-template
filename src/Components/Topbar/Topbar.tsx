import { CSSProperties } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import TopbarUser from "src/Components/Topbar/TopbarUser";
// STYELES
import TopbarWrapper from "src/Components/Topbar/Topbar.style";
// REDUX
import actions from "src/Redux/app/actions";
import { MenuOutlined } from "@ant-design/icons";
import { reducerTypes } from "src/Redux/reducers";

const Topbar = (): JSX.Element => {
	const { Header } = Layout;
	const dispatch = useDispatch();
	const appRedux = useSelector((state: reducerTypes) => state.App);
	const styling: CSSProperties = { position: "fixed", width: "100%", height: 70 };
	const collapsed = appRedux.collapsed && !appRedux.openDrawer;

	return (
		<TopbarWrapper>
			<Header style={styling} className={collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"}>
				<div className="isoLeft">
					<MenuOutlined
						className={collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"}
						onClick={() => dispatch(actions.toggleCollapsed())}
					/>
				</div>

				<ul className="isoRight">
					<li className="isoUser">
						<TopbarUser />
					</li>
				</ul>
			</Header>
		</TopbarWrapper>
	);
};

export default Topbar;
