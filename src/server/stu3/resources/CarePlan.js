const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');
const Timing = require('./types/Timing');

class RelatedPlan {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		0..1	 code	includes | replaces | fulfills
	// CarePlanRelationship (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// plan		1..1 	Reference(CarePlan)	Plan relationship exists with
	set plan(plan) {
		this._plan = new Reference(plan);
	}

	get plan() {
		return this._plan;
	}

	toJSON() {
		return {
			code: this._code,
			plan: this._plan
		};
	}
}

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role		0..1	CodeableConcept	Type of involvement
	// Participant Roles (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// member		0..1	Reference(Practitioner | RelatedPerson | Patient | Organization)	Who is involved
	set member(member) {
		this._member = new Reference(member);
	}

	get member() {
		return this._member;
	}

	toJSON() {
		return {
			role: this._role,
			member: this._member
		};
	}
}

class Detail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// category		0..1	CodeableConcept	diet | drug | encounter | observation | procedure | supply | other
	// CarePlanActivityCategory (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code		0..1	CodeableConcept	Detail type of activity
	// Care Plan Activity (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// reasonCode		0..*	CodeableConcept	Why activity should be done
	// Activity Reason (Example)
	set reasonCode(reasonCode) {
		if (Array.isArray(reasonCode)) {
			this._reasonCode = reasonCode.map((i) => new CodeableConcept(i));
		} else {
			this._reasonCode = [new CodeableConcept(reasonCode)];
		}
	}

	get reasonCode() {
		return this._reasonCode;
	}

	// reasonReference		0..*	Reference(Condition)	Condition triggering need for activity
	set reasonReference(reasonReference) {
		if (Array.isArray(reasonReference)) {
			this._reasonReference = reasonReference.map((i) => new Reference(i));
		} else {
			this._reasonReference = [new Reference(reasonReference)];
		}
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// goal		0..*	Reference(Goal)	Goals this activity relates to
	set goal(goal) {
		if (Array.isArray(goal)) {
			this._goal = goal.map((i) => new Reference(i));
		} else {
			this._goal = [new Reference(goal)];
		}
	}

	get goal() {
		return this._goal;
	}

	// status	?!	0..1	code	not-started | scheduled | in-progress | on-hold | completed | cancelled
	// CarePlanActivityStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// statusReason		0..1	CodeableConcept	Reason for current status
	// GoalStatusReason (Example)
	set statusReason(statusReason) {
		this._statusReason = new CodeableConcept(statusReason);
	}

	get statusReason() {
		return this._statusReason;
	}

	// prohibited	?!	1..1	boolean	Do NOT do
	set prohibited(prohibited) {
		this._prohibited = prohibited;
	}

	get prohibited() {
		return this._prohibited;
	}

	// 0..1		When activity is to occur
	// scheduledTiming			Timing
	set scheduledTiming(scheduledTiming) {
		this._scheduledTiming = new Timing(scheduledTiming);
	}

	get scheduledTiming() {
		return this._scheduledTiming;
	}

	// 0..1		When activity is to occur
	// scheduledPeriod			Period
	set scheduledPeriod(scheduledPeriod) {
		this._scheduledPeriod = new Period(scheduledPeriod);
	}

	get scheduledPeriod() {
		return this._scheduledPeriod;
	}

	// 0..1		When activity is to occur
	// scheduledString			string
	set scheduledString(scheduledString) {
		this._scheduledString = scheduledString;
	}

	get scheduledString() {
		return this._scheduledString;
	}

	// location		0..1	Reference(Location)	Where it should happen
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// performer		0..*	Reference(Practitioner | Organization | RelatedPerson | Patient)	Who will be responsible?
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Reference(i));
		} else {
			this._performer = [new Reference(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// 0..1		What is to be administered/supplied
	// SNOMED CT Medication Codes (Example)
	// productCodeableConcept			CodeableConcept
	set productCodeableConcept(productCodeableConcept) {
		this._productCodeableConcept = new CodeableConcept(productCodeableConcept);
	}

	get productCodeableConcept() {
		return this._productCodeableConcept;
	}

	// 0..1		What is to be administered/supplied
	// SNOMED CT Medication Codes (Example)
	// productReference			Reference(Medication | Substance)
	set productReference(productReference) {
		this._productReference = new Reference(productReference);
	}

	get productReference() {
		return this._productReference;
	}

	// dailyAmount		0..1	SimpleQuantity	How to consume/day?
	set dailyAmount(dailyAmount) {
		this._dailyAmount = dailyAmount;
	}

	get dailyAmount() {
		return this._dailyAmount;
	}

	// quantity		0..1	SimpleQuantity	How much to administer/supply/consume
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// description		0..1	string	Extra info describing activity to perform
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	toJSON() {
		return {
			category: this._category,
			code: this._code,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			goal: this._goal,
			status: this._status,
			statusReason: this._statusReason,
			prohibited: this._prohibited,
			scheduledTiming: this._scheduledTiming,
			scheduledPeriod: this._scheduledPeriod,
			scheduledString: this._scheduledString,
			location: this._location,
			performer: this._performer,
			productCodeableConcept: this._productCodeableConcept,
			productReference: this._productReference,
			dailyAmount: this._dailyAmount,
			quantity: this._quantity,
			description: this._description
		};
	}
}

class Activity {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actionResulting		0..*	Reference(Any)	Appointments, orders, etc.
	set actionResulting(actionResulting) {
		if (Array.isArray(actionResulting)) {
			this._actionResulting = actionResulting.map((i) => new Reference(i));
		} else {
			this._actionResulting = [new Reference(actionResulting)];
		}
	}

	get actionResulting() {
		return this._actionResulting;
	}

	// progress		0..*	Annotation	Comments about the activity status/progress
	set progress(progress) {
		if (Array.isArray(progress)) {
			this._progress = progress.map((i) => new Annotation(i));
		} else {
			this._progress = [new Annotation(progress)];
		}
	}

	get progress() {
		return this._progress;
	}

	// reference	I	0..1	Reference(Appointment | CommunicationRequest | DeviceUseRequest | DiagnosticOrder | MedicationOrder | NutritionOrder | Order |
	// ProcedureRequest | ProcessRequest | ReferralRequest | SupplyRequest | VisionPrescription)	Activity details defined in specific resource
	set reference(reference) {
		this._reference = new Reference(reference);
	}

	get reference() {
		return this._reference;
	}

	// detail	I	0..1	BackboneElement	In-line definition of activity
	set detail(detail) {
		this._detail = new Detail(detail);
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			actionResulting: this._actionResulting,
			progress: this._progress,
			reference: this._reference,
			detail: this._detail
		};
	}
}

class CarePlan extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CarePlan';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	 Identifier	External ids for this plan
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

	// subject	Σ	0..1	 Reference(Patient | Group)	Who care plan is for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// status	?! Σ	1..1	 code	proposed | draft | active | completed | cancelled
	// CarePlanStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// context	Σ	0..1	 Reference(Encounter | EpisodeOfCare)	Created in context of
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// period	Σ	0..1 	Period	Time period plan covers
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// author	Σ	0..* 	Reference(Patient | Practitioner | RelatedPerson | Organization)	Who is responsible for contents of the plan
	set author(author) {
		if (Array.isArray(author)) {
			this._author = author.map((x) => new Reference(x));
		} else {
			this._author = [new Reference(author)];
		}
	}

	get author() {
		return this._author;
	}

	// modified	Σ	0..1 	dateTime	When last updated
	set modified(modified) {
		this._modified = modified;
	}

	get modified() {
		return this._modified;
	}

	// category	Σ	0..*	 CodeableConcept	Type of plan
	// Care Plan Category (Example)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((x) => new CodeableConcept(x));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// description	Σ	0..1 	string	Summary of nature of plan
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// addresses 	Σ	0..*	 Reference(Condition)	Health issues this plan addresses
	set addresses(addresses) {
		if (Array.isArray(addresses)) {
			this._addresses = addresses.map((x) => new Reference(x));
		} else {
			this._addresses = [new Reference(addresses)];
		}
	}

	get addresses() {
		return this._addresses;
	}

	// support		0..*	 Reference(Any)	Information considered as part of plan
	set support(support) {
		if (Array.isArray(support)) {
			this._support = support.map((x) => new Reference(x));
		} else {
			this._support = [new Reference(support)];
		}
	}

	get support() {
		return this._support;
	}

	// relatedPlan		0..*	 BackboneElement	Plans related to this one
	set relatedPlan(relatedPlan) {
		if (Array.isArray(relatedPlan)) {
			this._relatedPlan = relatedPlan.map((x) => new RelatedPlan(x));
		} else {
			this._relatedPlan = [new RelatedPlan(relatedPlan)];
		}
	}

	get relatedPlan() {
		return this._relatedPlan;
	}

	// participant		0..*	 BackboneElement	Who's involved in plan?
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((x) => new Participant(x));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// goal		0..* 	Reference(Goal)	Desired outcome of plan
	set goal(goal) {
		if (Array.isArray(goal)) {
			this._goal = goal.map((x) => new Reference(x));
		} else {
			this._goal = [new Reference(goal)];
		}
	}

	get goal() {
		return this._goal;
	}

	// activity	I	0..*	 BackboneElement	Action to occur as part of plan
	set activity(activity) {
		if (Array.isArray(activity)) {
			this._activity = activity.map((x) => new Activity(x));
		} else {
			this._activity = [new Activity(activity)];
		}
	}

	get activity() {
		return this._activity;
	}

	// note		0..1 	Annotation	Comments about the plan
	set note(note) {
		this._note = new Annotation(note);
	}

	get note() {
		return this._note;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				subject: this._subject,
				status: this._status,
				context: this._context,
				period: this._period,
				author: this._author,
				modified: this._modified,
				category: this._category,
				description: this._description,
				addresses: this._addresses,
				support: this._support,
				relatedPlan: this._relatedPlan,
				participant: this._participant,
				goal: this._goal,
				activity: this._activity,
				note: this._note
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CarePlan = CarePlan;
module.exports.RelatedPlan = RelatedPlan;
module.exports.Participant = Participant;
module.exports.Activity = Activity;
module.exports.Detail = Detail;
