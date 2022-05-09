import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// REDUX
import store from "src/Redux/store";
import Boot from "src/Redux/boot";
// ROUTES
import Router from "src/Routes/Router";

const App = (): JSX.Element => (
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>
);

Boot()
	.then(() => App())
	.catch((error) => console.error(error));

export default App;
