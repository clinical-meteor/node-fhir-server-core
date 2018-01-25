const Element = require('./Element');
const CodeableConcept = require('./types/CodeableConcept');
const Ratio = require('./types/Ratio');
const Timing = require('./types/Timing');

// Dosage	Σ		Element	How the medication is/was taken or should be taken
// Elements defined in Ancestors: id, extension
class Dosage extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// sequence	Σ	0..1	integer	The order of the dosage instructions
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// text	Σ	0..1	string	Free text dosage instructions e.g. SIG
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// additionalInstruction	Σ	0..*	CodeableConcept	Supplemental instruction - e.g. "with meals"
	// SNOMED CT Additional Dosage Instructions (Example)
	set additionalInstruction(additionalInstruction) {
		if (Array.isArray(additionalInstruction)) {
			this._additionalInstruction = additionalInstruction.map((i) => new CodeableConcept(i));
		} else {
			this._additionalInstruction = [new CodeableConcept(additionalInstruction)];
		}
	}

	get additionalInstruction() {
		return this._additionalInstruction;
	}

	// patientInstruction	Σ	0..1	string	Patient or consumer oriented instructions
	set patientInstruction(patientInstruction) {
		this._patientInstruction = patientInstruction;
	}

	get patientInstruction() {
		return this._patientInstruction;
	}

	// timing	Σ	0..1	Timing	When medication should be administered
	set timing(timing) {
		this._timing = new Timing(timing);
	}

	get timing() {
		return this._timing;
	}

	// asNeeded[x]	Σ	0..1		Take "as needed" (for x)
	// SNOMED CT Medication As Needed Reason Codes (Example)
	// asNeededBoolean			boolean
	set asNeededBoolean(asNeededBoolean) {
		this._asNeededBoolean = asNeededBoolean;
	}

	get asNeededBoolean() {
		return this._asNeededBoolean;
	}

	// asNeededCodeableConcept			CodeableConcept
	set asNeededCodeableConcept(asNeededCodeableConcept) {
		this._asNeededCodeableConcept = new CodeableConcept(asNeededCodeableConcept);
	}

	get asNeededCodeableConcept() {
		return this._asNeededCodeableConcept;
	}

	// site	Σ	0..1	CodeableConcept	Body site to administer to
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	set site(site) {
		this._site = new CodeableConcept(site);
	}

	get site() {
		return this._site;
	}

	// route	Σ	0..1	CodeableConcept	How drug should enter body
	// SNOMED CT Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// method	Σ	0..1	CodeableConcept	Technique for administering medication
	// SNOMED CT Administration Method Codes (Example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// dose[x]	Σ	0..1		Amount of medication per dose
	// doseRange			Range
	set doseRange(doseRange) {
		this._doseRange = new Range(doseRange);
	}

	get doseRange() {
		return this._doseRange;
	}

	// doseQuantity			SimpleQuantity
	set doseQuantity(doseQuantity) {
		this._doseQuantity = doseQuantity;
	}

	get doseQuantity() {
		return this._doseQuantity;
	}

	// maxDosePerPeriod	Σ	0..1	Ratio	Upper limit on medication per unit of time
	set maxDosePerPeriod(maxDosePerPeriod) {
		this._maxDosePerPeriod = new Ratio(maxDosePerPeriod);
	}

	get maxDosePerPeriod() {
		return this._maxDosePerPeriod;
	}

	// maxDosePerAdministration	Σ	0..1	SimpleQuantity	Upper limit on medication per administration
	set maxDosePerAdministration(maxDosePerAdministration) {
		this._maxDosePerAdministration = maxDosePerAdministration;
	}

	get maxDosePerAdministration() {
		return this._maxDosePerAdministration;
	}

	// maxDosePerLifetime	Σ	0..1	SimpleQuantity	Upper limit on medication per lifetime of the patient
	set maxDosePerLifetime(maxDosePerLifetime) {
		this._maxDosePerLifetime = maxDosePerLifetime;
	}

	get maxDosePerLifetime() {
		return this._maxDosePerLifetime;
	}

	// rate[x]	Σ	0..1		Amount of medication per unit of time
	// rateRatio			Ratio
	set rateRatio(rateRatio) {
		this._rateRatio = new Ratio(rateRatio);
	}

	get rateRatio() {
		return this._rateRatio;
	}

	// rateRange			Range
	set rateRange(rateRange) {
		this._rateRange = new Range(rateRange);
	}

	get rateRange() {
		return this._rateRange;
	}

	// rateQuantity			SimpleQuantity
	set rateQuantity(rateQuantity) {
		this._rateQuantity = rateQuantity;
	}

	get rateQuantity() {
		return this._rateQuantity;
	}

	toJSON() {
		const json = {
			sequence: this._sequence,
			text: this._text,
			additionalInstruction: this._additionalInstruction,
			patientInstruction: this._patientInstruction,
			timing: this._timing,
			asNeededBoolean: this._asNeededBoolean,
			asNeededCodeableConcept: this._asNeededCodeableConcept,
			site: this._site,
			route: this._route,
			method: this._method,
			doseRange: this._doseRange,
			doseQuantity: this._doseQuantity,
			maxDosePerPeriod: this._maxDosePerPeriod,
			maxDosePerAdministration: this._maxDosePerAdministration,
			maxDosePerLifetime: this._maxDosePerLifetime,
			rateRatio: this._rateRatio,
			rateRange: this._rateRange,
			rateQuantity: this._rateQuantity,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Dosage = Dosage;
