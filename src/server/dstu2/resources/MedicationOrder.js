const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Ratio = require('./types/Ratio');
const Range = require('./types/Range');
const Timing = require('./types/Timing');
const Period = require('./types/Period');

class DosageInstruction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// text	Σ	0..1 	string	Dosage instructions expressed as text
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// additionalInstructions	Σ	0..1	 CodeableConcept	Supplemental instructions - e.g. "with meals"
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
	// siteReference			Reference(BodySite)
	set siteReference(siteReference) {
		this._siteReference = new Reference(siteReference);
	}

	get siteReference() {
		return this._siteReference;
	}

	// route	Σ	0..1	 CodeableConcept	How drug should enter body
	// SNOMED CT Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// method	Σ	0..1 	CodeableConcept	Technique for administering medication
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

	// maxDosePerPeriod	Σ	0..1 	Ratio	Upper limit on medication per unit of time
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

class DispenseRequest {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// Σ	0..1		Product to be supplied
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// Σ	0..1		Product to be supplied
	// medicationReference			Reference(Medication)
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// validityPeriod	Σ	0..1	 Period	Time period supply is authorized for
	set validityPeriod(validityPeriod) {
		this._validityPeriod = new Period(validityPeriod);
	}

	get validityPeriod() {
		return this._validityPeriod;
	}

	// numberOfRepeatsAllowed	Σ	0..1	 positiveInt	Number of refills authorized
	set numberOfRepeatsAllowed(numberOfRepeatsAllowed) {
		this._numberOfRepeatsAllowed = numberOfRepeatsAllowed;
	}

	get numberOfRepeatsAllowed() {
		return this._numberOfRepeatsAllowed;
	}

	// quantity	Σ	0..1	 SimpleQuantity	Amount of medication to supply per dispense
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// expectedSupplyDuration	Σ	0..1 	Duration	Number of days supply per dispense
	set expectedSupplyDuration(expectedSupplyDuration) {
		this._expectedSupplyDuration = expectedSupplyDuration;
	}

	get expectedSupplyDuration() {
		return this._expectedSupplyDuration;
	}

	toJSON() {
		return {
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			validityPeriod: this._validityPeriod,
			numberOfRepeatsAllowed: this._numberOfRepeatsAllowed,
			quantity: this._quantity,
			expectedSupplyDuration: this._expectedSupplyDuration
		};
	}
}

class Substitution {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1 	CodeableConcept	generic | formulary +
	// ActSubstanceAdminSubstitutionCode (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// reason	Σ	0..1	 CodeableConcept	Why should (not) substitution be made
	// SubstanceAdminSubstitutionReason (Example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	toJSON() {
		return {
			type: this._type,
			reason: this._reason
		};
	}
}

class MedicationOrder extends DomainResource{
	constructor(obj) {
		super();
		this._resourceType = 'MedicationOrder';
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

	// dateWritten	Σ	0..1	 dateTime	When prescription was authorized
	set dateWritten(dateWritten) {
		this._dateWritten = dateWritten;
	}

	get dateWritten() {
		return this._dateWritten;
	}

	// status	?! Σ	0..1	 code	active | on-hold | completed | entered-in-error | stopped | draft
	// MedicationOrderStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// dateEnded	Σ	0..1	 dateTime	When prescription was stopped
	set dateEnded(dateEnded) {
		this._dateEnded = dateEnded;
	}

	get dateEnded() {
		return this._dateEnded;
	}

	// reasonEnded	Σ	0..1 	CodeableConcept	Why prescription was stopped
	set reasonEnded(reasonEnded) {
		this._reasonEnded = new CodeableConcept(reasonEnded);
	}

	get reasonEnded() {
		return this._reasonEnded;
	}

	// patient	Σ	0..1 	Reference(Patient)	Who prescription is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// prescriber	Σ	0..1	 Reference(Practitioner)	Who ordered the medication(s)
	set prescriber(prescriber) {
		this._prescriber = new Reference(prescriber);
	}

	get prescriber() {
		return this._prescriber;
	}

	// encounter	Σ	0..1 	Reference(Encounter)	Created during encounter/admission/stay
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// Σ	0..1		Reason or indication for writing the prescription
	// Condition/Problem/Diagnosis Codes (Example)
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// Σ	0..1		Reason or indication for writing the prescription
	// Condition/Problem/Diagnosis Codes (Example)
	// reasonReference			Reference(Condition)
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// note	Σ	0..1	 string	Information about the prescription
	set note(note) {
		this._note = note;
	}

	get note() {
		return this._note;
	}

	// Σ	1..1		Medication to be taken
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// Σ	1..1		Medication to be taken
	// medicationReference			Reference(Medication)
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// dosageInstruction	Σ	0..*	 BackboneElement	How medication should be taken
	set dosageInstruction(dosageInstruction) {
		if (Array.isArray(dosageInstruction)) {
			this._dosageInstruction = dosageInstruction.map((i) => new DosageInstruction(i));
		} else {
			this._dosageInstruction = [new DosageInstruction(dosageInstruction)];
		}
	}

	get dosageInstruction() {
		return this._dosageInstruction;
	}

	// dispenseRequest	Σ	0..1	 BackboneElement	Medication supply authorization
	set dispenseRequest(dispenseRequest) {
		this._dispenseRequest = new DispenseRequest(dispenseRequest);
	}

	get dispenseRequest() {
		return this._dispenseRequest;
	}

	// substitution	Σ	0..1 	BackboneElement	Any restrictions on medication substitution
	set substitution(substitution) {
		this._substitution = new Substitution(substitution);
	}

	get substitution() {
		return this._substitution;
	}

	// priorPrescription	Σ	0..1	 Reference(MedicationOrder)	An order/prescription that this supersedes
	set priorPrescription(priorPrescription) {
		this._priorPrescription = new Reference(priorPrescription);
	}

	get priorPrescription() {
		return this._priorPrescription;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			dateWritten: this._dateWritten,
			status: this._status,
			dateEnded: this._dateEnded,
			reasonEnded: this._reasonEnded,
			patient: this._patient,
			prescriber: this._prescriber,
			encounter: this._encounter,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			note: this._note,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			dosageInstruction: this._dosageInstruction,
			dispenseRequest: this._dispenseRequest,
			substitution: this._substitution,
			priorPrescription: this._priorPrescription
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationOrder = MedicationOrder;
module.exports.DosageInstruction = DosageInstruction;
module.exports.DispenseRequest = DispenseRequest;
module.exports.Substitution = Substitution;
