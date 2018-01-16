const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Annotation = require('./types/Annotation');

class Reaction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// substance 	Σ	0..1	 CodeableConcept	Specific substance considered to be responsible for event
	// Substance Code (Example)
	set substance(substance) {
		this._substance = new CodeableConcept(substance);
	}

	get substance() {
		return this._substance;
	}

	// certainty	 Σ	0..1	 code	unlikely | likely | confirmed - clinical certainty about the specific substance
	// AllergyIntoleranceCertainty (Required)
	set certainty(certainty) {
		this._certainty = new Code(certainty);
	}

	// manifestation	 Σ	1..*	 CodeableConcept	Clinical symptoms/signs associated with the Event
	// SNOMED CT Clinical Findings (Example)
	set manifestation(manifestation) {
		if (Array.isArray(manifestation)) {
			this._manifestation = manifestation.map((x) => new CodeableConcept(x));
		} else {
			this._manifestation = [new Reaction(manifestation)];
		}
	}

	get manifestation() {
		return this._manifestation;
	}

	// description		0..1	 string	Description of the event as a whole
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// onset 	Σ	0..1	 dateTime	Date(/time) when manifestations showed
	set onset(onset) {
		this._onset = onset;
	}

	get onset() {
		return this._onset;
	}

	// severity	Σ	0..1	 code	mild | moderate | severe (of event as a whole)
	// AllergyIntoleranceSeverity (Required)
	set severity(severity) {
		this._severity = new Code(severity);
	}

	get severity() {
		return this._severity;
	}

	// exposureRoute	 Σ	0..1 	CodeableConcept	How the subject was exposed to the substance
	// SNOMED CT Route Codes (Example)
	set exposureRoute(exposureRoute) {
		this._exposureRoute = new CodeableConcept(exposureRoute);
	}

	get exposureRoute() {
		return this._exposureRoute;
	}

	// note		0..1 	Annotation	Text about event not captured in other fields
	set note(note) {
		this._note = new Annotation(note);
	}

	get note() {
		return this._note;
	}

	toJSON() {
		return {
			substance: this._substance,
			certainty: this._certainty,
			manifestation: this._manifestation,
			description: this.description,
			onset: this._onset,
			severity: this._severity,
			exposureRoute: this._exposureRoute,
			note: this._note
		};
	}
}

class AllergyIntolerance extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'AllergyIntolerance';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External ids for this item
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

	// onset 	Σ	0..1	 dateTime	Date(/time) when manifestations showed
	set onset(onset) {
		this._onset = onset;
	}

	get onset() {
		return this._onset;
	}

	// recordedDate	Σ	0..1	 dateTime	When recorded
	set recordedDate(recordedDate) {
		this._recordedDate = recordedDate;
	}

	get recordedDate() {
		return this._recordedDate;
	}

	// recorder	Σ	0..1	 Reference(Practitioner | Patient)	Who recorded the sensitivity
	set recorder(recorder) {
		this._recorder = new Reference(recorder);
	}

	get recorder() {
		return this._recorder;
	}

	// patient	Σ	1..1 	Reference(Patient)	Who the sensitivity is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// reporter	Σ	0..1	 Reference(Patient | RelatedPerson | Practitioner)	Source of the information about the allergy
	set reporter(reporter) {
		this._reporter = new Reference(reporter);
	}

	get reporter() {
		return this._reporter;
	}

	// substance	 Σ	1..1	 CodeableConcept	Substance, (or class) considered to be responsible for risk
	// AllergyIntolerance Substance and Negation Codes (Example)
	set substance(substance) {
		this._substance = new CodeableConcept(substance);
	}

	get substance() {
		return this._substance;
	}

	// status	?! Σ	0..1 	code 	active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error
	// AllergyIntoleranceStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// criticality	Σ	0..1 	code 	CRITL | CRITH | CRITU
	// AllergyIntoleranceCriticality (Required)
	set criticality(criticality) {
		this._criticality = new Code(criticality);
	}

	get criticality() {
		return this._criticality;
	}

	// type	Σ	0..1	 code	allergy | intolerance - Underlying mechanism (if known)
	// AllergyIntoleranceType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// category	Σ	0..1	 code	food | medication | environment | other - Category of Substance
	// AllergyIntoleranceCategory (Required)
	set category(category) {
		this._category = new Code(category);
	}

	get category() {
		return this._category;
	}

	// lastOccurence	 Σ	0..1 	dateTime	 Date(/time) of last known occurrence of a reaction
	set lastOccurence(lastOccurence) {
		this._lastOccurence = lastOccurence;
	}

	get lastOccurence() {
		return this._lastOccurence;
	}

	// note		0..1 	Annotation	Additional text not captured in other fields
	set note(note) {
		this._note = new Annotation(note);
	}

	get note() {
		return this._note;
	}

	// reaction		0..*	 BackboneElement	Adverse Reaction Events linked to exposure to substance
	set reaction(reaction) {
		if (Array.isArray(reaction)) {
			this._reaction = reaction.map((x) => new Reaction(x));
		} else {
			this._reaction = [new Reaction(reaction)];
		}
	}

	get reaction() {
		return this._reaction;
	}

	toJSON() {
		const json = {
				identifier: this._identifier,
				onset: this._onset,
				recordedDate: this._recordedDate,
				recorder: this._recorder,
				patient: this._patient,
				reporter: this._reporter,
				substance: this._substance,
				status: this._status,
				criticality: this._criticality,
				type: this._type,
				category: this._category,
				lastOccurence: this._lastOccurence,
				note: this._note,
				reaction: this._reaction
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.AllergyIntolerance = AllergyIntolerance;
module.exports.Reaction = Reaction;
