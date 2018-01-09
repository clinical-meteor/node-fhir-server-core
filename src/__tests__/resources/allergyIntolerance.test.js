const path = require('path');
const { AllergyIntolerance, Reaction } = require(path.resolve('./src/server/resources/AllergyIntolerance'));
const Metadata = require(path.resolve('./src/server/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/resources/types/Period'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/resources/types/Coding'));
const Annotation = require(path.resolve('./src/server/resources/types/Annotation'));

describe('AllergyIntolerance Resource Tests', () => {
	test('should create an AllergyIntolerance Object default type', () => {
		let allergyIntolerance = new AllergyIntolerance();

		const expected = {
			resourceType: 'AllergyIntolerance'
		};

		expect(allergyIntolerance).toBeInstanceOf(AllergyIntolerance);
		expect(allergyIntolerance.resourceType).toEqual('AllergyIntolerance');
		expect(JSON.stringify(allergyIntolerance)).toEqual(JSON.stringify(expected));
	});

	test('should validate allergyIntolerance test object', () => {
		const allergyIntolerance = new AllergyIntolerance();
		allergyIntolerance.id = '11756';
		allergyIntolerance.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		allergyIntolerance.identifier = new Identifier({
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

		allergyIntolerance.onset = '2016-09-09T13:11:02-04:00';
		allergyIntolerance.recordedDate = '2016-09-10T13:11:02-04:00';
		allergyIntolerance.recorder = new Reference({
			'reference': 'Practitioner'
		});
		allergyIntolerance.patient = new Reference({
			'reference': 'Patient'
		});
		allergyIntolerance.reporter = new Reference({
			'reference': 'Patient'
		});
		allergyIntolerance.substance = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '102002'
			})]
		});
		allergyIntolerance.status = 'active';
		allergyIntolerance.criticality = 'CRITL';
		allergyIntolerance.type = 'intolerance';
		allergyIntolerance.category = 'other';
		allergyIntolerance.lastOccurence = '2016-09-03T13:11:02-04:00';
		allergyIntolerance.note = new Annotation({
			'authorReference': new Reference({
				'reference': 'Patient'
			}),
			'authorString': 'John Doe',
			'time': '2016-09-09T17:11:02-04:00'
		});

		const reaction1 = new Reaction({
			'substance': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '102002'
				})]
			}),
			'certainty': 'confirmed',
			'manifestation': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '109006'
				})]
			})],
			'description': 'This is the reaction1 text',
			'onset': '2016-09-03T13:11:02-04:00',
			'severity': 'mild',
			'exposureRoute': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '6064005'
				})]
			}),
			'note': new Annotation({
				'authorReference': new Reference({
					'reference': 'RelatedPerson'
				}),
				'time': '2016-09-09T17:11:02-04:00'
			})
		});
		allergyIntolerance.reaction = [reaction1];

		const expected = {
			'resourceType': 'AllergyIntolerance',
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
			'onset': '2016-09-09T13:11:02-04:00',
			'recordedDate': '2016-09-10T13:11:02-04:00',
			'recorder': {
				'reference': 'Practitioner'
			},
			'patient': {
				'reference': 'Patient'
			},
			'reporter': {
				'reference': 'Patient'
			},
			'substance': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '102002'
				}]
			},
			'status': 'active',
			'criticality': 'CRITL',
			'type': 'intolerance',
			'category': 'other',
			'lastOccurence': '2016-09-03T13:11:02-04:00',
			'note': {
				'authorReference': {
					'reference': 'Patient'
				},
				'authorString': 'John Doe',
				'time': '2016-09-09T17:11:02-04:00'
			},
			'reaction': [{
				'substance': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '102002'
					}]
				},
				'certainty': 'confirmed',
				'manifestation': [{
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '109006'
					}]
				}],
				'description': 'This is the reaction1 text',
				'onset': '2016-09-03T13:11:02-04:00',
				'severity': 'mild',
				'exposureRoute': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '6064005'
					}]
				},
				'note': {
					'authorReference': {
						'reference': 'RelatedPerson'
					},
					'time': '2016-09-09T17:11:02-04:00'
				}
			}]
		};

		expect(JSON.stringify(allergyIntolerance)).toEqual(JSON.stringify(expected));
	});
});
