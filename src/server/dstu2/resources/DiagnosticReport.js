const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Attachment = require('./types/Attachment');

class Image {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// comment		0..1 	string	Comment about the image (e.g. explanation)
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// link	Σ	1..1	 Reference(Media)	Reference to the image source
	set link(link) {
		this._link = new Reference(link);
	}

	get link() {
		return this._link;
	}

	toJSON() {
		return {
			comment: this._comment,
			link: this._link
		};
	}
}

class DiagnosticReport extends DomainResource{
	constructor(obj) {
		super();
		this._resourceType = 'DiagnosticReport';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	Id for external references to this report
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?! Σ	1..1 	code 	registered | partial | final | corrected | appended | cancelled | entered-in-error
	// DiagnosticReportStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..1 	CodeableConcept	Service category
	// Diagnostic Service Section Codes (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	Σ	1..1	 CodeableConcept	Name/Code for this diagnostic report
	// LOINC Diagnostic Report Codes (Preferred)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1 	Reference(Patient | Group | Device | Location)	The subject of the report, usually, but not always, the patient
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// encounter	Σ	0..1	 Reference(Encounter)	Health care event when test ordered
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// Σ	1..1		Clinically Relevant time/time-period for report
	// effectiveDateTime			dateTime
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// Σ	1..1		Clinically Relevant time/time-period for report
	// effectivePeriod			Period
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// issued	Σ	1..1	 instant	DateTime this version was released
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// performer	Σ	1..1	 Reference(Practitioner | Organization)	Responsible Diagnostic Service
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// request		0..* 	Reference(DiagnosticOrder | ProcedureRequest | ReferralRequest)	What was requested
	set request(request) {
		if (Array.isArray(request)) {
			this._request = request.map((i) => new Reference(i));
		} else {
			this._request = [new Reference(request)];
		}
	}

	get request() {
		return this._request;
	}

	// specimen		0..*	 Reference(Specimen)	Specimens this report is based on
	set specimen(specimen) {
		if (Array.isArray(specimen)) {
			this._specimen = specimen.map((i) => new Reference(i));
		} else {
			this._specimen = [new Reference(specimen)];
		}
	}

	get specimen() {
		return this._specimen;
	}

	// result		0..*	 Reference(Observation)	Observations - simple, or complex nested groups
	set result(result) {
		if (Array.isArray(result)) {
			this._result = result.map((i) => new Reference(i));
		} else {
			this._result = [new Reference(result)];
		}
	}

	get result() {
		return this._result;
	}

	// imagingStudy		0..*	 Reference(ImagingStudy | ImagingObjectSelection)	Reference to full details of imaging associated with the diagnostic report
	set imagingStudy(imagingStudy) {
		if (Array.isArray(imagingStudy)) {
			this._imagingStudy = imagingStudy.map((i) => new Reference(i));
		} else {
			this._imagingStudy = [new Reference(imagingStudy)];
		}
	}

	get imagingStudy() {
		return this._imagingStudy;
	}

	// image	Σ	0..*	 BackboneElement	Key images associated with this report
	set image(image) {
		if (Array.isArray(image)) {
			this._image = image.map((i) => new Image(i));
		} else {
			this._image = [new Image(image)];
		}
	}

	get image() {
		return this._image;
	}

	// conclusion		0..1	 string	Clinical Interpretation of test results
	set conclusion(conclusion) {
		this._conclusion = conclusion;
	}

	get conclusion() {
		return this._conclusion;
	}

	// codedDiagnosis		0..*	 CodeableConcept	Codes for the conclusion
	// SNOMED CT Clinical Findings (Example)
	set codedDiagnosis(codedDiagnosis) {
		if (Array.isArray(codedDiagnosis)) {
			this._codedDiagnosis = codedDiagnosis.map((i) => new CodeableConcept(i));
		} else {
			this._codedDiagnosis = [new CodeableConcept(codedDiagnosis)];
		}
	}

	get codedDiagnosis() {
		return this._codedDiagnosis;
	}

	// presentedForm		0..*	 Attachment	Entire report as issued
	set presentedForm(presentedForm) {
		if (Array.isArray(presentedForm)) {
			this._presentedForm = presentedForm.map((i) => new Attachment(i));
		} else {
			this._presentedForm = [new Attachment(presentedForm)];
		}
	}

	get presentedForm() {
		return this._presentedForm;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				status: this._status,
				category: this._category,
				code: this._code,
				subject: this._subject,
				encounter: this._encounter,
				effectiveDateTime: this._effectiveDateTime,
				effectivePeriod: this._effectivePeriod,
				issued: this._issued,
				performer: this._performer,
				request: this._request,
				specimen: this._specimen,
				result: this._result,
				imagingStudy: this._imagingStudy,
				image: this._image,
				conclusion: this._conclusion,
				codedDiagnosis: this._codedDiagnosis,
				presentedForm: this._presentedForm
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DiagnosticReport = DiagnosticReport;
module.exports.Image = Image;