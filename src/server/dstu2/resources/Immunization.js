const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Annotation = require('./types/Annotation');

class Explanation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// reason		0..*	 CodeableConcept	Why immunization occurred
	// Immunization Reason Codes (Example)
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

	// reasonNotGiven		0..* 	CodeableConcept	Why immunization did not occur
	// Immunization Reasons for Not Immunizing Codes (Example)
	set reasonNotGiven(reasonNotGiven) {
		if (Array.isArray(reasonNotGiven)) {
			this._reasonNotGiven = reasonNotGiven.map((i) => new CodeableConcept(i));
		} else {
			this._reasonNotGiven = [new CodeableConcept(reasonNotGiven)];
		}
	}

	get reasonNotGiven() {
		return this._reasonNotGiven;
	}

	toJSON() {
		return {
			reason: this._reason,
			reasonNotGiven: this._reasonNotGiven
		};
	}
}

class Reaction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// date		0..1	 dateTime	When reaction started
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// detail		0..1	 Reference(Observation)	Additional information on reaction
	set detail(detail) {
		this._detail = new Reference(detail);
	}

	get detail() {
		return this._detail;
	}

	// reported		0..1	 boolean	Indicates self-reported reaction
	set reported(reported) {
		this._reported = reported;
	}

	get reported() {
		return this._reported;
	}

	toJSON() {
		return {
			date: this._date,
			detail: this._detail,
			reported: this._reported
		};
	}
}

class VaccinationProtocol {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// doseSequence		1..1	 positiveInt	Dose number within series
	set doseSequence(doseSequence) {
		this._doseSequence = doseSequence;
	}

	get doseSequence() {
		return this._doseSequence;
	}

	// description		0..1	 string	Details of vaccine protocol
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// authority		0..1	 Reference(Organization)	Who is responsible for protocol
	set authority(authority) {
		this._authority = new Reference(authority);
	}

	get authority() {
		return this._authority;
	}

	// series		0..1	 string	Name of vaccine series
	set series(series) {
		this._series = series;
	}

	get series() {
		return this._series;
	}

	// seriesDoses		0..1	 positiveInt	Recommended number of doses for immunity
	set seriesDoses(seriesDoses) {
		this._seriesDoses = seriesDoses;
	}

	get seriesDoses() {
		return this._seriesDoses;
	}

	// targetDisease		1..*	 CodeableConcept	Disease immunized against
	// Vaccination Protocol Dose Target Codes (Example)
	set targetDisease(targetDisease) {
		if (Array.isArray(targetDisease)) {
			this._targetDisease = targetDisease.map((i) => new CodeableConcept(i));
		} else {
			this._targetDisease = [new CodeableConcept(targetDisease)];
		}
	}

	get targetDisease() {
		return this._targetDisease;
	}

	// doseStatus		1..1	 CodeableConcept	Indicates if dose counts towards immunity
	// Vaccination Protocol Dose Status codes (Example)
	set doseStatus(doseStatus) {
		this._doseStatus = new CodeableConcept(doseStatus);
	}

	get doseStatus() {
		return this._doseStatus;
	}

	// doseStatusReason		0..1	 CodeableConcept	Why dose does (not) count
	// Vaccination Protocol Dose Status Reason codes (Example)
	set doseStatusReason(doseStatusReason) {
		this._doseStatusReason = new CodeableConcept(doseStatusReason);
	}

	get doseStatusReason() {
		return this._doseStatusReason;
	}

	toJSON() {
		return {
			doseSequence: this._doseSequence,
			description: this._description,
			authority: this._authority,
			series: this._series,
			seriesDoses: this._seriesDoses,
			targetDisease: this._targetDisease,
			doseStatus: this._doseStatus,
			doseStatusReason: this._doseStatusReason
		};
	}
}

// If immunization was administered (wasNotGiven=false) then explanation.reasonNotGiven
// SHALL be absent. If immunization was not administred (wasNotGiven=true) then there
// SHALL be no reaction nor explanation.reason present
class Immunization extends DomainResource{
	constructor(obj) {
		super();
		this._resourceType = 'Immunization';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	Business identifier
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

	// status	?! Σ	1..1	code	in-progress | on-hold | completed | entered-in-error | stopped
	// MedicationAdministrationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// date		0..1	 dateTime	Vaccination administration date
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// vaccineCode		1..1	 CodeableConcept	Vaccine product administered
	// Vaccine Administered Value Set (Example)
	set vaccineCode(vaccineCode) {
		this._vaccineCode = new CodeableConcept(vaccineCode);
	}

	get vaccineCode() {
		return this._vaccineCode;
	}

	// patient		1..1	 Reference(Patient)	Who was immunized
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// wasNotGiven	?!	1..1	 boolean	 Flag for whether immunization was given
	set wasNotGiven(wasNotGiven) {
		this._wasNotGiven = wasNotGiven;
	}

	get wasNotGiven() {
		return this._wasNotGiven;
	}

	// reported		1..1	 boolean	Indicates a self-reported record
	set reported(reported) {
		this._reported = reported;
	}

	get reported() {
		return this._reported;
	}

	// performer		0..1 	Reference(Practitioner)	Who administered vaccine
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// requester		0..1 	Reference(Practitioner)	Who ordered vaccination
	set requester(requester) {
		this._requester = new Reference(requester);
	}

	get requester() {
		return this._requester;
	}

	// encounter		0..1 	Reference(Encounter)	Encounter administered as part of
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// manufacturer		0..1	 Reference(Organization)	Vaccine manufacturer
	set manufacturer(manufacturer) {
		this._manufacturer = new Reference(manufacturer);
	}

	get manufacturer() {
		return this._manufacturer;
	}

	// location		0..1	 Reference(Location)	Where vaccination occurred
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// lotNumber		0..1 	string	Vaccine lot number
	set lotNumber(lotNumber) {
		this._lotNumber = lotNumber;
	}

	get lotNumber() {
		return this._lotNumber;
	}

	// expirationDate		0..1 	date	 Vaccine expiration date
	set expirationDate(expirationDate) {
		this._expirationDate = expirationDate;
	}

	get expirationDate() {
		return this._expirationDate;
	}

	// site		0..1	 CodeableConcept	Body site vaccine was administered
	// Codes for Immunization Site of Administration (Example)
	set site(site) {
		this._site = new CodeableConcept(site);
	}

	get site() {
		return this._site;
	}

	// route		0..1 	CodeableConcept	How vaccine entered body
	// Immunization Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// doseQuantity		0..1 	SimpleQuantity	Amount of vaccine administered
	set doseQuantity(doseQuantity) {
		this._doseQuantity = doseQuantity;
	}

	get doseQuantity() {
		return this._doseQuantity;
	}

	// note	Σ	0..* 	Annotation	Vaccination notes
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// explanation		0..1 	BackboneElement	Administration/non-administration reasons
	set explanation(explanation) {
		this._explanation = new Explanation(explanation);
	}

	get explanation() {
		return this._explanation;
	}

	// reaction		0..*	 BackboneElement	Details of a reaction that follows immunization
	set reaction(reaction) {
		if (Array.isArray(reaction)) {
			this._reaction = reaction.map((i) => new Reaction(i));
		} else {
			this._reaction = [new Reaction(reaction)];
		}
	}

	get reaction() {
		return this._reaction;
	}

	// vaccinationProtocol		0..*	 BackboneElement	What protocol was followed
	set vaccinationProtocol(vaccinationProtocol) {
		if (Array.isArray(vaccinationProtocol)) {
			this._vaccinationProtocol = vaccinationProtocol.map((i) => new VaccinationProtocol(i));
		} else {
			this._vaccinationProtocol = [new VaccinationProtocol(vaccinationProtocol)];
		}
	}

	get vaccinationProtocol() {
		return this._vaccinationProtocol;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			date: this._date,
			vaccineCode: this._vaccineCode,
			patient: this._patient,
			wasNotGiven: this._wasNotGiven,
			reported: this._reported,
			performer: this._performer,
			requester: this._requester,
			encounter: this._encounter,
			manufacturer: this._manufacturer,
			location: this._location,
			lotNumber: this._lotNumber,
			expirationDate: this._expirationDate,
			site: this._site,
			route: this._route,
			doseQuantity: this._doseQuantity,
			note: this._note,
			explanation: this._explanation,
			reaction: this._reaction,
			vaccinationProtocol: this._vaccinationProtocol
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Immunization = Immunization;
module.exports.Explanation = Explanation;
module.exports.Reaction = Reaction;
module.exports.VaccinationProtocol = VaccinationProtocol;
