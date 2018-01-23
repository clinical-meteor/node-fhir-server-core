const path = require('path');
const { DiagnosticReport, Performer, Image } = require(path.resolve('./src/server/stu3/resources/DiagnosticReport'));
const Metadata = require(path.resolve('./src/server/stu3/resources/types/Metadata'));
const Identifier = require(path.resolve('./src/server/stu3/resources/types/Identifier'));
const Period = require(path.resolve('./src/server/stu3/resources/types/Period'));
const Reference = require(path.resolve('./src/server/stu3/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/stu3/resources/types/CodeableConcept'));
const Coding = require(path.resolve('./src/server/stu3/resources/types/Coding'));
const Attachment = require(path.resolve('./src/server/stu3/resources/types/Attachment'));

describe('DiagnosticReport Resource Tests', () => {
	test('should create a DiagnosticReport Object default type', () => {
		let diagnosticReport = new DiagnosticReport();

		const expected = {
			resourceType: 'DiagnosticReport'
		};

		expect(diagnosticReport).toBeInstanceOf(DiagnosticReport);
		expect(diagnosticReport.resourceType).toEqual('DiagnosticReport');
		expect(JSON.stringify(diagnosticReport)).toEqual(JSON.stringify(expected));
	});

	test('should validate DiagnosticReport test object', () => {
		const diagnosticReport = new DiagnosticReport();
		diagnosticReport.id = '11756';
		diagnosticReport.meta = new Metadata({
			'versionId': '2',
			'lastUpdated': '2017-07-08T15:57:49.482-04:00'
		});

		diagnosticReport.identifier = new Identifier({
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

		diagnosticReport.basedOn = [new Reference({
			'reference': 'CarePlan'
		})];
		diagnosticReport.status = 'partial';
		diagnosticReport.category = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://hl7.org/fhir/v2/0074',
				'code': 'AU'
			})]
		});
		diagnosticReport.code = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://loinc.org',
				'code': '1-8'
			})]
		});
		diagnosticReport.subject = new Reference({
			'reference': 'Patient'
		});
		diagnosticReport.context = new Reference({
			'reference': 'Encounter'
		});
		diagnosticReport.effectiveDateTime = '2016-09-09T13:11:02-04:00';
		diagnosticReport.effectivePeriod = new Period({
			'start': '2001-05-06'
		});
		diagnosticReport.issued = '2016-09-09T13:11:02-04:00';

		const performer1 = new Performer({
			'role': new CodeableConcept({
				'coding': [new Coding({
					'system': 'http://snomed.info/sct',
					'code': '1421009'
				})]
			}),
			'actor': new Reference({
				'reference': 'Practitioner'
			})
		});
		diagnosticReport.performer = [performer1];

		diagnosticReport.specimen = [new Reference({
			'reference': 'Specimen'
		})];
		diagnosticReport.result = [new Reference({
			'reference': 'Observation'
		})];
		diagnosticReport.imagingStudy = [new Reference({
			'reference': 'ImagingStudy'
		})];

		const image1 = new Image({
			'comment': 'comment about the image',
			'link': new Reference({
				'reference': 'Media'
			})
		});
		diagnosticReport.image = [image1];

		diagnosticReport.conclusion = 'Clinical Interpretation';
		diagnosticReport.codedDiagnosis = new CodeableConcept({
			'coding': [new Coding({
				'system': 'http://snomed.info/sct',
				'code': '109006'
			})]
		});
		diagnosticReport.presentedForm = new Attachment({
			'contentType': 'Mime type'
		});

		const expected = {
			'resourceType': 'DiagnosticReport',
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
			'basedOn': [{
				'reference': 'CarePlan'
			}],
			'status': 'partial',
			'category': {
				'coding': [{
					'system': 'http://hl7.org/fhir/v2/0074',
					'code': 'AU'
				}]
			},
			'code': {
				'coding': [{
					'system': 'http://loinc.org',
					'code': '1-8'
				}]
			},
			'subject': {
				'reference': 'Patient'
			},
			'context': {
				'reference': 'Encounter'
			},
			'effectiveDateTime': '2016-09-09T13:11:02-04:00',
			'effectivePeriod': {
				'start': '2001-05-06'
			},
			'issued': '2016-09-09T13:11:02-04:00',
			'performer': [{
				'role': {
					'coding': [{
						'system': 'http://snomed.info/sct',
						'code': '1421009'
					}]
				},
				'actor': {
					'reference': 'Practitioner'
				}
			}],
			'specimen': [{
				'reference': 'Specimen'
			}],
			'result': [{
				'reference': 'Observation'
			}],
			'imagingStudy': [{
				'reference': 'ImagingStudy'
			}],
			'image': [{
				'comment': 'comment about the image',
				'link': {
					'reference': 'Media'
				}
			}],
			'conclusion': 'Clinical Interpretation',
			'codedDiagnosis': [{
				'coding': [{
					'system': 'http://snomed.info/sct',
					'code': '109006'
				}]
			}],
			'presentedForm': [{
				'contentType': 'Mime type'
			}]
		};

		expect(JSON.stringify(diagnosticReport)).toEqual(JSON.stringify(expected));
	});
});
