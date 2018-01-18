const Observation = require('./Observation');
const OperationOutcome = require('./OperationOutcome');
const {
	Patient,
	Communication,
	PatientContact
} = require('./Patient');

/**
 * @name exports
 * @description Export all the DSTU2 resource types
 */
module.exports = {
	Observation,
	Patient,
	Communication,
	PatientContact,
	OperationOutcome
};
