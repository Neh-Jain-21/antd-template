import { Debounce } from "react-throttle";
import { Outlet } from "react-router-dom";
import { Layout as AntLayout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import WindowResizeListener from "react-window-size-listener";
// REDUX
import actions from "src/Redux/app/actions";
import { reducerTypes } from "src/Redux/reducers";
// STYLES
import LayoutWrapper from "src/Pages/Layout/Layout.style";
// COMPONENTS
import Topbar from "src/Components/Topbar/Topbar";
import Sidebar from "src/Components/Sidebar/Sidebar";

const Layout = (): JSX.Element => {
	const dispatch = useDispatch();
	const { Content, Footer } = AntLayout;
	const appHeight: number = window.innerHeight;

	const height = useSelector((state: reducerTypes) => state.App.height);

	return (
		<LayoutWrapper>
			<AntLayout style={{ height: appHeight }}>
				<Debounce time="1000" handler="onResize">
					<WindowResizeListener onResize={(windowSize) => dispatch(actions.toggleAll(windowSize.windowWidth, windowSize.windowHeight))} />
				</Debounce>
				<Topbar />
				<AntLayout style={{ flexDirection: "row", overflowX: "hidden" }}>
					<Sidebar />
					<AntLayout className="isoContentMainLayout" style={{ height: height }}>
						<Content
							className="isomorphicContent"
							style={{ padding: "70px 0 0", flexShrink: "0", background: "#f1f3f6", position: "relative" }}
						>
							<Outlet />
						</Content>
						<Footer style={{ background: "#ffffff", textAlign: "center", borderTop: "1px solid #ededed" }}>Isomorphic 2022</Footer>
					</AntLayout>
				</AntLayout>
			</AntLayout>
		</LayoutWrapper>
	);
};

export default Layout;
