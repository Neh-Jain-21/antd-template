import { ItemType } from "antd/lib/menu/hooks/useItems";
import { CompassOutlined, DashboardOutlined, SettingOutlined, UnorderedListOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const options: ItemType[] = [
	{
		key: "dashboard",
		label: "Dashboard",
		icon: <DashboardOutlined />,
		onClick: () => {},
	},
	{
		key: "users",
		label: "Users",
		icon: <UsergroupAddOutlined />,
		onClick: () => {},
	},
	{
		key: "manage-category",
		label: "Category",
		icon: <UnorderedListOutlined />,
		onClick: () => {},
	},
	{
		key: "settings",
		label: "Settings",
		icon: <SettingOutlined />,
		onClick: () => {},
	},
	{
		key: "change-password",
		label: "Change Password",
		icon: <CompassOutlined />,
		onClick: () => {},
	},
];

export default options;
