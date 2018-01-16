const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Ratio = require('./types/Ratio');
const Range = require('./types/Range');
const Timing = require('./types/Timing');

class Dosage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// text	Σ	0..1 	string	Reported dosage information
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// timing	Σ	0..1	 Timing	When/how often was medication taken
	set timing(timing) {
		this._timing = new Timing(timing);
	}

	get timing() {
		return this._timing;
	}

	// Σ	0..1		Take "as needed" (for x)
	// asNeededBoolean			boolean
	set asNeededBoolean(asNeededBoolean) {
		this._asNeededBoolean = asNeededBoolean;
	}

	get asNeededBoolean() {
		return this._asNeededBoolean;
	}

	// Σ	0..1		Take "as needed" (for x)
	// asNeededCodeableConcept			CodeableConcept
	set asNeededCodeableConcept(asNeededCodeableConcept) {
		this._asNeededCodeableConcept = new CodeableConcept(asNeededCodeableConcept);
	}

	get asNeededCodeableConcept() {
		return this._asNeededCodeableConcept;
	}

	// Σ	0..1		Where (on body) medication is/was administered
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	// siteCodeableConcept			CodeableConcept
	set siteCodeableConcept(siteCodeableConcept) {
		this._siteCodeableConcept = new CodeableConcept(siteCodeableConcept);
	}

	get siteCodeableConcept() {
		return this._siteCodeableConcept;
	}

	// Σ	0..1		Where (on body) medication is/was administered
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	// siteReference			Reference(BodySite)
	set siteReference(siteReference) {
		this._siteReference = new Reference(siteReference);
	}

	get siteReference() {
		return this._siteReference;
	}

	// route	Σ	0..1 	CodeableConcept	How the medication entered the body
	// SNOMED CT Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// method	Σ	0..1	 CodeableConcept	Technique used to administer medication
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// Σ	0..1		Amount administered in one dose
	// quantityQuantity			SimpleQuantity
	set quantityQuantity(quantityQuantity) {
		this._quantityQuantity = quantityQuantity;
	}

	get quantityQuantity() {
		return this._quantityQuantity;
	}

	// Σ	0..1		Amount administered in one dose
	// quantityRange			Range
	set quantityRange(quantityRange) {
		this._quantityRange = new Range(quantityRange);
	}

	get quantityRange() {
		return this._quantityRange;
	}

	// Σ	0..1		Dose quantity per unit of time
	// rateRatio			Ratio
	set rateRatio(rateRatio) {
		this._rateRatio = new Ratio(rateRatio);
	}

	get rateRatio() {
		return this._rateRatio;
	}

	// Σ	0..1		Dose quantity per unit of time
	// rateRange			Range
	set rateRange(rateRange) {
		this._rateRange = new Range(rateRange);
	}

	get rateRange() {
		return this._rateRange;
	}

	// maxDosePerPeriod	Σ	0..1	 Ratio	Maximum dose that was consumed per unit of time
	set maxDosePerPeriod(maxDosePerPeriod) {
		this._maxDosePerPeriod = new Ratio(maxDosePerPeriod);
	}

	get maxDosePerPeriod() {
		return this._maxDosePerPeriod;
	}

	toJSON() {
		return {
			text: this._text,
			timing: this._timing,
			asNeededBoolean: this._asNeededBoolean,
			asNeededCodeableConcept: this._asNeededCodeableConcept,
			siteCodeableConcept: this._siteCodeableConcept,
			siteReference: this._siteReference,
			route: this._route,
			method: this._method,
			quantityQuantity: this._quantityQuantity,
			quantityRange: this._quantityRange,
			rateRatio: this._rateRatio,
			rateRange: this._rateRange,
			maxDosePerPeriod: this._maxDosePerPeriod
		};
	}
}

class MedicationStatement extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationStatement';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	External identifier
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

	// patient	Σ	1..1	 Reference(Patient)	Who is/was taking the medication
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// informationSource	Σ	0..1	 Reference(Patient | Practitioner | RelatedPerson)
	set informationSource(informationSource) {
		this._informationSource = new Reference(informationSource);
	}

	get informationSource() {
		return this._informationSource;
	}

	// dateAsserted	Σ	0..1 	dateTime 	When the statement was asserted?
	set dateAsserted(dateAsserted) {
		this._dateAsserted = dateAsserted;
	}

	get dateAsserted() {
		return this._dateAsserted;
	}

	// status	?! Σ	1..1 	code	 active | completed | entered-in-error | intended
	// MedicationStatementStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// wasNotTaken	?! Σ	0..1	 boolean	 True if medication is/was not being taken
	set wasNotTaken(wasNotTaken) {
		this._wasNotTaken = wasNotTaken;
	}

	get wasNotTaken() {
		return this._wasNotTaken;
	}

	// reasonNotTaken	Σ I	0..*	 CodeableConcept	True if asserting medication was not given
	// Reason Medication Not Given Codes (Example)
	set reasonNotTaken(reasonNotTaken) {
		if (Array.isArray(reasonNotTaken)) {
			this._reasonNotTaken = reasonNotTaken.map((i) => new CodeableConcept(i));
		} else {
			this._reasonNotTaken = [new CodeableConcept(reasonNotTaken)];
		}
	}

	get reasonNotTaken() {
		return this._reasonNotTaken;
	}

	// Σ	0..1
	// Condition/Problem/Diagnosis Codes (Example)
	// reasonForUseCodeableConcept			CodeableConcept
	set reasonForUseCodeableConcept(reasonForUseCodeableConcept) {
		this._reasonForUseCodeableConcept = new CodeableConcept(reasonForUseCodeableConcept);
	}

	get reasonForUseCodeableConcept() {
		return this._reasonForUseCodeableConcept;
	}

	// Σ 	0..1
	// Condition/Problem/Diagnosis Codes (Example)
	// reasonForUseReference			Reference(Condition)
	set reasonForUseReference(reasonForUseReference) {
		this._reasonForUseReference = new Reference(reasonForUseReference);
	}

	get reasonForUseReference() {
		return this._reasonForUseReference;
	}

	// Σ	0..1		Over what period was medication consumed?
	// effectiveDateTime			dateTime
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// Σ	0..1		Over what period was medication consumed?
	// effectivePeriod			Period
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// note	Σ	0..1	 string	Further information about the statement
	set note(note) {
		this._note = note;
	}

	get note() {
		return this._note;
	}

	// supportingInformation	Σ	0..*	 Reference(Any)	Additional supporting information
	set supportingInformation(supportingInformation) {
		if (Array.isArray(supportingInformation)) {
			this._supportingInformation = supportingInformation.map((i) => new Reference(i));
		} else {
			this._supportingInformation = [new Reference(supportingInformation)];
		}
	}

	get supportingInformation() {
		return this._supportingInformation;
	}

	// 	Σ	1..1		What medication was taken
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// 	Σ	1..1		What medication was taken
	//  medicationReference			Reference(Medication)
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// dosage	Σ	0..*	 BackboneElement	Details of how medication was taken
	set dosage(dosage) {
		if (Array.isArray(dosage)) {
			this._dosage = dosage.map((i) => new Dosage(i));
		} else {
			this._dosage = [new Dosage(dosage)];
		}
	}

	get dosage() {
		return this._dosage;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			patient: this._patient,
			informationSource: this._informationSource,
			dateAsserted: this._dateAsserted,
			status: this._status,
			wasNotTaken: this._wasNotTaken,
			reasonNotTaken: this._reasonNotTaken,
			reasonForUseCodeableConcept: this._reasonForUseCodeableConcept,
			reasonForUseReference: this._reasonForUseReference,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			note: this._note,
			supportingInformation: this._supportingInformation,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			dosage: this._dosage
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationStatement = MedicationStatement;
module.exports.Dosage = Dosage;
