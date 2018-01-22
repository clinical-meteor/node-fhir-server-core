const path = require('path');
const { CarePlan, Activity, Detail } = require(path.resolve('./src/server/stu3/resources/CarePlan'));
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

		carePlan.definition = [new Reference({
			'reference': 'PlanDefinition'
		})];
		carePlan.basedOn = [new Reference({
			'reference': 'CarePlan'
		})];
		carePlan.replaces = [new Reference({
			'reference': 'CarePlan'
		})];
		carePlan.partOf = [new Reference({
			'reference': 'CarePlan'
		})];
		carePlan.status = 'suspended';
		carePlan.intent = 'plan';
		carePlan.category = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '288832002'
			})]
		})];
		carePlan.title = 'Care Plan';
		carePlan.description = 'A description';
		carePlan.subject = new Reference({
			'reference': 'Patient'
		});
		carePlan.context = new Reference({
			'reference': 'Encounter'
		});
		carePlan.period = new Period({
			'start': '2001-05-06'
		});
		carePlan.author = [new Reference({
			'reference': 'Patient'
		})];
		carePlan.careTeam = [new Reference({
			'reference': 'CareTeam'
		})];
		carePlan.addresses = [new Reference({
			'reference': 'Condition'
		})];
		carePlan.supportingInfo = [new Reference({
			'reference': 'Any'
		})];
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
			'definition': new Reference({
				'reference': 'PlanDefinition'
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
			'statusReason': 'A reason',
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
			'outcomeCodeableConcept': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '54777007'
				})]
			})],
			'outcomeReference': [new Reference({
				'reference': 'Any'
			})],
			'progress': [new Annotation({
				'authorReference': new Reference({
					'reference': 'RelatedPerson'
				}),
				'time': '2016-09-09T17:11:02-04:00'
			})],
			'reference': new Reference({
				'reference': 'Appointment'
			}),
			'detail': detail1
		});
		carePlan.activity = [activity1];

		carePlan.note = [new Annotation({
			'authorReference': new Reference({
				'reference': 'RelatedPerson'
			}),
			'time': '2016-09-09T17:11:02-04:00'
		})];

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
			'definition': [{
				'reference': 'PlanDefinition'
			}],
			'basedOn': [{
				'reference': 'CarePlan'
			}],
			'replaces': [{
				'reference': 'CarePlan'
			}],
			'partOf': [{
				'reference': 'CarePlan'
			}],
			'status': 'suspended',
			'intent': 'plan',
			'category': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '288832002'
				}]
			}],
			'title': 'Care Plan',
			'description': 'A description',
			'subject': {
				'reference': 'Patient'
			},
			'context': {
				'reference': 'Encounter'
			},
			'period': {
				'start': '2001-05-06'
			},
			'author': [{
				'reference': 'Patient'
			}],
			'careTeam': [{
				'reference': 'CareTeam'
			}],
			'addresses': [{
				'reference': 'Condition'
			}],
			'supportingInfo': [{
				'reference': 'Any'
			}],
			'goal': [{
				'reference': 'Goal'
			}],
			'activity': [{
				'outcomeCodeableConcept': [{
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '54777007'
					}]
				}],
				'outcomeReference': [{
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
					'definition': {
						'reference': 'PlanDefinition'
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
					'statusReason': 'A reason',
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
			'note': [{
				'authorReference': {
					'reference': 'RelatedPerson'
				},
				'time': '2016-09-09T17:11:02-04:00'
			}]
		};

		expect(JSON.stringify(carePlan)).toEqual(JSON.stringify(expected));
	});
});
