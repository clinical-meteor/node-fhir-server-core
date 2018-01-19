const path = require('path');
const { MedicationDispense, Substitution, DosageInstruction } = require(path.resolve('./src/server/stu3/resources/MedicationDispense'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));
const Timing = require(path.resolve('./src/server/stu3/resources/types/Timing'));
const Ratio = require(path.resolve('./src/server/stu3/resources/types/Ratio'));
const Range = require(path.resolve('./src/server/stu3/resources/types/Range'));
const Quantity = require(path.resolve('./src/server/stu3/resources/types/Quantity'));

describe('MedicationDispense Resource Tests', () => {
	test('should create an MedicationDispense Object default type', () => {
		let medicationDispense = new MedicationDispense();

		const expected = {
			resourceType: 'MedicationDispense'
		};

		expect(medicationDispense).toBeInstanceOf(MedicationDispense);
		expect(medicationDispense.resourceType).toEqual('MedicationDispense');
		expect(JSON.stringify(medicationDispense)).toEqual(JSON.stringify(expected));
	});

	test('should validate medicationDispense test object', () => {
		const medicationDispense = new MedicationDispense();
		medicationDispense.id = '11756';
		medicationDispense.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		medicationDispense.identifier = new Identifier({
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

		medicationDispense.status = 'in-progress';
		medicationDispense.patient = new Reference({
			'reference': 'Patient'
		});
		medicationDispense.dispenser = new Reference({
			'reference': 'Practitioner'
		});
		medicationDispense.authorizingPrescription = [new Reference({
			'reference': 'MedicationOrder'
		})];
		medicationDispense.type = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/v3/ActCode',
				'code': 'DF'
			})]
		});
		medicationDispense.quantity = '100';
		medicationDispense.daysSupply = '30';
		medicationDispense.medicationCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not Specified',
				'code': 'n/a'
			})]
		});
		medicationDispense.medicationReference = new Reference({
			'reference': 'Medication'
		});
		medicationDispense.whenPrepared = '2016-09-09T13:11:02-04:00';
		medicationDispense.whenHandedOver = '2016-09-09T13:11:02-04:00';
		medicationDispense.destination = new Reference({
			'reference': 'Location'
		});
		medicationDispense.receiver = new Reference({
			'reference': 'Patient'
		});
		medicationDispense.note = 'notes about dispense';

		const dosageInstruction1 = new DosageInstruction({
			'text': 'Eat it',
			'additionalInstructions': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
				})]
			}),
			'timing': new Timing({
				'event': '2016-09-09T13:11:02-04:00'
			}),
			'asNeededBoolean': true,
			'asNeededCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '106004'
				})]
			}),
			'siteCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
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
			'doseRange': new Range({
				'low': '1',
				'high': '10'
			}),
			'doseQuantity': '12',
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
			}),
			'maxDosePerPeriod': new Ratio({
				'numerator': new Quantity({
					'value': '10'
				}),
				'denominator': new Quantity({
					'value': '13'
				}),
			})
		});
		medicationDispense.dosageInstruction = [dosageInstruction1];

		const substitution1 = new Substitution({
			'type': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/v3/substanceAdminSubstitution',
					'code': 'E'
				})]
			}),
			'reason': [new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/v3/ActReason',
					'code': 'CT'
				})]
			})],
			'responsibleParty': [new Reference({
				'reference': 'Practitioner'
			})]
		});
		medicationDispense.substitution = substitution1;

		const expected = {
				'resourceType': 'MedicationDispense',
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
				'dispenser': {
					'reference': 'Practitioner'
				},
				'authorizingPrescription': [{
					'reference': 'MedicationOrder'
				}],
				'type': {
					'coding': [{
						'system': 'http://hl7.org/fhir/v3/ActCode',
						'code': 'DF'
					}]
				},
				'quantity': '100',
				'daysSupply': '30',
				'medicationCodeableConcept': {
					'coding': [{
						'system': 'Not Specified',
						'code': 'n/a'
					}]
				},
				'medicationReference': {
					'reference': 'Medication'
				},
				'whenPrepared': '2016-09-09T13:11:02-04:00',
				'whenHandedOver': '2016-09-09T13:11:02-04:00',
				'destination': {
					'reference': 'Location'
				},
				'receiver': [{
					'reference': 'Patient'
				}],
				'note': 'notes about dispense',
				'dosageInstruction': [{
					'text': 'Eat it',
					'additionalInstructions': {
						'coding': [{
							'system': 'Not Specified',
							'code': 'n/a'
						}]
					},
					'timing': {
						'event': ['2016-09-09T13:11:02-04:00']
					},
					'asNeededBoolean': true,
					'asNeededCodeableConcept': {
						'coding': [{
							'system': 'http://snomed.info/sct',
							'code': '106004'
						}]
					},
					'siteCodeableConcept': {
						'coding': [{
							'system': 'Not Specified',
							'code': 'n/a'
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
					'doseRange': {
						'low': '1',
						'high': '10'
					},
					'doseQuantity': '12',
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
					},
					'maxDosePerPeriod': {
						'numerator': {
							'value': '10'
						},
						'denominator': {
							'value': '13'
						},
					}
				}],
				'substitution': {
					'type': {
						'coding': [{
							'system': 'http://hl7.org/fhir/v3/substanceAdminSubstitution',
							'code': 'E'
						}]
					},
					'reason': [{
						'coding': [{
							'system': 'http://hl7.org/fhir/v3/ActReason',
							'code': 'CT'
						}]
					}],
					'responsibleParty': [{
						'reference': 'Practitioner'
					}]
				}
		};

		expect(JSON.stringify(medicationDispense)).toEqual(JSON.stringify(expected));
	});
});
