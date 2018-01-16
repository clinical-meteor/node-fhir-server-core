const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');

class Performer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actor 	Σ	0..1	 Reference(Practitioner | Organization | Patient | RelatedPerson)	The reference to the practitioner
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	// role	Σ	0..1 	CodeableConcept	The role the actor was in
	// Procedure Performer Role Codes (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	toJSON() {
		return {
			actor: this._actor,
			role: this._role
		};
	}
}

class FocalDevice {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action		0..1 	CodeableConcept	Kind of change to device
	// Procedure Device Action Codes (Required)
	set action(action) {
		this._action = new CodeableConcept(action);
	}

	get action() {
		return this._action;
	}

	// manipulated		1..1	 Reference(Device)	Device that was changed
	set manipulated(manipulated) {
		this._manipulated = new Reference(manipulated);
	}

	get manipulated() {
		return this._manipulated;
	}

	toJSON() {
		return {
			action: this._action,
			manipulated: this._manipulated
		};
	}
}

class Procedure extends DomainResource{
	constructor(obj) {
		super();
		this._resourceType = 'Procedure';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	External Identifiers for this procedure
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

	// subject	Σ	1..1	 Reference(Patient | Group)	Who the procedure was performed on
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// status	?! Σ	1..1 	code	 in-progress | aborted | completed | entered-in-error
	// ProcedureStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..1 	CodeableConcept	Classification of the procedure
	// Procedure Category Codes (SNOMED CT) (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	Σ	1..1	 CodeableConcept	Identification of the procedure
	// Procedure Codes (SNOMED CT) (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// notPerformed	?!	0..1 	boolean	True if procedure was not performed as scheduled
	set notPerformed(notPerformed) {
		this._notPerformed = notPerformed;
	}

	get notPerformed() {
		return this._notPerformed;
	}

	// reasonNotPerformed	I	0..*	 CodeableConcept	Reason procedure was not performed
	// Procedure Not Performed Reason (SNOMED-CT) (Example)
	set reasonNotPerformed(reasonNotPerformed) {
		if (Array.isArray(reasonNotPerformed)) {
			this._reasonNotPerformed = reasonNotPerformed.map((i) => new CodeableConcept(i));
		} else {
			this._reasonNotPerformed = [new CodeableConcept(reasonNotPerformed)];
		}
	}

	get reasonNotPerformed() {
		return this._reasonNotPerformed;
	}

	// bodySite	Σ	0..*	 CodeableConcept	Target body sites
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

	// Σ	0..1		Reason procedure performed
	// Procedure Reason Codes (Example)
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// Σ	0..1		Reason procedure performed
	// Procedure Reason Codes (Example)
	// reasonReference		Reference(Condition)
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// performer	Σ	0..*	 BackboneElement	The people who performed the procedure
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Performer(i));
		} else {
			this._performer = [new Performer(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// performed[x]	Σ	0..1		Date/Period the procedure was performed
	// performedDateTime			dateTime
	set performedDateTime(performedDateTime) {
		this._performedDateTime = performedDateTime;
	}

	get performedDateTime() {
		return this._performedDateTime;
	}

	// performed[x]	Σ	0..1		Date/Period the procedure was performed
	// performedPeriod		Period
	set performedPeriod(performedPeriod) {
		this._performedPeriod = new Period(performedPeriod);
	}

	get performedPeriod() {
		return this._performedPeriod;
	}

	// encounter	Σ	0..1 	Reference(Encounter)	The encounter associated with the procedure
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// location	Σ	0..1 	Reference(Location)	Where the procedure happened
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// outcome	Σ	0..1 	CodeableConcept	The result of procedure
	// Procedure Outcome Codes (SNOMED CT) (Example)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// report		0..* 	Reference(DiagnosticReport)	Any report resulting from the procedure
	set report(report) {
		if (Array.isArray(report)) {
			this._report = report.map((i) => new Reference(i));
		} else {
			this._report = [new Reference(report)];
		}
	}

	get report() {
		return this._report;
	}

	// complication		0..*	 CodeableConcept	Complication following the procedure
	// Condition/Problem/Diagnosis Codes (Example)
	set complication(complication) {
		if (Array.isArray(complication)) {
			this._complication = complication.map((i) => new CodeableConcept(i));
		} else {
			this._complication = [new CodeableConcept(complication)];
		}
	}

	get complication() {
		return this._complication;
	}

	// followUp		0..*	 CodeableConcept	Instructions for follow up
	// Procedure Follow up Codes (SNOMED CT) (Example)
	set followUp(followUp) {
		if (Array.isArray(followUp)) {
			this._followUp = followUp.map((i) => new CodeableConcept(i));
		} else {
			this._followUp = [new CodeableConcept(followUp)];
		}
	}

	get followUp() {
		return this._followUp;
	}

	// request		0..1	 Reference(CarePlan | DiagnosticOrder | ProcedureRequest | ReferralRequest)	A request for this procedure
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// notes		0..* 	Annotation	Additional information about the procedure
	set notes(notes) {
		if (Array.isArray(notes)) {
			this._notes = notes.map((i) => new Annotation(i));
		} else {
			this._notes = [new Annotation(notes)];
		}
	}

	get notes() {
		return this._notes;
	}

	// focalDevice		0..*	 BackboneElement	Device changed in procedure
	set focalDevice(focalDevice) {
		if (Array.isArray(focalDevice)) {
			this._focalDevice = focalDevice.map((i) => new FocalDevice(i));
		} else {
			this._focalDevice = [new FocalDevice(focalDevice)];
		}
	}

	get focalDevice() {
		return this._focalDevice;
	}

	// used		0..* 	Reference(Device | Medication | Substance)	Items used during procedure
	set used(used) {
		if (Array.isArray(used)) {
			this._used = used.map((i) => new Reference(i));
		} else {
			this._used = [new Reference(used)];
		}
	}

	get used() {
		return this._used;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			subject: this._subject,
			status: this._status,
			category: this._category,
			code: this._code,
			notPerformed: this._notPerformed,
			reasonNotPerformed: this._reasonNotPerformed,
			bodySite: this._bodySite,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			performer: this._performer,
			performedDateTime: this._performedDateTime,
			performedPeriod: this._performedPeriod,
			encounter: this._encounter,
			location: this._location,
			outcome: this._outcome,
			report: this._report,
			complication: this._complication,
			followUp: this._followUp,
			request: this._request,
			notes: this._notes,
			focalDevice: this._focalDevice,
			used: this._used
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Procedure = Procedure;
module.exports.Performer = Performer;
module.exports.FocalDevice = FocalDevice;
