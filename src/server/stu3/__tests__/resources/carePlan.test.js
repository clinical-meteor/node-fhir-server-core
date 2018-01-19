const path = require('path');
const { CarePlan, RelatedPlan, Participant, Detail, Activity } = require(path.resolve('./src/server/stu3/resources/CarePlan'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));
const Timing = require(path.resolve('./src/server/stu3/resources/types/Timing'));
const Annotation = require(path.resolve('./src/server/stu3/resources/types/Annotation'));

describe('CarePlan Resource Tests', () => {
	test('should create a CarePlan Object default type', () => {
		let carePlan = new CarePlan();

		const expected = {
			resourceType: 'CarePlan'
		};

		expect(carePlan).toBeInstanceOf(CarePlan);
		expect(carePlan.resourceType).toEqual('CarePlan');
		expect(JSON.stringify(carePlan)).toEqual(JSON.stringify(expected));
	});

	test('should validate CarePlan test object', () => {
		const carePlan = new CarePlan();
		carePlan.id = '11756';
		carePlan.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		carePlan.identifier = new Identifier({
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

		carePlan.subject = new Reference({
			'reference': 'Patient'
		});
		carePlan.status = 'proposed';
		carePlan.context = new Reference({
			'reference': 'Encounter'
		});
		carePlan.period = new Period({
			'start': '2001-05-06'
		});
		carePlan.author = [new Reference({
			'reference': 'Patient'
		})];
		carePlan.modified = '2017-07-08T15:57:49.482-04:00';
		carePlan.category = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '288832002'
			})]
		})];
		carePlan.description = 'A description';
		carePlan.addresses = [new Reference({
			'reference': 'Condition'
		})];
		carePlan.support = [new Reference({
			'reference': 'Any'
		})];

		const relatedPlan1 = new RelatedPlan({
			'code': 'includes',
			'plan': new Reference({
				'reference': 'CarePlan'
			})
		});
		carePlan.relatedPlan = [relatedPlan1];

		const participant1 = new Participant({
			'role': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '270002'
				})]
			}),
			'member': new Reference({
				'reference': 'Practitioner'
			})
		});
		carePlan.participant = [participant1];

		carePlan.goal = [new Reference({
			'reference': 'Goal'
		})];

		const detail1 = new Detail({
			'category': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/care-plan-activity-category',
					'code': 'diet'
				})]
			}),
			'code': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '104001'
				})]
			}),
			'reasonCode': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '109006'
				})]
			})],
			'reasonReference': [new Reference({
				'reference': 'Condition'
			})],
			'goal': [new Reference({
				'reference': 'Goal'
			})],
			'status': 'not-started',
			'statusReason': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/goal-status-reason',
					'code': 'surgery'
				})]
			}),
			'prohibited': true,
			'scheduledTiming': new Timing({
				'code': 'QD'
			}),
			'scheduledPeriod': new Period({
				'start': '2001-05-06'
			}),
			'scheduledString': 'schedule',
			'location': new Reference({
				'reference': 'Location'
			}),
			'performer': [new Reference({
				'reference': 'Practitioner'
			})],
			'productCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '261000'
				})]
			}),
			'productReference': new Reference({
				'reference': 'Medication'
			}),
			'dailyAmount': '12',
			'quantity': '13',
			'description': 'Extra information'
		});
		const activity1 = new Activity({
			'actionResulting': [new Reference({
				'reference': 'Any'
			})],
			'progress': new Annotation({
				'authorReference': new Reference({
					'reference': 'RelatedPerson'
				}),
				'time': '2016-09-09T17:11:02-04:00'
			}),
			'reference': new Reference({
				'reference': 'Appointment'
			}),
			'detail': detail1
		});
		carePlan.activity = [activity1];

		carePlan.note = new Annotation({
			'authorReference': new Reference({
				'reference': 'RelatedPerson'
			}),
			'time': '2016-09-09T17:11:02-04:00'
		});

		const expected = {
			resourceType: 'CarePlan',
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
			'status': 'proposed',
			'context': {
				'reference': 'Encounter'
			},
			'period': {
				'start': '2001-05-06'
			},
			'author': [{
				'reference': 'Patient'
			}],
			'modified': '2017-07-08T15:57:49.482-04:00',
			'category': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '288832002'
				}]
			}],
			'description': 'A description',
			'addresses': [{
				'reference': 'Condition'
			}],
			'support': [{
				'reference': 'Any'
			}],
			'relatedPlan': [{
				'code': 'includes',
				'plan': {
					'reference': 'CarePlan'
				}
			}],
			'participant': [{
				'role': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '270002'
					}]
				},
				'member': {
					'reference': 'Practitioner'
				}
			}],
			'goal': [{
				'reference': 'Goal'
			}],
			'activity': [{
				'actionResulting': [{
					'reference': 'Any'
				}],
				'progress': [{
					'authorReference': {
						'reference': 'RelatedPerson'
					},
					'time': '2016-09-09T17:11:02-04:00'
				}],
				'reference': {
					'reference': 'Appointment'
				},
				'detail': {
					'category': {
						'coding': [{
							'system': 'http://hl7.org/fhir/care-plan-activity-category',
							'code': 'diet'
						}]
					},
					'code': {
						'coding': [{
							'system': 'http://snomed.info/sct',
							'code': '104001'
						}]
					},
					'reasonCode': [{
						'coding': [{
							'system': 'http://snomed.info/sct',
							'code': '109006'
						}]
					}],
					'reasonReference': [{
						'reference': 'Condition'
					}],
					'goal': [{
						'reference': 'Goal'
					}],
					'status': 'not-started',
					'statusReason': {
						'coding': [{
							'system': 'http://hl7.org/fhir/goal-status-reason',
							'code': 'surgery'
						}]
					},
					'prohibited': true,
					'scheduledTiming': {
						'code': 'QD'
					},
					'scheduledPeriod': {
						'start': '2001-05-06'
					},
					'scheduledString': 'schedule',
					'location': {
						'reference': 'Location'
					},
					'performer': [{
						'reference': 'Practitioner'
					}],
					'productCodeableConcept': {
						'coding': [{
							'system': 'http://snomed.info/sct',
							'code': '261000'
						}]
					},
					'productReference': {
						'reference': 'Medication'
					},
					'dailyAmount': '12',
					'quantity': '13',
					'description': 'Extra information'
				}
			}],
			'note': {
				'authorReference': {
					'reference': 'RelatedPerson'
				},
				'time': '2016-09-09T17:11:02-04:00'
			}
		};

		expect(JSON.stringify(carePlan)).toEqual(JSON.stringify(expected));
	});
});
