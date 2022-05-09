import { lazy } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
// PAGES
const Signin = lazy(() => import("src/Pages/Signin/Signin"));
const Dashboard = lazy(() => import("src/Pages/Dashboard/Dashboard"));
const Layout = lazy(() => import("src/Pages/Layout/Layout"));

/**Add your public routes here */
const publicRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Outlet />,
		children: [
			{ path: "/", element: <Signin /> },
			{ path: "signin", element: <Signin /> },
			{ path: "*", element: <Navigate to="/signin" replace /> },
		],
	},
];

/**Add your private routes here */
const privateRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "dashboard", element: <Dashboard /> },
			{ path: "/", element: <Navigate to="/dashboard" replace /> },
			{ path: "*", element: <Navigate to="/dashboard" replace /> },
		],
	},
];

export { privateRoutes, publicRoutes };
