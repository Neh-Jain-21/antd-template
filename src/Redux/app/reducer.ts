import { getDefaultPath } from "src/helpers/urlSync";
import { getView, CONSTANTS } from "src/Redux/app/actions";

// TYPES
export type AppState = {
	readonly view: string;
	readonly height: number;
	readonly collapsed: boolean;
	readonly openKeys: string[];
	readonly current: string[];
	readonly openDrawer: boolean;
};

type AppAction = {
	type: string;
	view: string;
	height: number;
	collapsed: boolean;
	openKeys: string[];
	current: string[];
	openDrawer: boolean;
};

const preKeys = getDefaultPath();

const initState: AppState = {
	collapsed: window.innerWidth > 1220 ? false : true,
	view: getView(window.innerWidth),
	height: window.innerHeight,
	openDrawer: false,
	openKeys: preKeys,
	current: preKeys,
};

const appReducer = (state = initState, action: AppAction) => {
	switch (action.type) {
		case CONSTANTS.COLLPSE_CHANGE:
			return { ...state, collapsed: !state.collapsed };

		case CONSTANTS.COLLPSE_OPEN_DRAWER:
			return { ...state, openDrawer: !state.openDrawer };

		case "TOGGLE_ALL":
			if (state.view !== action.view || action.height !== state.height) {
				const height = action.height ? action.height : state.height;

				return {
					...state,
					collapsed: action.collapsed,
					view: action.view,
					height: height,
				};
			}

			break;
		case "CHANGE_OPEN_KEYS":
			return { ...state, openKeys: action.openKeys };

		case "CHANGE_CURRENT":
			return { ...state, current: action.current };

		case CONSTANTS.CLOSE_ALL:
			return { ...state, current: [], openKeys: [] };

		default:
			return state;
	}

	return state;
};

export default appReducer;
