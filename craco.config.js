const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { "@primary-color": "#575757" },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
