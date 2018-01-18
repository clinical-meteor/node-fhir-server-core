const { DSTU2 } = require('../../../constants');

/**
 * @name exports
 * @summary AllergyIntolerance conformance statement
 */

module.exports = {
	Profile: 'allergyIntolerance',
	Resource: (count) => ({
		extension: [{
			url: 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
			// This will be resolved dynamically by the service methods
			valueDecimal: count
		}],
		type: DSTU2.RESOURCE_TYPES.ALLERGYINTOLERANCE,
		profile: {
			reference: 'http://hl7.org/fhir/Profile/AllergyIntolerance'
		},
		interaction: [{
			code: 'read'
		}, {
			code: 'search'
		}],
		searchParam: [{
			name: 'category',
			type: 'token',
			definition: 'The classification of the type of allergyIntolerance'
		}, {
			name: 'code',
			type: 'token',
			definition: 'The code of the allergyIntolerance type'
		}, {
			name: 'date',
			type: 'date',
			definition: 'Obtained date/time. If the obtained element is a period, a date that falls in the period'
		}, {
			name: 'patient',
			type: 'reference',
			definition: 'The subject that the allergyIntolerance is about (if patient)'
		}]
	})
};
