import { useSelector } from "react-redux";
import clone from "clone";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Scrollbars from "react-smooth-scrollbar";
import { MenuInfo } from "rc-menu/lib/interface";
// OPTIONS
import options from "./SidebarOptions";
// STYLES
import SidebarWrapper from "src/Components/Sidebar/Sidebar.style";
// REDUX
import actions from "src/Redux/app/actions";
import { reducerTypes } from "src/Redux/reducers";
// ICONS
import { AppstoreOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed } = actions;

const Sidebar = (): JSX.Element => {
	const app = useSelector((state: reducerTypes) => state.App);

	const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
	const mode = collapsed === true ? "vertical" : "inline";

	const onMouseEnter = (): void => {
		if (app.openDrawer === false) {
			toggleOpenDrawer();
		}
	};

	const onMouseLeave = (): void => {
		if (app.openDrawer === true) {
			toggleOpenDrawer();
		}
	};

	const handleClick = (e: MenuInfo): void => {
		changeCurrent([e.key]);

		if (app.view === "MobileView") {
			setTimeout(() => {
				toggleCollapsed();
				toggleOpenDrawer();
			}, 100);
		}
	};

	const onOpenChange = (newOpenKeys: string[]): void => {
		const latestOpenKey = newOpenKeys.find((key) => !(app.openKeys.indexOf(key) > -1));
		const latestCloseKey = app.openKeys.find((key) => !(newOpenKeys.indexOf(key) > -1));

		let nextOpenKeys: string[] = [];

		if (latestOpenKey) {
			nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}

		if (latestCloseKey) {
			nextOpenKeys = getAncestorKeys(latestCloseKey);
		}

		changeOpenKeys(nextOpenKeys);
	};

	const getAncestorKeys = (key: string): string[] => {
		if (key === "sub3") {
			return ["sub2"];
		} else {
			return [""];
		}
	};

	return (
		<SidebarWrapper>
			<Sider
				trigger={null}
				collapsible={true}
				collapsed={collapsed}
				width={240}
				className="isomorphicSidebar"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<div className="isoLogoWrapper">
					{collapsed ? (
						<div>
							<h3>
								<Link to="/dashboard">
									<AppstoreOutlined />
								</Link>
							</h3>
						</div>
					) : (
						<h3>
							<Link to="/dashboard">ISOMORPHIC</Link>
						</h3>
					)}
				</div>
				<Scrollbars continuousScrolling style={{ height: app.height - 70 }}>
					<Menu
						onClick={handleClick}
						theme="dark"
						className="isoDashboardMenu"
						mode={mode}
						openKeys={collapsed ? [] : app.openKeys}
						selectedKeys={app.current}
						onOpenChange={onOpenChange}
						items={options}
					/>
				</Scrollbars>
			</Sider>
		</SidebarWrapper>
	);
};

export default Sidebar;
