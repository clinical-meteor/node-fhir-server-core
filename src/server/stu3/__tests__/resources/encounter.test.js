const path = require('path');
const { Encounter, StatusHistory, ClassHistory, Participant, Diagnosis, Hospitalization, Location } = require(path.resolve('./src/server/stu3/resources/Encounter'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));

describe('Encounter Resource Tests', () => {
	test('should create an Encounter Object default type', () => {
		let encounter = new Encounter();

		const expected = {
			resourceType: 'Encounter'
		};

		expect(encounter).toBeInstanceOf(Encounter);
		expect(encounter.resourceType).toEqual('Encounter');
		expect(JSON.stringify(encounter)).toEqual(JSON.stringify(expected));
	});

	test('should validate Encounter test object', () => {
		const encounter = new Encounter();
		encounter.id = '11756';
		encounter.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		encounter.identifier = new Identifier({
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
		encounter.status = 'planned';

		const statusHistory1 = new StatusHistory({
			'status': 'planned',
			'period': new Period({
				'start': '2001-05-06'
			})
		});
		encounter.statusHistory = [statusHistory1];
		encounter.encounterClass = new Coding({
			'system': 'http://hl7.org/fhir/v3/ActCode',
			'code': 'AMB'
		});

		const classHistory1 = new ClassHistory({
			'classHistoryClass': new Coding({
				'system': 'http://hl7.org/fhir/v3/ActCode',
				'code': 'AMB'
			}),
			'period': new Period({
				'start': '2001-05-06'
			})
		});
		encounter.classHistory = [classHistory1];

		encounter.type = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/encounter-type',
				'code': 'ADMS'
			})]
		})];
		encounter.priority = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/encounter-priority',
				'code': 'imm'
			})]
		});
		encounter.subject = new Reference({
			'reference': 'Patient'
		});
		encounter.episodeOfCare = [new Reference({
			'reference': 'EpisodeOfCare'
		})];
		encounter.incomingReferral = [new Reference({
			'reference': 'ReferralRequest'
		})];

		const participant1 = new Participant({
			'type': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/participant-type',
					'code': 'translator'
				})]
			})],
			'period': new Period({
				'start': '2001-05-06'
			}),
			'individual': new Reference({
				'reference': 'Practitioner'
			})
		});
		encounter.participant = [participant1];

		encounter.appointment = new Reference({
			'reference': 'Appointment'
		});
		encounter.period = new Period({
			'start': '2001-05-06'
		});
		encounter.length = '2 Hours';
		encounter.reason = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '109006'
			})]
		})];

		const diagnosis1 = new Diagnosis({
			'condition': new Reference({
				'reference': 'Condition'
			}),
			'role': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/diagnosis-role',
					'code': 'AD'
				})]
			}),
			'rank': '12'
		});
		encounter.diagnosis = [diagnosis1];
		encounter.account = [new Reference({
			'reference': 'Account'
		})];

		const hospitalization1 = new Hospitalization({
			'preAdmissionIdentifier': new Identifier({
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
			}),
			'origin': new Reference({
				'reference': 'Location'
			}),
			'admitSource': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/admit-source',
					'code': 'emd'
				})]
			}),
			'reAdmission': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
				})]
			}),
			'dietPreference': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/diet',
					'code': 'vegetarian'
				})]
			})],
			'specialCourtesy': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/v3/EncounterSpecialCourtesy',
					'code': 'EXT'
				})]
			})],
			'specialArrangement': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/encounter-special-arrangements',
					'code': 'wheel'
				})]
			})],
			'destination': new Reference({
				'reference': 'Location'
			}),
			'dischargeDisposition': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/discharge-disposition',
					'code': 'home'
				})]
			}),
		});
		encounter.hospitalization = hospitalization1;

		const location1 = new Location({
			'location': new Reference({
				'reference': 'Location'
			}),
			'status': 'planned',
			'period': new Period({
				'start': '2001-05-06'
			})
		});
		encounter.location = [location1];

		encounter.serviceProvider = new Reference({
			'reference': 'Organization'
		});
		encounter.partOf = new Reference({
			'reference': 'Encounter'
		});

		const expected = {
			'resourceType': 'Encounter',
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
			'status': 'planned',
			'statusHistory': [{
				'status': 'planned',
				'period': {
					'start': '2001-05-06'
				}
			}],
			'encounterClass': {
				'system': 'http://hl7.org/fhir/v3/ActCode',
				'code': 'AMB'
			},
			'classHistory': [{
				'classHistoryClass': {
					'system': 'http://hl7.org/fhir/v3/ActCode',
					'code': 'AMB'
				},
				'period': {
					'start': '2001-05-06'
				}
			}],
			'type': [{
				'coding': [{
					'system': 'http://hl7.org/fhir/encounter-type',
					'code': 'ADMS'
				}]
			}],
			'priority': {
				'coding': [{
					'system': 'http://hl7.org/fhir/encounter-priority',
					'code': 'imm'
				}]
			},
			'subject': {
				'reference': 'Patient'
			},
			'episodeOfCare': [{
				'reference': 'EpisodeOfCare'
			}],
			'incomingReferral': [{
				'reference': 'ReferralRequest'
			}],
			'participant': [{
				'type': [{
					'coding': [{
						'system': 'http://hl7.org/fhir/participant-type',
						'code': 'translator'
					}]
				}],
				'period': {
					'start': '2001-05-06'
				},
				'individual': {
					'reference': 'Practitioner'
				}
			}],
			'appointment': {
				'reference': 'Appointment'
			},
			'period': {
				'start': '2001-05-06'
			},
			'length': '2 Hours',
			'reason': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '109006'
				}]
			}],
			'diagnosis': [{
				'condition': {
					'reference': 'Condition'
				},
				'role': {
					'coding': [{
						'system': 'http://hl7.org/fhir/diagnosis-role',
						'code': 'AD'
					}]
				},
				'rank': '12'
			}],
			'account': [{
				'reference': 'Account'
			}],
			'hospitalization': {
				'preAdmissionIdentifier': {
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
				},
				'origin': {
					'reference': 'Location'
				},
				'admitSource': {
					'coding': [{
						'system': 'http://hl7.org/fhir/admit-source',
						'code': 'emd'
					}]
				},
				'reAdmission': {
					'coding': [{
						'system': 'Not Specified',
						'code': 'n/a'
					}]
				},
				'dietPreference': [{
					'coding': [{
						'system': 'http://hl7.org/fhir/diet',
						'code': 'vegetarian'
					}]
				}],
				'specialCourtesy': [{
					'coding': [{
						'system': 'http://hl7.org/fhir/v3/EncounterSpecialCourtesy',
						'code': 'EXT'
					}]
				}],
				'specialArrangement': [{
					'coding': [{
						'system': 'http://hl7.org/fhir/encounter-special-arrangements',
						'code': 'wheel'
					}]
				}],
				'destination': {
					'reference': 'Location'
				},
				'dischargeDisposition': {
					'coding': [{
						'system': 'http://hl7.org/fhir/discharge-disposition',
						'code': 'home'
					}]
				},
			},
			'location': [{
				'location': {
					'reference': 'Location'
				},
				'status': 'planned',
				'period': {
					'start': '2001-05-06'
				}
			}],
			'serviceProvider': {
				'reference': 'Organization'
			},
			'partOf': {
				'reference': 'Encounter'
			}
		};

		expect(JSON.stringify(encounter)).toEqual(JSON.stringify(expected));
	});
});
