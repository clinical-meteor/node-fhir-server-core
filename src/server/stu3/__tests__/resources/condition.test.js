const path = require('path');
const { Condition, Stage, Evidence } = require(path.resolve('./src/server/stu3/resources/Condition'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const Annotation = require(path.resolve('./src/server/stu3/resources/types/Annotation'));
const CodeableConcept = require(path.resolve('./src/server/dstu2/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/dstu2/resources/types/Coding'));
const Range = require(path.resolve('./src/server/dstu2/resources/types/Range'));

describe('Condition Resource Tests', () => {
	test('should create an Condition Object default type', () => {
		let condition = new Condition();

		const expected = {
			resourceType: 'Condition'
		};

		expect(condition).toBeInstanceOf(Condition);
		expect(condition.resourceType).toEqual('Condition');
		expect(JSON.stringify(condition)).toEqual(JSON.stringify(expected));
	});

	test('should validate Condition test object', () => {
		const condition = new Condition();
		condition.id = '11756';
		condition.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		condition.identifier = new Identifier({
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

		condition.clinicalStatus = 'active';
		condition.verificationStatus = 'provisional';
		condition.category = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/condition-category',
				'code': 'complaint'
			})]
		})];
		condition.severity = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '399166001'
			})]
		});
		condition.code = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '109006'
			})]
		});
		condition.bodySite = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '106004'
			})]
		});
		condition.subject = new Reference({
			'reference': 'Patient'
		});
		condition.context = new Reference({
			'reference': 'Encounter'
		});
		condition.onsetDateTime = '2017-07-08T15:57:49.482-04:00';
		condition.onsetAge = '52';
		condition.onsetPeriod = new Period({
			'start': '2001-05-06'
		});
		condition.onsetRange = new Range({
			'low': '1',
			'high': '10'
		});
		condition.onsetString = 'Some string';
		condition.abatementDateTime = '2017-07-08T15:57:49.482-04:00';
		condition.abatementAge = '52';
		condition.abatementBoolean = true;
		condition.abatementPeriod = new Period({
			'start': '2001-05-06'
		});
		condition.abatementRange = new Range({
			'low': '1',
			'high': '10'
		});
		condition.abatementString = 'Some string';
		condition.assertedDate = '2017-07-08T15:57:49.482-04:00';
		condition.asserter = new Reference({
			'reference': 'Practitioner'
		});

		const stage1 = new Stage({
			'summary': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '786005'
				})]
			}),
			'assessment': [new Reference({
				'reference': 'Observation'
			})]
		});
		condition.stage = stage1;

		const evidence1 = new Evidence({
			'code': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '109006'
				})]
			})],
			'detail': [new Reference({
				'reference': 'Observation'
			})]
		});
		condition.evidence = [evidence1];

		condition.note = [new Annotation({
			'authorReference': new Reference({
				'reference': 'Patient'
			}),
			'time': '2016-09-09T17:11:02-04:00'
		})];

		const expected = {
			'resourceType': 'Condition',
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
			'clinicalStatus': 'active',
			'verificationStatus': 'provisional',
			'category': [{
				'coding': [{
					'system': 'http://hl7.org/fhir/condition-category',
					'code': 'complaint'
				}]
			}],
			'severity': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '399166001'
				}]
			},
			'code': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '109006'
				}]
			},
			'bodySite': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '106004'
				}]
			}],
			'subject': {
				'reference': 'Patient'
			},
			'context': {
				'reference': 'Encounter'
			},
			'onsetDateTime': '2017-07-08T15:57:49.482-04:00',
			'onsetAge': '52',
			'onsetPeriod': {
				'start': '2001-05-06'
			},
			'onsetRange': {
				'low': '1',
				'high': '10'
			},
			'onsetString': 'Some string',
			'abatementDateTime': '2017-07-08T15:57:49.482-04:00',
			'abatementAge': '52',
			'abatementBoolean': true,
			'abatementPeriod': {
				'start': '2001-05-06'
			},
			'abatementRange': {
				'low': '1',
				'high': '10'
			},
			'abatementString': 'Some string',
			'assertedDate': '2017-07-08T15:57:49.482-04:00',
			'asserter': {
				'reference': 'Practitioner'
			},
			'stage': {
				'summary': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '786005'
					}]
				},
				'assessment': [{
					'reference': 'Observation'
				}],
			},
			'evidence': [{
				'code': [{
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '109006'
					}]
				}],
				'detail': [{
					'reference': 'Observation'
				}],
			}],
			'note': [{
				'authorReference': {
					'reference': 'Patient'
				},
				'time': '2016-09-09T17:11:02-04:00'
			}]
		};

		expect(JSON.stringify(condition)).toEqual(JSON.stringify(expected));
	});
});
