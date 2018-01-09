const { ServerError } = require('../../utils/error.utils');

module.exports.getAllergyIntolerance = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		/**
		* return service.getAllergyIntolerance(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAllergyIntolerance(req, logger)
			.then((allergyIntolerances) => {

				const searchResults = {
					'total': allergyIntolerances ? allergyIntolerances.length : 0,
					'resourceType': 'Bundle',
					'type': 'searchset',
					'entry': []
				};

				if (allergyIntolerances) {
					for (let resource of allergyIntolerances) {
						// Modes:
						// match - This resource matched the search specification.
						// include - This resource is returned because it is referred to from another resource in the search set.
						// outcome - An OperationOutcome that provides additional information about the processing of a search.
						const entry = {
							'search': {
								'mode': 'match'
							},
							'resource': resource,
							'fullUrl': `localhost:3000/AllergyIntolerance/${resource.id}`
						};
						searchResults.entry.push(entry);
					}
				}

				res.send(searchResults);
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};


module.exports.getAllergyIntoleranceByID = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		logger.info('Get allergyIntolerance by id');
		/**
		* return service.getAllergyIntolerance(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getAllergyIntoleranceByID(req, logger)
			.then((allergyIntolerance) => {
				if (allergyIntolerance) {
					res.send(allergyIntolerance);
				} else {
					logger.info('allergyIntolerance CON 404');
					res.status(404).end();
				}
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};
