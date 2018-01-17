const cors = require('cors');
const { sanitizeMiddleware } = require('../../../utils/sanitize.utils');
const { routes } = require('../allergyIntolerance.config');

/**
 * @name exports
 * @summary Patient routes
 */
module.exports = (app, config, logger) => {
	let { profiles, server } = config;
	// Only add routes if we have a patient profile
	// the endpoint can't function without the config
	if (profiles.allergyIntolerance) {
		let baseOptions = Object.assign({}, server.corsOptions, profiles.allergyIntolerance.corsOptions);

		routes.forEach((route) => {
			let corsOptions = Object.assign({}, baseOptions, route.corsOptions);
			// Enable options
			app.options(route.path, cors(corsOptions));
			// Enable route
			app[route.type](
				route.path,
				cors(corsOptions),
				sanitizeMiddleware(route.args),
				route.controller(profiles.allergyIntolerance, logger)
			);
		});
	}
};
