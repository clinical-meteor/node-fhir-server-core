const Observation = require('./Observation');
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
	PatientContact
};
