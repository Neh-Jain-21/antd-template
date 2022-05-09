export function getView(width: number) {
	let newView = "MobileView";

	if (width > 1220) {
		newView = "DesktopView";
	} else if (width > 767) {
		newView = "TabView";
	}

	return newView;
}

export const CONSTANTS = {
	COLLPSE_CHANGE: "COLLPSE_CHANGE",
	COLLPSE_OPEN_DRAWER: "COLLPSE_OPEN_DRAWER",
	CHANGE_OPEN_KEYS: "CHANGE_OPEN_KEYS",
	TOGGLE_ALL: "TOGGLE_ALL",
	CHANGE_CURRENT: "CHANGE_CURRENT",
	CLOSE_ALL: "CLOSE_ALL",
};

const actions = {
	toggleCollapsed: (): any => ({
		type: CONSTANTS.COLLPSE_CHANGE,
	}),

	toggleAll: (width: number, height: number) => {
		const view = getView(width);
		const collapsed = view !== "DesktopView";
		return {
			type: CONSTANTS.TOGGLE_ALL,
			collapsed,
			view,
			height,
		};
	},

	toggleOpenDrawer: () => ({
		type: CONSTANTS.COLLPSE_OPEN_DRAWER,
	}),

	changeOpenKeys: (openKeys: string[]) => ({
		type: CONSTANTS.CHANGE_OPEN_KEYS,
		openKeys,
	}),

	changeCurrent: (current: string[]) => ({
		type: CONSTANTS.CHANGE_CURRENT,
		current,
	}),

	closeAll: () => ({ type: CONSTANTS.CLOSE_ALL }),
};

export default actions;
