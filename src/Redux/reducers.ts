import App, { AppState } from "src/Redux/app/reducer";
import Auth, { AuthState } from "src/Redux/auth/reducer";

// TYPES
export type reducerTypes = {
	App: AppState;
	Auth: AuthState;
};

const reducers = { Auth, App };

export default reducers;
