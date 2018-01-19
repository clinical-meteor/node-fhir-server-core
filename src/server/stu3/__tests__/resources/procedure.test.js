const path = require('path');
const { Procedure, Performer, FocalDevice } = require(path.resolve('./src/server/stu3/resources/Procedure'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));
const Annotation = require(path.resolve('./src/server/stu3/resources/types/Annotation'));

describe('Procedure Resource Tests', () => {
	test('should create an Procedure Object default type', () => {
		let procedure = new Procedure();

		const expected = {
			resourceType: 'Procedure'
		};

		expect(procedure).toBeInstanceOf(Procedure);
		expect(procedure.resourceType).toEqual('Procedure');
		expect(JSON.stringify(procedure)).toEqual(JSON.stringify(expected));
	});

	test('should validate Procedure test object', () => {
		const procedure = new Procedure();
		procedure.id = '11756';
		procedure.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		procedure.identifier = new Identifier({
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
		procedure.subject = new Reference({
			'reference': 'Patient'
		});
		procedure.status = 'aborted';
		procedure.category = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '24642003'
			})]
		});
		procedure.code = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '104001'
			})]
		});
		procedure.notPerformed = true;
		procedure.reasonNotPerformed = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '135809002'
			})]
		})];
		procedure.bodySite = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '106004'
			})]
		})];
		procedure.reasonCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not Specified',
				'code': 'n/a'
			})]
		});
		procedure.reasonReference = new Reference({
			'reference': 'Condition'
		});

		const performer1 = new Performer({
			'actor': new Reference({
				'reference': 'Patient'
			}),
			'role': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '1421009'
				})]
			})
		});
		procedure.performer = [performer1];

		procedure.performedDateTime = '2016-09-09T13:11:02-04:00';
		procedure.performedPeriod = new Period({
			'start': '2001-05-06'
		});
		procedure.encounter = new Reference({
			'reference': 'Encounter'
		});
		procedure.location = new Reference({
			'reference': 'Location'
		});
		procedure.outcome = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '385669000'
			})]
		});
		procedure.report = [new Reference({
			'reference': 'DiagnosticReport'
		})];
		procedure.complication = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '109006'
			})]
		})];
		procedure.followUp = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '18949003'
			})]
		})];
		procedure.request = new Reference({
			'reference': 'DiagnosticOrder'
		});
		procedure.notes = [new Annotation({
			'authorReference': new Reference({
				'reference': 'RelatedPerson'
			}),
			'time': '2016-09-09T17:11:02-04:00'
		})];

		const focalDevice1 = new FocalDevice({
			'action': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/device-action',
					'code': 'implanted'
				})]
			}),
			'manipulated': new Reference({
				'reference': 'Device'
			})
		});
		procedure.focalDevice = [focalDevice1];
		procedure.used = [new Reference({
			'reference': 'Device'
		})];

		const expected = {
			'resourceType': 'Procedure',
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
			'subject': {
				'reference': 'Patient'
			},
			'status': 'aborted',
			'category': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '24642003'
				}]
			},
			'code': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '104001'
				}]
			},
			'notPerformed': true,
			'reasonNotPerformed': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '135809002'
				}]
			}],
			'bodySite': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '106004'
				}]
			}],
			'reasonCodeableConcept': {
				'coding': [{
					'system': 'Not Specified',
					'code': 'n/a'
				}]
			},
			'reasonReference': {
				'reference': 'Condition'
			},
			'performer': [{
				'actor': {
					'reference': 'Patient'
				},
				'role': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '1421009'
					}]
				}
			}],
			'performedDateTime': '2016-09-09T13:11:02-04:00',
			'performedPeriod': {
				'start': '2001-05-06'
			},
			'encounter': {
				'reference': 'Encounter'
			},
			'location': {
				'reference': 'Location'
			},
			'outcome': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '385669000'
				}]
			},
			'report': [{
				'reference': 'DiagnosticReport'
			}],
			'complication': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '109006'
				}]
			}],
			'followUp': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '18949003'
				}]
			}],
			'request': {
				'reference': 'DiagnosticOrder'
			},
			'notes': [{
				'authorReference': {
					'reference': 'RelatedPerson'
				},
				'time': '2016-09-09T17:11:02-04:00'
			}],
			'focalDevice': [{
				'action': {
					'coding': [{
						'system': 'http://hl7.org/fhir/device-action',
						'code': 'implanted'
					}]
				},
				'manipulated': {
					'reference': 'Device'
				}
			}],
			'used': [{
				'reference': 'Device'
			}]
		};

		expect(JSON.stringify(procedure)).toEqual(JSON.stringify(expected));
	});
});
