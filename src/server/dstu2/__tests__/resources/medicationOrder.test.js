const path = require('path');
const { MedicationOrder, DosageInstruction, DispenseRequest, Substitution } = require(path.resolve('./src/server/dstu2/resources/MedicationOrder'));
const Metadata = require(path.resolve('./src/server/dstu2/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/dstu2/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/dstu2/resources/types/Period'));
const Reference = require(path.resolve('./src/server/dstu2/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/dstu2/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/dstu2/resources/types/Coding'));
const Range = require(path.resolve('./src/server/dstu2/resources/types/Range'));
const Ratio = require(path.resolve('./src/server/dstu2/resources/types/Ratio'));
const Quantity = require(path.resolve('./src/server/dstu2/resources/types/Quantity'));
const Timing = require(path.resolve('./src/server/dstu2/resources/types/Timing'));

describe('MedicationOrder Resource Tests', () => {
	test('should create an MedicationOrder Object default type', () => {
		let medicationOrder = new MedicationOrder();

		const expected = {
			resourceType: 'MedicationOrder'
		};

		expect(medicationOrder).toBeInstanceOf(MedicationOrder);
		expect(medicationOrder.resourceType).toEqual('MedicationOrder');
		expect(JSON.stringify(medicationOrder)).toEqual(JSON.stringify(expected));
	});

	test('should validate MedicationOrder test object', () => {
		const medicationOrder = new MedicationOrder();
		medicationOrder.id = '11756';
		medicationOrder.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		medicationOrder.identifier = new Identifier({
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

		medicationOrder.dateWritten = '2016-09-09T13:11:02-04:00';
		medicationOrder.status = 'active';
		medicationOrder.dateEnded = '2016-09-09T13:11:02-04:00';
		medicationOrder.reasonEnded = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not Specified',
				'code': 'n/a'
			})]
		});
		medicationOrder.patient = new Reference({
			'reference': 'Patient'
		});
		medicationOrder.prescriber = new Reference({
			'reference': 'Practitioner'
		});
		medicationOrder.encounter = new Reference({
			'reference': 'Encounter'
		});
		medicationOrder.reasonCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '109006'
			})]
		});
		medicationOrder.reasonReference = new Reference({
			'reference': 'Condition'
		});
		medicationOrder.note = 'Info bout neds';
		medicationOrder.medicationCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not Specified',
				'code': 'n/a'
			})]
		});
		medicationOrder.medicationReference = new Reference({
			'reference': 'Medication'
		});

		const dosageInstruction1 = new DosageInstruction({
			'text': 'Eat it',
			'additionalInstructions': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
				})]
			}),
			'timing': new Timing({
				'code': 'QD'
			}),
			'asNeededBoolean': true,
			'asNeededCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
				})]
			}),
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
			}),
		});
		medicationOrder.dosageInstruction = [dosageInstruction1];

		const dispenseRequest1 = new DispenseRequest({
			'medicationCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not Specified',
					'code': 'n/a'
				})]
			}),
			'medicationReference': new Reference({
				'reference': 'Medication'
			}),
			'validityPeriod': new Period({
				'start': '2001-05-06'
			}),
			'numberOfRepeatsAllowed': '12',
			'quantity': '13',
			'expectedSupplyDuration': '5'
		});
		medicationOrder.dispenseRequest = dispenseRequest1;

		const substitution1 = new Substitution({
			'type': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/v3/substanceAdminSubstitution',
					'code': 'E'
				})]
			}),
			'reason': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://hl7.org/fhir/v3/ActReason',
					'code': 'CT'
				})]
			})
		});
		medicationOrder.substitution = substitution1;
		medicationOrder.priorPrescription = new Reference({
			'reference': 'MedicationOrder'
		});

		const expected = {
			'resourceType': 'MedicationOrder',
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
			'dateWritten': '2016-09-09T13:11:02-04:00',
			'status': 'active',
			'dateEnded': '2016-09-09T13:11:02-04:00',
			'reasonEnded': {
				'coding': [{
					'system': 'Not Specified',
					'code': 'n/a'
				}]
			},
			'patient': {
				'reference': 'Patient'
			},
			'prescriber': {
				'reference': 'Practitioner'
			},
			'encounter': {
				'reference': 'Encounter'
			},
			'reasonCodeableConcept': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '109006'
				}]
			},
			'reasonReference': {
				'reference': 'Condition'
			},
			'note': 'Info bout neds',
			'medicationCodeableConcept': {
				'coding': [{
					'system': 'Not Specified',
					'code': 'n/a'
				}]
			},
			'medicationReference': {
				'reference': 'Medication'
			},
			'dosageInstruction': [{
				'text': 'Eat it',
				'additionalInstructions': {
					'coding': [{
						'system': 'Not Specified',
						'code': 'n/a'
					}]
				},
				'timing': {
					'code': 'QD'
				},
				'asNeededBoolean': true,
				'asNeededCodeableConcept': {
					'coding': [{
						'system': 'Not Specified',
						'code': 'n/a'
					}]
				},
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
			'dispenseRequest': {
				'medicationCodeableConcept': {
					'coding': [{
						'system': 'Not Specified',
						'code': 'n/a'
					}]
				},
				'medicationReference': {
					'reference': 'Medication'
				},
				'validityPeriod': {
					'start': '2001-05-06'
				},
				'numberOfRepeatsAllowed': '12',
				'quantity': '13',
				'expectedSupplyDuration': '5'
			},
			'substitution': {
				'type': {
					'coding': [{
						'system': 'http://hl7.org/fhir/v3/substanceAdminSubstitution',
						'code': 'E'
					}]
				},
				'reason': {
					'coding': [{
						'system': 'http://hl7.org/fhir/v3/ActReason',
						'code': 'CT'
					}]
				}
			},
			'priorPrescription': {
				'reference': 'MedicationOrder'
			}
		};

		expect(JSON.stringify(medicationOrder)).toEqual(JSON.stringify(expected));
	});
});
