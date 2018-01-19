const path = require('path');
const { ImagingStudy, Series, Instance } = require(path.resolve('./src/server/dstu2/resources/ImagingStudy'));
const Metadata = require(path.resolve('./src/server/dstu2/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/dstu2/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/dstu2/resources/types/Period'));
const Reference = require(path.resolve('./src/server/dstu2/resources/types/Reference'));
const Coding = require(path.resolve('./src/server/dstu2/resources/types/Coding'));
const Attachment = require(path.resolve('./src/server/dstu2/resources/types/Attachment'));

describe('ImagingStudy Resource Tests', () => {
	test('should create an ImagingStudy Object default type', () => {
		let imagingStudy = new ImagingStudy();

		const expected = {
			resourceType: 'ImagingStudy'
		};

		expect(imagingStudy).toBeInstanceOf(ImagingStudy);
		expect(imagingStudy.resourceType).toEqual('ImagingStudy');
		expect(JSON.stringify(imagingStudy)).toEqual(JSON.stringify(expected));
	});

	test('should validate ImagingStudy test object', () => {
		const imagingStudy = new ImagingStudy();
		imagingStudy.id = '11756';
		imagingStudy.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		imagingStudy.started = '2017-07-08T15:57:49.482-04:00';
		imagingStudy.patient = new Reference({
			'reference': 'Patient'
		});
		imagingStudy.uid = '1.2.3.4.5';
		imagingStudy.accession = new Identifier({
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
		imagingStudy.identifier = new Identifier({
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
		imagingStudy.order = [new Reference({
			'reference': 'DiagnosticOrder'
		})];
		imagingStudy.modalityList = [new Coding({
			'system': 'http://nema.org/dicom/dicm',
			'code': 'AR'
		})];
		imagingStudy.referrer = new Reference({
			'reference': 'Practitioner'
		});
		imagingStudy.availability = 'ONLINE';
		imagingStudy.url = 'http://nema.org/dicom/dicm';
		imagingStudy.numberOfSeries = '12';
		imagingStudy.numberOfInstances = '13';
		imagingStudy.procedure = [new Reference({
			'reference': 'Procedure'
		})];
		imagingStudy.interpreter = new Reference({
			'reference': 'Practitioner'
		});
		imagingStudy.description = 'A description';

		const instance1 = new Instance({
			'number': '12',
			'uid': '1.2.3.4.5',
			'sopClass': '1.2.3.4.5',
			'type': 'Image',
			'title': 'It is an image',
			'content': [new Attachment({
				'creation': '2017-07-08T15:57:49.482-04:00'
			})]
		});
		const series1 = new Series({
			'number': '12',
			'modality': new Coding({
				'system': 'http://nema.org/dicom/dicm',
				'code': 'AR'
			}),
			'uid': '1.2.3.4.5',
			'description': 'A description',
			'numberOfInstances': '13',
			'availability': 'ONLINE',
			'url': 'http://nema.org/dicom/dicm',
			'bodySite': new Coding({
				'system': 'http://snomed.info/sct',
				'code': '106004'
			}),
			'laterality': new Coding({
				'system': 'http://snomed.info/sct',
				'code': '419161000'
			}),
			'started': '2017-07-08T15:57:49.482-04:00',
			'instance': [instance1]
		});
		imagingStudy.series = [series1];

		const expected = {
			'resourceType': 'ImagingStudy',
			'id': '11756',
			'meta': {
				'versionId': '2',
				'lastUpdated': '2017-07-08T15:57:49.482-04:00'
			},
			'started': '2017-07-08T15:57:49.482-04:00',
			'patient': {
				'reference': 'Patient'
			},
			'uid': {
				'oid': '1.2.3.4.5'
			},
			'accession': {
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
			'order': [{
				'reference': 'DiagnosticOrder'
			}],
			'modalityList': [{
				'system': 'http://nema.org/dicom/dicm',
				'code': 'AR'
			}],
			'referrer': {
				'reference': 'Practitioner'
			},
			'availability': 'ONLINE',
			'url': 'http://nema.org/dicom/dicm',
			'numberOfSeries': '12',
			'numberOfInstances': '13',
			'procedure': [{
				'reference': 'Procedure'
			}],
			'interpreter': {
				'reference': 'Practitioner'
			},
			'description': 'A description',
			'series': [{
				'number': '12',
				'modality': {
					'system': 'http://nema.org/dicom/dicm',
					'code': 'AR'
				},
				'uid': {
					'oid': '1.2.3.4.5'
				},
				'description': 'A description',
				'numberOfInstances': '13',
				'availability': 'ONLINE',
				'url': 'http://nema.org/dicom/dicm',
				'bodySite': {
					'system': 'http://snomed.info/sct',
					'code': '106004'
				},
				'laterality': {
					'system': 'http://snomed.info/sct',
					'code': '419161000'
				},
				'started': '2017-07-08T15:57:49.482-04:00',
				'instance': [{
					'number': '12',
					'uid': {
						'oid': '1.2.3.4.5'
					},
					'sopClass': {
						'oid': '1.2.3.4.5'
					},
					'type': 'Image',
					'title': 'It is an image',
					'content': [{
						'creation': '2017-07-08T15:57:49.482-04:00'
					}]
				}]
			}]
		};

		expect(JSON.stringify(imagingStudy)).toEqual(JSON.stringify(expected));
	});
});
