const path = require('path');
const { MedicationAdministration, Dosage } = require(path.resolve('./src/server/dstu2/resources/MedicationAdministration'));
const Metadata = require(path.resolve('./src/server/dstu2/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/dstu2/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/dstu2/resources/types/Period'));
const Reference = require(path.resolve('./src/server/dstu2/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/dstu2/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/dstu2/resources/types/Coding'));
const Ratio = require(path.resolve('./src/server/dstu2/resources/types/Ratio'));
const Range = require(path.resolve('./src/server/dstu2/resources/types/Range'));
const Quantity = require(path.resolve('./src/server/dstu2/resources/types/Quantity'));

describe('MedicationAdministration Resource Tests', () => {
	test('should create an MedicationAdministration Object default type', () => {
		let medicationAdministration = new MedicationAdministration();

		const expected = {
			resourceType: 'MedicationAdministration'
		};

		expect(medicationAdministration).toBeInstanceOf(MedicationAdministration);
		expect(medicationAdministration.resourceType).toEqual('MedicationAdministration');
		expect(JSON.stringify(medicationAdministration)).toEqual(JSON.stringify(expected));
	});

	test('should validate medicationAdministration test object', () => {
		const medicationAdministration = new MedicationAdministration();
		medicationAdministration.id = '11756';
		medicationAdministration.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		medicationAdministration.identifier = new Identifier({
			'use': 'usual',
			'type': {
				'coding': [{
					'system': 'http://hl7.org/fhir/v2/0203',
					'code': 'MR'
				}]
			},
			'system': 'urn:oid:1.2.36.146.595.217.0.1',
			'value': '12345',
			'period': new Period({
				'start': '2001-05-06'
			}),
			'assigner': new Reference({
				'display': 'Acme Healthcare'
			})
		});

		medicationAdministration.status = 'in-progress';
		medicationAdministration.patient = new Reference({
			'reference': 'Patient'
		});
		medicationAdministration.practitioner = new Reference({
			'reference': 'Practitioner'
		});
		medicationAdministration.encounter = new Reference({
			'reference': 'Encounter'
		});
		medicationAdministration.prescription = new Reference({
			'reference': 'MedicationOrder'
		});
		medicationAdministration.wasNotGiven = false;
		medicationAdministration.reasonNotGiven = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/reason-medication-not-given',
				'code': 'a'
			})]
		})];
		medicationAdministration.reasonGiven = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/reason-medication-given',
				'code': 'b'
			})]
		})];
		medicationAdministration.effectiveTimeDateTime = '2016-09-09T13:11:02-04:00';
		medicationAdministration.effectiveTimePeriod = new Period({
			'start': '2001-05-06'
		});
		medicationAdministration.medicationCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not Specified',
				'code': 'n/a'
			})]
		});
		medicationAdministration.medicationReference = new Reference({
			'reference': 'Medication'
		});
		medicationAdministration.device = [new Reference({
			'reference': 'Device'
		})];
		medicationAdministration.note = 'something bout the administration';

		const dosage1 = new Dosage({
			'text': 'Eat it',
			'siteCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '106004'
				})]
			}),
			'siteReference': new Reference({
				'reference': 'BodySite'
			}),
			'route': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '6064005'
				})]
			}),
			'method': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
				})]
			}),
			'quantity': '500',
			'rateRatio': new Ratio({
				'numerator': new Quantity({
					'value': '10'
				}),
				'denominator': new Quantity({
					'value': '13'
				}),
			}),
			'rateRange': new Range({
				'low': '1',
				'high': '10'
			})
		});
		medicationAdministration.dosage = dosage1;

		const expected = {
			'resourceType': 'MedicationAdministration',
			'id': '11756',
			'meta': {
				'versionId': '2',
				'lastUpdated': '2017-07-08T15:57:49.482-04:00'
			},
			'identifier': [{
				'use': 'usual',
				'type': {
					'coding': [{
						'system': 'http://hl7.org/fhir/v2/0203',
						'code': 'MR'
					}]
				},
				'system': 'urn:oid:1.2.36.146.595.217.0.1',
				'value': '12345',
				'period': {
					'start': '2001-05-06'
				},
				'assigner': {
					'display': 'Acme Healthcare'
				}
			}],
			'status': 'in-progress',
			'patient': {
				'reference': 'Patient'
			},
			'practitioner': {
				'reference': 'Practitioner'
			},
			'encounter': {
				'reference': 'Encounter'
			},
			'prescription': {
				'reference': 'MedicationOrder'
			},
			'wasNotGiven': false,
			'reasonNotGiven': [{
				'coding': [{
					'system': 'http://hl7.org/fhir/reason-medication-not-given',
					'code': 'a'
				}]
			}],
			'reasonGiven': [{
				'coding': [{
					'system': 'http://hl7.org/fhir/reason-medication-given',
					'code': 'b'
				}]
			}],
			'effectiveTimeDateTime': '2016-09-09T13:11:02-04:00',
			'effectiveTimePeriod': {
				'start': '2001-05-06'
			},
			'medicationCodeableConcept': {
				'coding': [{
					'system': 'Not Specified',
					'code': 'n/a'
				}]
			},
			'medicationReference': {
				'reference': 'Medication'
			},
			'device': [{
				'reference': 'Device'
			}],
			'note': 'something bout the administration',
			'dosage': {
				'text': 'Eat it',
				'siteCodeableConcept': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '106004'
					}]
				},
				'siteReference': {
					'reference': 'BodySite'
				},
				'route': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '6064005'
					}]
				},
				'method': {
					'coding': [{
						'system': 'Not Specified',
						'code': 'n/a'
					}]
				},
				'quantity': '500',
				'rateRatio': {
					'numerator': {
						'value': '10'
					},
					'denominator': {
						'value': '13'
					},
				},
				'rateRange': {
					'low': '1',
					'high': '10'
				}
			}
		};

		expect(JSON.stringify(medicationAdministration)).toEqual(JSON.stringify(expected));
	});
});
