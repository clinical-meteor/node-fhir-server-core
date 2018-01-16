const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Ratio = require('./types/Ratio');
const Range = require('./types/Range');
const Timing = require('./types/Timing');

class DosageInstruction {
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

	// additionalInstructions	Σ	0..1 	CodeableConcept	E.g. "Take with food"
	set additionalInstructions(additionalInstructions) {
		this._additionalInstructions = new CodeableConcept(additionalInstructions);
	}

	get additionalInstructions() {
		return this._additionalInstructions;
	}

	// timing	Σ	0..1	 Timing	When medication should be administered
	set timing(timing) {
		this._timing = new Timing(timing);
	}

	get timing() {
		return this._timing;
	}

	// Σ	0..1		Take "as needed" f(or x)
	// asNeededBoolean			boolean
	set asNeededBoolean(asNeededBoolean) {
		this._asNeededBoolean = asNeededBoolean;
	}

	get asNeededBoolean() {
		return this._asNeededBoolean;
	}

	// Σ	0..1		Take "as needed" f(or x)
	// asNeededCodeableConcept		CodeableConcept
	set asNeededCodeableConcept(asNeededCodeableConcept) {
		this._asNeededCodeableConcept = new CodeableConcept(asNeededCodeableConcept);
	}

	get asNeededCodeableConcept() {
		return this._asNeededCodeableConcept;
	}

	// Σ	0..1		Body site to administer to
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	// siteCodeableConcept			CodeableConcept
	set siteCodeableConcept(siteCodeableConcept) {
		this._siteCodeableConcept = new CodeableConcept(siteCodeableConcept);
	}

	get siteCodeableConcept() {
		return this._siteCodeableConcept;
	}

	// Σ	0..1		Body site to administer to
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	// siteReference			Reference
	set siteReference(siteReference) {
		this._siteReference = new Reference(siteReference);
	}

	get siteReference() {
		return this._siteReference;
	}

	// route 	Σ	0..1	 CodeableConcept	How drug should enter body
	// SNOMED CT Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// method	Σ	0..1	 CodeableConcept	Technique for administering medication
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// Σ	0..1		Amount of medication per dose
	// doseRange			Range
	set doseRange(doseRange) {
		this._doseRange = new Range(doseRange);
	}

	get doseRange() {
		return this._doseRange;
	}

	// Σ	0..1		Amount of medication per dose
	// doseQuantity			SimpleQuantity
	set doseQuantity(doseQuantity) {
		this._doseQuantity = doseQuantity;
	}

	get doseQuantity() {
		return this._doseQuantity;
	}

	// Σ	0..1		Amount of medication per unit of time
	// rateRatio			Ratio
	set rateRatio(rateRatio) {
		this._rateRatio = new Ratio(rateRatio);
	}

	get rateRatio() {
		return this._rateRatio;
	}

	// Σ	0..1		Amount of medication per unit of time
	// rateRange			Range
	set rateRange(rateRange) {
		this._rateRange = new Range(rateRange);
	}

	get rateRange() {
		return this._rateRange;
	}

	// maxDosePerPeriod	Σ	0..1	 Ratio	Upper limit on medication per unit of time
	set maxDosePerPeriod(maxDosePerPeriod) {
		this._maxDosePerPeriod = new Ratio(maxDosePerPeriod);
	}

	get maxDosePerPeriod() {
		return this._maxDosePerPeriod;
	}

	toJSON() {
		return {
			text: this._text,
			additionalInstructions: this._additionalInstructions,
			timing: this._timing,
			asNeededBoolean: this._asNeededBoolean,
			asNeededCodeableConcept: this._asNeededCodeableConcept,
			siteCodeableConcept: this._siteCodeableConcept,
			siteReference: this._siteReference,
			route: this._route,
			method: this._method,
			doseRange: this._doseRange,
			doseQuantity: this._doseQuantity,
			rateRatio: this._rateRatio,
			rateRange: this._rateRange,
			maxDosePerPeriod: this._maxDosePerPeriod
		};
	}
}

class Substitution {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	 CodeableConcept	Type of substitution
	// ActSubstanceAdminSubstitutionCode (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// reason	Σ	0..*	 CodeableConcept	Why was substitution made
	// SubstanceAdminSubstitutionReason (Example)
	set reason(reason) {
		if (Array.isArray(reason)) {
			this._reason = reason.map((i) => new CodeableConcept(i));
		} else {
			this._reason = [new CodeableConcept(reason)];
		}
	}

	get reason() {
		return this._reason;
	}

	// responsibleParty	Σ	0..*	 Reference(Practitioner)	Who is responsible for the substitution
	set responsibleParty(responsibleParty) {
		if (Array.isArray(responsibleParty)) {
			this._responsibleParty = responsibleParty.map((i) => new Reference(i));
		} else {
			this._responsibleParty = [new Reference(responsibleParty)];
		}
	}

	get responsibleParty() {
		return this._responsibleParty;
	}

	toJSON() {
		return {
			type: this._type,
			reason: this._reason,
			responsibleParty: this._responsibleParty
		};
	}
}

class MedicationDispense extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationDispense';
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

	// status	?! Σ	0..1	 code	in-progress | on-hold | completed | entered-in-error | stopped
	// MedicationDispenseStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// patient	Σ	1..1	 Reference(Patient)	Who the dispense is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// dispenser	Σ	0..1	 Reference(Practitioner)	Practitioner responsible for dispensing medication
	set dispenser(dispenser) {
		this._dispenser = new Reference(dispenser);
	}

	get dispenser() {
		return this._dispenser;
	}

	// authorizingPrescription	Σ	0..*	 Reference(MedicationOrder)	Medication order that authorizes the dispense
	set authorizingPrescription(authorizingPrescription) {
		if (Array.isArray(authorizingPrescription)) {
			this._authorizingPrescription = authorizingPrescription.map((x) => new Reference(x));
		} else {
			this._authorizingPrescription = [new Reference(authorizingPrescription)];
		}
	}

	get authorizingPrescription() {
		return this._authorizingPrescription;
	}

	// type	Σ	0..1	 CodeableConcept	Trial fill, partial fill, emergency fill, etc.
	// ActPharmacySupplyType (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// quantity	Σ	0..1	 SimpleQuantity	Amount dispensed
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// daysSupply	Σ	0..1 	SimpleQuantity	Days Supply
	set daysSupply(daysSupply) {
		this._daysSupply = daysSupply;
	}

	get daysSupply() {
		return this._daysSupply;
	}

	// Σ	1..1		What medication was supplied
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// Σ	1..1		What medication was supplied
	// medicationReference		Reference(Medication)
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// whenPrepared	Σ	0..1	 dateTime	Dispense processing time
	set whenPrepared(whenPrepared) {
		this._whenPrepared = whenPrepared;
	}

	get whenPrepared() {
		return this._whenPrepared;
	}

	// whenHandedOver	Σ	0..1	 dateTime	When product was given out
	set whenHandedOver(whenHandedOver) {
		this._whenHandedOver = whenHandedOver;
	}

	get whenHandedOver() {
		return this._whenHandedOver;
	}

	// destination	Σ	0..1 	Reference(Location)	Where the medication was sent
	set destination(destination) {
		this._destination = new Reference(destination);
	}

	get destination() {
		return this._destination;
	}

	// receiver	Σ	0..* 	Reference(Patient | Practitioner)	Who collected the medication
	set receiver(receiver) {
		if (Array.isArray(receiver)) {
			this._receiver = receiver.map((x) => new Reference(x));
		} else {
			this._receiver = [new Reference(receiver)];
		}
	}

	get receiver() {
		return this._receiver;
	}

	// note	Σ	0..1 	string	Information about the dispense
	set note(note) {
		this._note = note;
	}

	get note() {
		return this._note;
	}

	// dosageInstruction	Σ	0..*	 BackboneElement	Medicine administration instructions to the patient/caregiver
	set dosageInstruction(dosageInstruction) {
		if (Array.isArray(dosageInstruction)) {
			this._dosageInstruction = dosageInstruction.map((x) => new DosageInstruction(x));
		} else {
			this._dosageInstruction = [new DosageInstruction(dosageInstruction)];
		}
	}

	get dosageInstruction() {
		return this._dosageInstruction;
	}

	// substitution	Σ	0..1	 BackboneElement	Deals with substitution of one medicine for another
	set substitution(substitution) {
		this._substitution = new Substitution(substitution);
	}

	get substitution() {
		return this._substitution;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				status: this._status,
				patient: this._patient,
				dispenser: this._dispenser,
				authorizingPrescription: this._authorizingPrescription,
				type: this._type,
				quantity: this._quantity,
				daysSupply: this._daysSupply,
				medicationCodeableConcept: this._medicationCodeableConcept,
				medicationReference: this._medicationReference,
				whenPrepared: this._whenPrepared,
				whenHandedOver: this._whenHandedOver,
				destination: this._destination,
				receiver: this._receiver,
				note: this._note,
				dosageInstruction: this._dosageInstruction,
				substitution: this._substitution
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationDispense = MedicationDispense;
module.exports.DosageInstruction = DosageInstruction;
module.exports.Substitution = Substitution;
