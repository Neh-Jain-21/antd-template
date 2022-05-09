import { useEffect } from "react";
import nprogress from "nprogress";
// CSS
import "nprogress/nprogress.css";

/** Fallback UI when page is loading. */
const LazyLoad = (): JSX.Element => {
	useEffect(() => {
		nprogress.start();

		return () => {
			nprogress.done();
		};
	});

	return <></>;
};

export default LazyLoad;
