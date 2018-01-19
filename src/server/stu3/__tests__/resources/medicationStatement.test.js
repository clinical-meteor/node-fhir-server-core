const path = require('path');
const { MedicationStatement, Dosage } = require(path.resolve('./src/server/stu3/resources/MedicationStatement'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));
const Timing = require(path.resolve('./src/server/stu3/resources/types/Timing'));
const Range = require(path.resolve('./src/server/stu3/resources/types/Range'));
const Ratio = require(path.resolve('./src/server/stu3/resources/types/Ratio'));
const Quantity = require(path.resolve('./src/server/stu3/resources/types/Quantity'));

describe('MedicationStatement Resource Tests', () => {
	test('should create an MedicationStatement Object default type', () => {
		let medicationStatement = new MedicationStatement();

		const expected = {
			resourceType: 'MedicationStatement'
		};

		expect(medicationStatement).toBeInstanceOf(MedicationStatement);
		expect(medicationStatement.resourceType).toEqual('MedicationStatement');
		expect(JSON.stringify(medicationStatement)).toEqual(JSON.stringify(expected));
	});

	test('should validate MedicationStatement test object', () => {
		const medicationStatement = new MedicationStatement();
		medicationStatement.id = '11756';
		medicationStatement.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		medicationStatement.identifier = new Identifier({
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

		medicationStatement.patient = new Reference({
			'reference': 'Patient'
		});
		medicationStatement.informationSource = new Reference({
			'reference': 'Patient'
		});
		medicationStatement.dateAsserted = '2017-07-08T15:57:49.482-04:00';
		medicationStatement.status = 'active';
		medicationStatement.wasNotTaken = true;
		medicationStatement.reasonNotTaken = [new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/reason-medication-not-given',
				'code': 'a'
			})]
		})];
		medicationStatement.reasonForUseCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '109006'
			})]
		});
		medicationStatement.reasonForUseReference = new Reference({
			'reference': 'Period'
		});
		medicationStatement.effectiveDateTime = '2017-07-08T15:57:49.482-04:00';
		medicationStatement.effectivePeriod = new Period({
			'start': '2001-05-06'
		});
		medicationStatement.note = 'More information';
		medicationStatement.supportingInformation = [new Reference({
			'reference': 'Any'
		})];
		medicationStatement.medicationCodeableConcept = new CodeableConcept({
			'coding': [new Coding({
				'system': 'Not specified',
				'code': 'n/a'
			})]
		});
		medicationStatement.medicationReference = new Reference({
			'reference': 'Medication'
		});

		const dosage1 = new Dosage({
			'text': 'Dosage information',
			'timing': new Timing({
				'code': 'QD'
			}),
			'asNeededBoolean': true,
			'asNeededCodeableConcept': new CodeableConcept({
				'coding': [new Coding({
					'system': 'Not specified',
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
					'system': 'Not specified',
					'code': 'n/a'
				})]
			}),
			'quantityQuantity': '12',
			'quantityRange': new Range({
				'low': '1',
				'high': '10'
			}),
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
		medicationStatement.dosage = [dosage1];

		const expected = {
			'resourceType': 'MedicationStatement',
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
			'patient': {
				'reference': 'Patient'
			},
			'informationSource': {
				'reference': 'Patient'
			},
			'dateAsserted': '2017-07-08T15:57:49.482-04:00',
			'status': 'active',
			'wasNotTaken': true,
			'reasonNotTaken': [{
				'coding': [{
					'system': 'http://hl7.org/fhir/reason-medication-not-given',
					'code': 'a'
				}]
			}],
			'reasonForUseCodeableConcept': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '109006'
				}]
			},
			'reasonForUseReference': {
				'reference': 'Period'
			},
			'effectiveDateTime': '2017-07-08T15:57:49.482-04:00',
			'effectivePeriod': {
				'start': '2001-05-06'
			},
			'note': 'More information',
			'supportingInformation': [{
				'reference': 'Any'
			}],
			'medicationCodeableConcept': {
				'coding': [{
					'system': 'Not specified',
					'code': 'n/a'
				}]
			},
			'medicationReference': {
				'reference': 'Medication'
			},
			'dosage': [{
				'text': 'Dosage information',
				'timing': {
					'code': 'QD'
				},
				'asNeededBoolean': true,
				'asNeededCodeableConcept': {
					'coding': [{
						'system': 'Not specified',
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
						'system': 'Not specified',
						'code': 'n/a'
					}]
				},
				'quantityQuantity': '12',
				'quantityRange': {
					'low': '1',
					'high': '10'
				},
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
				},
			}]
		};

		expect(JSON.stringify(medicationStatement)).toEqual(JSON.stringify(expected));
	});
});
