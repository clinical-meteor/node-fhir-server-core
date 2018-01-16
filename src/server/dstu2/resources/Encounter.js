const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class StatusHistory {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// status		1..1 	code 	planned | arrived | in-progress | onleave | finished | cancelled
	// EncounterState (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// period		1..1	 Period	The time that the episode was in the specified status
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			status: this._status,
			period: this._period
		};
	}
}

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	0..*	 CodeableConcept	Role of participant in encounter
	// ParticipantType (Extensible)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// period		0..1	 Period	Period of time during the encounter participant was present
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// individual	Σ	0..1	 Reference(Practitioner | RelatedPerson)	Persons involved in the encounter other than the patient
	set individual(individual) {
		this._individual = new Reference(individual);
	}

	get individual() {
		return this._individual;
	}

	toJSON() {
		return {
			type: this._type,
			period: this._period,
			individual: this._individual
		};
	}
}

class Hospitalization {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// preAdmissionIdentifier		0..1 	Identifier	Pre-admission identifier
	set preAdmissionIdentifier(preAdmissionIdentifier) {
		this._preAdmissionIdentifier = new Identifier(preAdmissionIdentifier);
	}

	get preAdmissionIdentifier() {
		return this._preAdmissionIdentifier;
	}

	// origin		0..1	 Reference(Location)	The location from which the patient came before admission
	set origin(origin) {
		this._origin = new Reference(origin);
	}

	get origin() {
		return this._origin;
	}

	// admitSource		0..1 	CodeableConcept	From where patient was admitted (physician referral, transfer)
	// AdmitSource (Preferred)
	set admitSource(admitSource) {
		this._admitSource = new CodeableConcept(admitSource);
	}

	get admitSource() {
		return this._admitSource;
	}

	// admittingDiagnosis		0..*	 Reference(Condition)	The admitting diagnosis as reported by admitting practitioner
	set admittingDiagnosis(admittingDiagnosis) {
		if (Array.isArray(admittingDiagnosis)) {
			this._admittingDiagnosis = admittingDiagnosis.map((i) => new Reference(i));
		} else {
			this._admittingDiagnosis = [new Reference(admittingDiagnosis)];
		}
	}

	get admittingDiagnosis() {
		return this._admittingDiagnosis;
	}

	// reAdmission		0..1 	CodeableConcept	The type of hospital re-admission that has occurred (if any).
	// If the value is absent, then this is not identified as a readmission
	set reAdmission(reAdmission) {
		this._reAdmission = new CodeableConcept(reAdmission);
	}

	get reAdmission() {
		return this._reAdmission;
	}

	// dietPreference		0..*	 CodeableConcept	Diet preferences reported by the patient
	// Diet (Example)
	set dietPreference(dietPreference) {
		if (Array.isArray(dietPreference)) {
			this._dietPreference = dietPreference.map((i) => new CodeableConcept(i));
		} else {
			this._dietPreference = [new CodeableConcept(dietPreference)];
		}
	}

	get dietPreference() {
		return this._dietPreference;
	}

	// specialCourtesy		0..*	 CodeableConcept	Special courtesies (VIP, board member)
	// SpecialCourtesy (Preferred)
	set specialCourtesy(specialCourtesy) {
		if (Array.isArray(specialCourtesy)) {
			this._specialCourtesy = specialCourtesy.map((i) => new CodeableConcept(i));
		} else {
			this._specialCourtesy = [new CodeableConcept(specialCourtesy)];
		}
	}

	get specialCourtesy() {
		return this._specialCourtesy;
	}

	// specialArrangement		0..*	 CodeableConcept	Wheelchair, translator, stretcher, etc.
	// SpecialArrangements (Preferred)
	set specialArrangement(specialArrangement) {
		if (Array.isArray(specialArrangement)) {
			this._specialArrangement = specialArrangement.map((i) => new CodeableConcept(i));
		} else {
			this._specialArrangement = [new CodeableConcept(specialArrangement)];
		}
	}

	get specialArrangement() {
		return this._specialArrangement;
	}

	// destination		0..1	 Reference(Location)	Location to which the patient is discharged
	set destination(destination) {
		this._destination = new Reference(destination);
	}

	get destination() {
		return this._destination;
	}

	// dischargeDisposition		0..1	 CodeableConcept	Category or kind of location after discharge
	// DischargeDisposition (Preferred)
	set dischargeDisposition(dischargeDisposition) {
		this._dischargeDisposition = new CodeableConcept(dischargeDisposition);
	}

	get dischargeDisposition() {
		return this._dischargeDisposition;
	}

	// dischargeDiagnosis		0..* 	Reference(Condition)	The final diagnosis given a patient before release from the hospital after
	// all testing, surgery, and workup are complete
	set dischargeDiagnosis(dischargeDiagnosis) {
		if (Array.isArray(dischargeDiagnosis)) {
			this._dischargeDiagnosis = dischargeDiagnosis.map((i) => new Reference(i));
		} else {
			this._dischargeDiagnosis = [new Reference(dischargeDiagnosis)];
		}
	}

	get dischargeDiagnosis() {
		return this._dischargeDiagnosis;
	}


	toJSON() {
		return {
			preAdmissionIdentifier: this._preAdmissionIdentifier,
			origin: this._origin,
			admitSource: this._admitSource,
			admittingDiagnosis: this._admittingDiagnosis,
			reAdmission: this._reAdmission,
			dietPreference: this._dietPreference,
			specialCourtesy: this._specialCourtesy,
			specialArrangement: this._specialArrangement,
			destination: this._destination,
			dischargeDisposition: this._dischargeDisposition,
			dischargeDiagnosis: this._dischargeDiagnosis
		};
	}
}

class Location {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// location		1..1	 Reference(Location)	Location the encounter takes place
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// status		0..1 	code	 planned | active | reserved | completed
	// EncounterLocationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// period		0..1	 Period	Time period during which the patient was present at the location
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			location: this._location,
			status: this._status,
			period: this._period
		};
	}
}

class Encounter	 extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Encounter';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	Identifier(s) by which this encounter is known
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

	// status	?! Σ	1..1 	code 	planned | arrived | in-progress | onleave | finished | cancelled
	// EncounterState (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// statusHistory		0..*	 BackboneElement	List of past encounter statuses
	set statusHistory(statusHistory) {
		if (Array.isArray(statusHistory)) {
			this._statusHistory = statusHistory.map((i) => new StatusHistory(i));
		} else {
			this._statusHistory = [new StatusHistory(statusHistory)];
		}
	}

	get statusHistory() {
		return this._statusHistory;
	}

	// encounterClass	Σ	0..1	 code	inpatient | outpatient | ambulatory | emergency +
	// EncounterClass (Required)
	set encounterClass(encounterClass) {
		this._encounterClass = new Code(encounterClass);
	}

	get encounterClass() {
		return this._encounterClass;
	}

	// type	Σ	0..*	 CodeableConcept	Specific type of encounter
	// EncounterType (Example)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// priority		0..1 	CodeableConcept	Indicates the urgency of the encounter
	// Encounter Priority (Example)
	set priority(priority) {
		this._priority = new CodeableConcept(priority);
	}

	get priority() {
		return this._priority;
	}

	// patient	Σ	0..1	 Reference(Patient)	The patient present at the encounter
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// episodeOfCare	Σ	0..*	 Reference(EpisodeOfCare)	Episode(s) of care that this encounter should be recorded against
	set episodeOfCare(episodeOfCare) {
		if (Array.isArray(episodeOfCare)) {
			this._episodeOfCare = episodeOfCare.map((i) => new Reference(i));
		} else {
			this._episodeOfCare = [new Reference(episodeOfCare)];
		}
	}

	get episodeOfCare() {
		return this._episodeOfCare;
	}

	// incomingReferral		0..*	 Reference(ReferralRequest)	The ReferralRequest that initiated this encounter
	set incomingReferral(incomingReferral) {
		if (Array.isArray(incomingReferral)) {
			this._incomingReferral = incomingReferral.map((i) => new Reference(i));
		} else {
			this._incomingReferral = [new Reference(incomingReferral)];
		}
	}

	get incomingReferral() {
		return this._incomingReferral;
	}

	// participant	Σ	0..*	 BackboneElement	List of participants involved in the encounter
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Participant(i));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// appointment	Σ	0..1 	Reference(Appointment)	The appointment that scheduled this encounter
	set appointment(appointment) {
		this._appointment = new Reference(appointment);
	}

	get appointment() {
		return this._appointment;
	}

	// period		0..1	 Period	The start and end time of the encounter
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// length		0..1	 Duration	Quantity of time the encounter lasted (less time absent)
	set length(length) {
		this._length = length;
	}

	get length() {
		return this._length;
	}

	// reason	Σ	0..*	 CodeableConcept	Reason the encounter takes place (code)
	// Encounter Reason Codes (Example)
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

	// indication		0..*	 Reference(Condition | Procedure)	Reason the encounter takes place (resource)
	set indication(indication) {
		if (Array.isArray(indication)) {
			this._indication = indication.map((i) => new Reference(i));
		} else {
			this._indication = [new Reference(indication)];
		}
	}

	get indication() {
		return this._indication;
	}

	// hospitalization		0..1	 BackboneElement	Details about the admission to a healthcare service
	set hospitalization(hospitalization) {
		this._hospitalization = new Hospitalization(hospitalization);
	}

	get hospitalization() {
		return this._hospitalization;
	}

	// location		0..* 	BackboneElement	List of locations where the patient has been
	set location(location) {
		if (Array.isArray(location)) {
			this._location = location.map((i) => new Location(i));
		} else {
			this._location = [new Location(location)];
		}
	}

	get location() {
		return this._location;
	}

	// serviceProvider		0..1	 Reference(Organization)	The custodian organization of this Encounter record
	set serviceProvider(serviceProvider) {
		this._serviceProvider = new Reference(serviceProvider);
	}

	get serviceProvider() {
		return this._serviceProvider;
	}

	// partOf		0..1	 Reference(Encounter)	Another Encounter this encounter is part of
	set partOf(partOf) {
		this._partOf = new Reference(partOf);
	}

	get partOf() {
		return this._partOf;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				status: this._status,
				statusHistory: this._statusHistory,
				encounterClass: this._encounterClass,
				type: this._type,
				priority: this._priority,
				patient: this._patient,
				episodeOfCare: this._episodeOfCare,
				incomingReferral: this._incomingReferral,
				participant: this._participant,
				appointment: this._appointment,
				period: this._period,
				length: this._length,
				reason: this._reason,
				indication: this._indication,
				hospitalization: this._hospitalization,
				location: this._location,
				serviceProvider: this._serviceProvider,
				partOf: this._partOf
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Encounter = Encounter;
module.exports.StatusHistory = StatusHistory;
module.exports.Participant = Participant;
module.exports.Hospitalization = Hospitalization;
module.exports.Location = Location;
