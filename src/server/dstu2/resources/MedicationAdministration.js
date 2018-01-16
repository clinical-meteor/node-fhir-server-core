const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Ratio = require('./types/Ratio');
const Range = require('./types/Range');
const Period = require('./types/Period');

class Dosage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// text	Σ	0..1	 string	Dosage Instructions
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// Σ	0..1		Body site administered to
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	// siteCodeableConcept			CodeableConcept
	set siteCodeableConcept(siteCodeableConcept) {
		this._siteCodeableConcept = new CodeableConcept(siteCodeableConcept);
	}

	get siteCodeableConcept() {
		return this._siteCodeableConcept;
	}

	// Σ	0..1		Body site administered to
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	// siteReference			Reference
	set siteReference(siteReference) {
		this._siteReference = new Reference(siteReference);
	}

	get siteReference() {
		return this._siteReference;
	}

	// route 	Σ	0..1	 CodeableConcept	Path of substance into body
	// SNOMED CT Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// method	Σ	0..1	 CodeableConcept	How drug was administered
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// quantity	Σ	0..1	 SimpleQuantity	Amount administered in one dose
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// Σ 	0..1		Dose quantity per unit of time
	// rateRatio			Ratio
	set rateRatio(rateRatio) {
		this._rateRatio = new Ratio(rateRatio);
	}

	get rateRatio() {
		return this._rateRatio;
	}

	// Σ	 0..1		Dose quantity per unit of time
	// rateRange			Range
	set rateRange(rateRange) {
		this._rateRange = new Range(rateRange);
	}

	get rateRange() {
		return this._rateRange;
	}

	toJSON() {
		return {
			text: this._text,
			siteCodeableConcept: this._siteCodeableConcept,
			siteReference: this._siteReference,
			route: this._route,
			method: this._method,
			quantity: this._quantity,
			rateRatio: this._rateRatio,
			rateRange: this._rateRange
		};
	}
}

class MedicationAdministration extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationAdministration';
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

	// status	?! Σ	1..1	 code	in-progress | on-hold | completed | entered-in-error | stopped
	// MedicationAdministrationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// patient	Σ	1..1	 Reference(Patient)	Who received medication
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// practitioner	Σ	0..1	 Reference(Practitioner | Patient | RelatedPerson)	Who administered substance
	set practitioner(practitioner) {
		this._practitioner = new Reference(practitioner);
	}

	get practitioner() {
		return this._practitioner;
	}

	// encounter	Σ	0..1 	Reference(Encounter)	Encounter administered as part of
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// prescription	Σ	0..1 	Reference(MedicationOrder)	Order administration performed against
	set prescription(prescription) {
		this._prescription = new Reference(prescription);
	}

	get prescription() {
		return this._prescription;
	}

	// wasNotGiven	?! Σ	0..1	 boolean	True if medication not administered
	set wasNotGiven(wasNotGiven) {
		this._wasNotGiven = wasNotGiven;
	}

	get wasNotGiven() {
		return this._wasNotGiven;
	}

	// reasonNotGiven	Σ I	0..*	 CodeableConcept	Reason administration not performed
	// Reason Medication Not Given Codes (Example)
	set reasonNotGiven(reasonNotGiven) {
		if (Array.isArray(reasonNotGiven)) {
			this._reasonNotGiven = reasonNotGiven.map((x) => new CodeableConcept(x));
		} else {
			this._reasonNotGiven = [new CodeableConcept(reasonNotGiven)];
		}
	}

	get reasonNotGiven() {
		return this._reasonNotGiven;
	}

	// reasonGiven	Σ I	0..*	 CodeableConcept	Reason administration performed
	// Reason Medication Given Codes (Example)
	set reasonGiven(reasonGiven) {
		if (Array.isArray(reasonGiven)) {
			this._reasonGiven = reasonGiven.map((x) => new CodeableConcept(x));
		} else {
			this._reasonGiven = [new CodeableConcept(reasonGiven)];
		}
	}

	get reasonGiven() {
		return this._reasonGiven;
	}

	// Σ	1..1		Start and end time of administration
	// effectiveTimeDateTime			dateTime
	set effectiveTimeDateTime(effectiveTimeDateTime) {
		this._effectiveTimeDateTime = effectiveTimeDateTime;
	}

	get effectiveTimeDateTime() {
		return this._effectiveTimeDateTime;
	}

	// Σ	1..1		Start and end time of administration
	// effectiveTimePeriod		Period
	set effectiveTimePeriod(effectiveTimePeriod) {
		this._effectiveTimePeriod = new Period(effectiveTimePeriod);
	}

	get effectiveTimePeriod() {
		return this._effectiveTimePeriod;
	}

	// Σ	1..1		What was administered
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// Σ	1..1		What was administered
	// medicationReference			Reference
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// device	Σ	0..*	 Reference(Device)	Device used to administer
	set device(device) {
		if (Array.isArray(device)) {
			this._device = device.map((x) => new Reference(x));
		} else {
			this._device = [new Reference(device)];
		}
	}

	get device() {
		return this._device;
	}

	// note	Σ	0..1 	string	Information about the administration
	set note(note) {
		this._note = note;
	}

	get note() {
		return this._note;
	}

	// dosage	Σ I	0..1	BackboneElement	Details of how medication was taken
	// SHALL have at least one of dosage.quantity and dosage.rate[x]
	set dosage(dosage) {
		this._dosage = new Dosage(dosage);
	}

	get dosage() {
		return this._dosage;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				status: this._status,
				patient: this._patient,
				practitioner: this._practitioner,
				encounter: this._encounter,
				prescription: this._prescription,
				wasNotGiven: this._wasNotGiven,
				reasonNotGiven: this._reasonNotGiven,
				reasonGiven: this._reasonGiven,
				effectiveTimeDateTime: this._effectiveTimeDateTime,
				effectiveTimePeriod: this._effectiveTimePeriod,
				medicationCodeableConcept: this._medicationCodeableConcept,
				medicationReference: this._medicationReference,
				device: this._device,
				note: this._note,
				dosage: this._dosage
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationAdministration = MedicationAdministration;
module.exports.Dosage = Dosage;
