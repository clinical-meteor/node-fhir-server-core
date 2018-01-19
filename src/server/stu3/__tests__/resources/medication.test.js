const path = require('path');
const { Medication, Product, Ingredient, Batch, MedicationPackage, Content } = require(path.resolve('./src/server/stu3/resources/Medication'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Narrative = require(path.resolve('./src/server/stu3/resources/types/Narrative'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));
const Ratio = require(path.resolve('./src/server/stu3/resources/types/Ratio'));
const Quantity = require(path.resolve('./src/server/stu3/resources/types/Quantity'));

describe('Medication Resource Tests', () => {
	test('should create an Medication Object default type', () => {
		let medication = new Medication();

		const expected = {
			resourceType: 'Medication'
		};

		expect(medication).toBeInstanceOf(Medication);
		expect(medication.resourceType).toEqual('Medication');
		expect(JSON.stringify(medication)).toEqual(JSON.stringify(expected));
	});

	test('should validate Patient test object', () => {

		const medication = new Medication();
		medication.id = '13664';
		medication.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});
		medication.text = new Narrative({
			'status': 'generated',
			'div': '<div xmlns=\'http://www.w3.org/1999/xhtml\'> <table> <tbody> <tr> <td>Name</td> <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;) </td> </tr> <tr> <td>Address</td> <td>534 Erewhon, Pleasantville, Vic, 3999</td> </tr> <tr> <td>Contacts</td> <td>Home: unknown. Work: (03) 5555 6473</td> </tr> <tr> <td>Id</td> <td>MRN: 12345 (Acme Healthcare)</td> </tr> </tbody> </table> </div>'
		});

		medication.code = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '261000'
			})]
		});
		medication.isBrand = true;
		medication.manufacturer = new Reference({
			'reference': 'Organization'
		});

		const ingredient1 = new Ingredient({
			'item': new Reference({
				'reference': 'Medication'
			}),
			'amount': new Ratio({
				'numerator': new Quantity({
					'value': '10'
				}),
				'denominator': new Quantity({
					'value': '13'
				}),
			})
		});
		const batch1 = new Batch({
			'lotNumber': 'lot 12345',
			'expirationDate': '2016-09-09T13:11:02-04:00'
		});
		const product1 = new Product({
			'form': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '7946007'
				})]
			}),
			'ingredient': [ingredient1],
			'batch': [batch1]
		});
		medication.product = product1;

		const content1 = new Content({
			'item': new Reference({
				'reference': 'Medication'
			}),
			'amount': '15'
		});
		const medicationPackage1 = new MedicationPackage({
			'container': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '404218003'
				})]
			}),
			'content': [content1]
		});
		medication.medicationPackage = medicationPackage1;

		const expected = {
			resourceType: 'Medication',
			'id': '13664',
			'meta': {
				'versionId': '2',
				'lastUpdated': '2017-07-08T15:57:49.482-04:00'
			},
			'text': {
				'status': 'generated',
				'div': '<div xmlns=\'http://www.w3.org/1999/xhtml\'> <table> <tbody> <tr> <td>Name</td> <td>Peter James <b>Chalmers</b> (&quot;Jim&quot;) </td> </tr> <tr> <td>Address</td> <td>534 Erewhon, Pleasantville, Vic, 3999</td> </tr> <tr> <td>Contacts</td> <td>Home: unknown. Work: (03) 5555 6473</td> </tr> <tr> <td>Id</td> <td>MRN: 12345 (Acme Healthcare)</td> </tr> </tbody> </table> </div>'
			},
			'code': {
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '261000'
				}]
			},
			'isBrand': true,
			'manufacturer': {
				'reference': 'Organization'
			},
			'product': {
				'form': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '7946007'
					}]
				},
				'ingredient': [{
					'item': {
						'reference': 'Medication'
					},
					'amount': {
						'numerator': {
							'value': '10'
						},
						'denominator': {
							'value': '13'
						}
					}
				}],
				'batch': [{
					'lotNumber': 'lot 12345',
					'expirationDate': '2016-09-09T13:11:02-04:00'
				}]
			},
			'medicationPackage': {
				'container': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '404218003'
					}]
				},
				'content': [{
					'item': {
						'reference': 'Medication'
					},
					'amount': '15'
				}]
			}
		};

		expect(JSON.stringify(medication)).toEqual(JSON.stringify(expected));
	});
});
