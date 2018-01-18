const path = require('path');
const { Immunization, Explanation, Reaction, VaccinationProtocol } = require(path.resolve('./src/server/dstu2/resources/Immunization'));
const Metadata = require(path.resolve('./src/server/dstu2/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/dstu2/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/dstu2/resources/types/Period'));
const Reference = require(path.resolve('./src/server/dstu2/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/dstu2/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/dstu2/resources/types/Coding'));
const Annotation = require(path.resolve('./src/server/dstu2/resources/types/Annotation'));

describe('Immunization Resource Tests', () => {
	test('should create an Immunization Object default type', () => {
		let immunization = new Immunization();

		const expected = {
			resourceType: 'Immunization'
		};

		expect(immunization).toBeInstanceOf(Immunization);
		expect(immunization.resourceType).toEqual('Immunization');
		expect(JSON.stringify(immunization)).toEqual(JSON.stringify(expected));
	});

	test('should validate Immunization test object', () => {
		const immunization = new Immunization();
		immunization.id = '11756';
		immunization.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		immunization.identifier = new Identifier({
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

		immunization.status = 'completed';
		immunization.date = '2016-09-10T13:11:02-04:00';
		immunization.vaccineCode = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not Specified',
				'code': 'n/a'
			})]
		});
		immunization.patient = new Reference({
			'reference': 'Patient'
		});
		immunization.wasNotGiven = true;
		immunization.reported = true;
		immunization.performer = new Reference({
			'reference': 'Practitioner'
		});
		immunization.requester = new Reference({
			'reference': 'Practitioner'
		});
		immunization.encounter = new Reference({
			'reference': 'Encounter'
		});
		immunization.manufacturer = new Reference({
			'reference': 'Organization'
		});
		immunization.location = new Reference({
			'reference': 'Location'
		});
		immunization.lotNumber = 'lot number 3';
		immunization.expirationDate = '2001-05-06';
		immunization.site = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/v3/ActSite',
				'code': 'LA'
			})]
		});
		immunization.route = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/v3/RouteOfAdministration',
				'code': 'IM'
			})]
		});
		immunization.doseQuantity = '12';
		immunization.note = [new Annotation({
			'authorReference': new Reference({
				'reference': 'Patient'
			}),
			'authorString': 'John Doe',
			'time': '2016-09-09T17:11:02-04:00'
		})];

		const explanation1 = new Explanation({
			'reason': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '429060002'
				})]
			})],
			'reasonNotGiven': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/v3/ActReason',
					'code': 'IMMUNE'
				})]
			})]
		});
		immunization.explanation = explanation1;

		const reaction1 = new Reaction({
			'date': '2016-09-10T13:11:02-04:00',
			'detail': new Reference({
				'reference': 'Observation'
			}),
			'reported': true
		});
		immunization.reaction = [reaction1];

		const vaccinationProtocol1 = new VaccinationProtocol({
			'doseSequence': '12',
			'description': 'details bout vaccine',
			'authority': new Reference({
				'reference': 'Organization'
			}),
			'series': 'Series 5',
			'seriesDoses': '2',
			'targetDisease': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '1857005'
				})]
			})],
			'doseStatus': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/vaccination-protocol-dose-status',
					'code': 'count'
				})]
			}),
			'doseStatusReason': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/vaccination-protocol-dose-status-reason',
					'code': 'advstorage'
				})]
			})
		});
		immunization.vaccinationProtocol = [vaccinationProtocol1];

		const expected = {
			'resourceType': 'Immunization',
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
			'status': 'completed',
			'date': '2016-09-10T13:11:02-04:00',
			'vaccineCode': {
				'coding': [{
					'system': 'Not Specified',
					'code': 'n/a'
				}]
			},
			'patient': {
				'reference': 'Patient'
			},
			'wasNotGiven': true,
			'reported': true,
			'performer': {
				'reference': 'Practitioner'
			},
			'requester': {
				'reference': 'Practitioner'
			},
			'encounter': {
				'reference': 'Encounter'
			},
			'manufacturer': {
				'reference': 'Organization'
			},
			'location': {
				'reference': 'Location'
			},
			'lotNumber': 'lot number 3',
			'expirationDate': '2001-05-06',
			'site': {
				'coding': [{
					'system': 'http://hl7.org/fhir/v3/ActSite',
					'code': 'LA'
				}]
			},
			'route': {
				'coding': [{
					'system': 'http://hl7.org/fhir/v3/RouteOfAdministration',
					'code': 'IM'
				}]
			},
			'doseQuantity': '12',
			'note': [{
				'authorReference': {
					'reference': 'Patient'
				},
				'authorString': 'John Doe',
				'time': '2016-09-09T17:11:02-04:00'
			}],
			'explanation': {
				'reason': [{
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '429060002'
					}]
				}],
				'reasonNotGiven': [{
					'coding': [{
						'system': 'http://hl7.org/fhir/v3/ActReason',
						'code': 'IMMUNE'
					}]
				}],
			},
			'reaction': [{
				'date': '2016-09-10T13:11:02-04:00',
				'detail': {
					'reference': 'Observation'
				},
				'reported': true
			}],
			'vaccinationProtocol': [{
				'doseSequence': '12',
				'description': 'details bout vaccine',
				'authority': {
					'reference': 'Organization'
				},
				'series': 'Series 5',
				'seriesDoses': '2',
				'targetDisease': [{
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '1857005'
					}]
				}],
				'doseStatus': {
					'coding': [{
						'system': 'http://hl7.org/fhir/vaccination-protocol-dose-status',
						'code': 'count'
					}]
				},
				'doseStatusReason': {
					'coding': [{
						'system': 'http://hl7.org/fhir/vaccination-protocol-dose-status-reason',
						'code': 'advstorage'
					}]
				}
			}]
		};

		expect(JSON.stringify(immunization)).toEqual(JSON.stringify(expected));
	});
});
