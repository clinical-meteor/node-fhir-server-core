const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Range = require('./types/Range');

class Stage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// summary	Σ I	0..1	 CodeableConcept	Simple summary (disease specific)
	// Condition Stage (Example)
	set summary(summary) {
		this._summary = new CodeableConcept(summary);
	}

	get summary() {
		return this._summary;
	}

	// assessment	Σ I	0..*	 Reference(ClinicalImpression | DiagnosticReport | Observation)	Formal record of assessment
	set assessment(assessment) {
		if (Array.isArray(assessment)) {
			this._assessment = assessment.map((i) => new Reference(i));
		} else {
			this._assessment = [new Reference(assessment)];
		}
	}

	get assessment() {
		return this._assessment;
	}

	toJSON() {
		return {
			summary: this._summary,
			assessment: this._assessment
		};
	}
}

class Evidence {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ I	0..1	 CodeableConcept	Manifestation/symptom
	// Manifestation and Symptom Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// detail	Σ I	0..*	 Reference(Any)	Supporting information found elsewhere
	set detail(detail) {
		if (Array.isArray(detail)) {
			this._detail = detail.map((i) => new Reference(i));
		} else {
			this._detail = [new Reference(detail)];
		}
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			code: this._code,
			detail: this._detail
		};
	}
}

class Condition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Condition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	External Ids for this condition
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

	// patient	Σ	1..1	Reference(Patient)	Who has the condition?
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// encounter	Σ	0..1	Reference(Encounter)	Encounter when condition first asserted
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// asserter	Σ	0..1	 Reference(Practitioner | Patient)	Person who asserts this condition
	set asserter(asserter) {
		this._asserter = new Reference(asserter);
	}

	get asserter() {
		return this._asserter;
	}

	// dateRecorded	Σ	0..1	 date	When first entered
	set dateRecorded(dateRecorded) {
		this._dateRecorded = dateRecorded;
	}

	get dateRecorded() {
		return this._dateRecorded;
	}

	// code	Σ	1..1 	CodeableConcept	Identification of the condition, problem or diagnosis
	// Condition/Problem/Diagnosis Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// category	Σ	0..1	 CodeableConcept	complaint | symptom | finding | diagnosis
	// Condition Category Codes (Preferred)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// clinicalStatus	?! Σ	0..1	 code	active | relapse | remission | resolved
	// Condition Clinical Status Codes (Preferred)
	set clinicalStatus(clinicalStatus) {
		this._clinicalStatus = new Code(clinicalStatus);
	}

	get clinicalStatus() {
		return this._clinicalStatus;
	}

	// verificationStatus	?! Σ	1..1	 code	provisional | differential | confirmed | refuted | entered-in-error | unknown
	// ConditionVerificationStatus (Required)
	set verificationStatus(verificationStatus) {
		this._verificationStatus = new Code(verificationStatus);
	}

	get verificationStatus() {
		return this._verificationStatus;
	}

	// severity	Σ	0..1	 CodeableConcept	Subjective severity of condition
	// Condition/Diagnosis Severity (Preferred)
	set severity(severity) {
		this._severity = new CodeableConcept(severity);
	}

	get severity() {
		return this._severity;
	}

	// Σ	0..1		Estimated or actual date, date-time, or age
	// onsetDateTime			dateTime
	set onsetDateTime(onsetDateTime) {
		this._onsetDateTime = onsetDateTime;
	}

	get onsetDateTime() {
		return this._onsetDateTime;
	}

	// Σ	0..1		Estimated or actual date, date-time, or age
	// onsetQuantity			Age
	set onsetQuantity(onsetQuantity) {
		this._onsetQuantity = onsetQuantity;
	}

	get onsetQuantity() {
		return this._onsetQuantity;
	}

	// Σ	0..1		Estimated or actual date, date-time, or age
	// onsetPeriod			Period
	set onsetPeriod(onsetPeriod) {
		this._onsetPeriod = new Period(onsetPeriod);
	}

	get onsetPeriod() {
		return this._onsetPeriod;
	}

	// Σ	0..1		Estimated or actual date, date-time, or age
	// onsetRange			Range
	set onsetRange(onsetRange) {
		this._onsetRange = new Range(onsetRange);
	}

	get onsetRange() {
		return this._onsetRange;
	}

	// Σ	0..1		Estimated or actual date, date-time, or age
	// onsetString			string
	set onsetString(onsetString) {
		this._onsetString = onsetString;
	}

	get onsetString() {
		return this._onsetString;
	}

	// abatement[x]	Σ	0..1		If/when in resolution/remission
	// abatementDateTime			dateTime
	set abatementDateTime(abatementDateTime) {
		this._abatementDateTime = abatementDateTime;
	}

	get abatementDateTime() {
		return this._abatementDateTime;
	}

	// abatement[x]	Σ	0..1		If/when in resolution/remission
	// abatementQuantity			Age
	set abatementQuantity(abatementQuantity) {
		this._abatementQuantity = abatementQuantity;
	}

	get abatementQuantity() {
		return this._abatementQuantity;
	}

	// abatement[x]	Σ	0..1		If/when in resolution/remission
	// abatementBoolean			boolean
	set abatementBoolean(abatementBoolean) {
		this._abatementBoolean = abatementBoolean;
	}

	get abatementBoolean() {
		return this._abatementBoolean;
	}

	// abatement[x]	Σ	0..1		If/when in resolution/remission
	// abatementPeriod			Period
	set abatementPeriod(abatementPeriod) {
		this._abatementPeriod = new Period(abatementPeriod);
	}

	get abatementPeriod() {
		return this._abatementPeriod;
	}

	// abatement[x]	Σ	0..1		If/when in resolution/remission
	// abatementRange			Range
	set abatementRange(abatementRange) {
		this._abatementRange = new Range(abatementRange);
	}

	get abatementRange() {
		return this._abatementRange;
	}

	// abatement[x]	Σ	0..1		If/when in resolution/remission
	// abatementString			string
	set abatementString(abatementString) {
		this._abatementString = abatementString;
	}

	get abatementString() {
		return this._abatementString;
	}

	// stage 	Σ I	0..1	 BackboneElement	Stage/grade, usually assessed formally
	// Stage SHALL have summary or assessment
	set stage(stage) {
		this._stage = new Stage(stage);
	}

	get stage() {
		return this._stage;
	}

	// evidence	Σ I	0..*	 BackboneElement	Supporting evidence
	// evidence SHALL have code or details
	set evidence(evidence) {
		if (Array.isArray(evidence)) {
			this._evidence = evidence.map((i) => new Evidence(i));
		} else {
			this._evidence = [new Evidence(evidence)];
		}
	}

	get evidence() {
		return this._evidence;
	}

	// bodySite	Σ	0..* 	CodeableConcept	Anatomical location, if relevant
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		if (Array.isArray(bodySite)) {
			this._bodySite = bodySite.map((i) => new CodeableConcept(i));
		} else {
			this._bodySite = [new CodeableConcept(bodySite)];
		}
	}

	get bodySite() {
		return this._bodySite;
	}

	// notes	 Σ	0..1 	string	Additional information about the Condition
	set notes(notes) {
		this._notes = notes;
	}

	get notes() {
		return this._notes;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				patient: this._patient,
				encounter: this._encounter,
				asserter: this._asserter,
				dateRecorded: this._dateRecorded,
				code: this._code,
				category: this._category,
				clinicalStatus: this._clinicalStatus,
				verificationStatus: this._verificationStatus,
				severity: this._severity,
				onsetDateTime: this._onsetDateTime,
				onsetQuantity: this._onsetQuantity,
				onsetPeriod: this._onsetPeriod,
				onsetRange: this._onsetRange,
				onsetString: this._onsetString,
				abatementDateTime: this._abatementDateTime,
				abatementQuantity: this._abatementQuantity,
				abatementBoolean: this._abatementBoolean,
				abatementPeriod: this._abatementPeriod,
				abatementRange: this._abatementRange,
				abatementString: this._abatementString,
				stage: this._stage,
				evidence: this._evidence,
				bodySite: this._bodySite,
				notes: this._notes
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Condition = Condition;
module.exports.Stage = Stage;
module.exports.Evidence = Evidence;
