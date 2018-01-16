/**
 * @name exports.files
 * @description Export file locations for the FHIR server
 */
module.exports.files = {
	swaggerHelperDefinitions: 'src/server/*/definitions/*.json',
	swaggerRootDefinitions: 'src/server/*/*.swagger.json',
	routes: 'src/server/**/*.routes.js'
};

/**
 * @name exports.profileRequirements
 * @description These are the required service methods grouped by profile
 */
