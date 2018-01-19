const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const Coding = require('./types/Coding');
const Attachment = require('./types/Attachment');
const OID = require('./types/OID');

class Instance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// number	Σ	0..1 	unsignedInt	The number of this instance in the series
	set number(number) {
		this._number = number;
	}

	get number() {
		return this._number;
	}

	// uid	Σ	1..1 	oid	Formal identifier for this instance
	set uid(uid) {
		this._uid = new OID(uid);
	}

	get uid() {
		return this._uid;
	}

	// sopClass	Σ	1..1 	oid	DICOM class type
	set sopClass(sopClass) {
		this._sopClass = new OID(sopClass);
	}

	get sopClass() {
		return this._sopClass;
	}

	// type	Σ	0..1 	string	Type of instance (image etc.)
	set type(type) {
		this._type = type;
	}

	get type() {
		return this._type;
	}

	// title	Σ	0..1	 string	Description of instance
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// content	Σ	0..*	 Attachment	Content of the instance
	set content(content) {
		if (Array.isArray(content)) {
			this._content = content.map((i) => new Attachment(i));
		} else {
			this._content = [new Attachment(content)];
		}
	}

	get content() {
		return this._content;
	}

	toJSON() {
		return {
			number: this._number,
			uid: this._uid,
			sopClass: this._sopClass,
			type: this._type,
			title: this._title,
			content: this._content
		};
	}
}

class Series {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// number	Σ	0..1 	unsignedInt	Numeric identifier of this series
	set number(number) {
		this._number = number;
	}

	get number() {
		return this._number;
	}

	// modality	Σ	1..1	 Coding	The modality of the instances in the series
	// Acquisition Modality Codes (Extensible)
	set modality(modality) {
		this._modality = new Coding(modality);
	}

	get modality() {
		return this._modality;
	}

	// uid	Σ	1..1	 oid	 Formal identifier for this series
	set uid(uid) {
		this._uid = new OID(uid);
	}

	get uid() {
		return this._uid;
	}

	// description	Σ	0..1 	string	A description of the series
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// numberOfInstances	Σ	1..1 	unsignedInt	Number of Series Related Instances
	set numberOfInstances(numberOfInstances) {
		this._numberOfInstances = numberOfInstances;
	}

	get numberOfInstances() {
		return this._numberOfInstances;
	}

	// availability	Σ	0..1	 code	ONLINE | OFFLINE | NEARLINE | UNAVAILABLE
	// InstanceAvailability (Required)
	set availability(availability) {
		this._availability = new Code(availability);
	}

	get availability() {
		return this._availability;
	}

	// url	Σ	0..1 	uri	Location of the referenced instance(s)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// bodySite	Σ	0..1 	Coding	Body part examined
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new Coding(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// laterality	Σ	0..1	 Coding	Body part laterality
	// Laterality (Example)
	set laterality(laterality) {
		this._laterality = new Coding(laterality);
	}

	get laterality() {
		return this._laterality;
	}

	// started	Σ	0..1 	dateTime	When the series started
	set started(started) {
		this._started = started;
	}

	get started() {
		return this._started;
	}

	// instance	Σ	0..* 	BackboneElement	A single SOP instance from the series
	set instance(instance) {
		if (Array.isArray(instance)) {
			this._instance = instance.map((i) => new Instance(i));
		} else {
			this._instance = [new Instance(instance)];
		}
	}

	get instance() {
		return this._instance;
	}

	toJSON() {
		return {
			number: this._number,
			modality: this._modality,
			uid: this._uid,
			description: this._description,
			numberOfInstances: this._numberOfInstances,
			availability: this._availability,
			url: this._url,
			bodySite: this._bodySite,
			laterality: this._laterality,
			started: this._started,
			instance: this._instance
		};
	}
}

class ImagingStudy extends DomainResource{
	constructor(obj) {
		super();
		this._resourceType = 'ImagingStudy';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// started	Σ	0..1	 dateTime	When the study was started
	set started(started) {
		this._started = started;
	}

	get started() {
		return this._started;
	}

	// patient	Σ	1..1	 Reference(Patient)	Who the images are of
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// uid	Σ	1..1 oid	Formal identifier for the study
	set uid(uid) {
		this._uid = new OID(uid);
	}

	get uid() {
		return this._uid;
	}

	// accession	Σ	0..1	 Identifier	Related workflow identifier ("Accession Number")
	set accession(accession) {
		this._accession = new Identifier(accession);
	}

	get accession() {
		return this._accession;
	}

	// identifier	Σ	0..*	Identifier	Other identifiers for the study
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

	// order	Σ	0..*	 Reference(DiagnosticOrder)	Order(s) that caused this study to be performed
	set order(order) {
		if (Array.isArray(order)) {
			this._order = order.map((i) => new Reference(i));
		} else {
			this._order = [new Reference(order)];
		}
	}

	get order() {
		return this._order;
	}

	// modalityList	Σ	0..* 	Coding	All series modality if actual acquisition modalities
	// Acquisition Modality Codes (Extensible)
	set modalityList(modalityList) {
		if (Array.isArray(modalityList)) {
			this._modalityList = modalityList.map((i) => new Coding(i));
		} else {
			this._modalityList = [new Coding(modalityList)];
		}
	}

	get modalityList() {
		return this._modalityList;
	}

	// referrer	Σ	0..1 	Reference(Practitioner)	Referring physician (0008,0090)
	set referrer(referrer) {
		this._referrer = new Reference(referrer);
	}

	get referrer() {
		return this._referrer;
	}

	// availability	Σ	0..1 	code 	ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0008,0056)
	// InstanceAvailability (Required)
	set availability(availability) {
		this._availability = new Code(availability);
	}

	get availability() {
		return this._availability;
	}

	// url	Σ	0..1 	uri	Retrieve URI
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// numberOfSeries	Σ	1..1	 unsignedInt	Number of Study Related Series
	set numberOfSeries(numberOfSeries) {
		this._numberOfSeries = numberOfSeries;
	}

	get numberOfSeries() {
		return this._numberOfSeries;
	}

	// numberOfInstances	Σ	1..1	 unsignedInt	Number of Study Related Instances
	set numberOfInstances(numberOfInstances) {
		this._numberOfInstances = numberOfInstances;
	}

	get numberOfInstances() {
		return this._numberOfInstances;
	}

	// procedure	Σ	0..*	 Reference(Procedure)	Type of procedure performed
	set procedure(procedure) {
		if (Array.isArray(procedure)) {
			this._procedure = procedure.map((i) => new Reference(i));
		} else {
			this._procedure = [new Reference(procedure)];
		}
	}

	get procedure() {
		return this._procedure;
	}

	// interpreter	Σ	0..1	 Reference(Practitioner)	Who interpreted images
	set interpreter(interpreter) {
		this._interpreter = new Reference(interpreter);
	}

	get interpreter() {
		return this._interpreter;
	}

	// description	Σ	0..1	 string	Institution-generated description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// series	Σ	0..*	 BackboneElement	Each study has one or more series of instances
	set series(series) {
		if (Array.isArray(series)) {
			this._series = series.map((i) => new Series(i));
		} else {
			this._series = [new Series(series)];
		}
	}

	get series() {
		return this._series;
	}

	toJSON() {
		const json = {
			started: this._started,
			patient: this._patient,
			uid: this._uid,
			accession: this._accession,
			identifier: this._identifier,
			order: this._order,
			modalityList: this._modalityList,
			referrer: this._referrer,
			availability: this._availability,
			url: this._url,
			numberOfSeries: this._numberOfSeries,
			numberOfInstances: this._numberOfInstances,
			procedure: this._procedure,
			interpreter: this._interpreter,
			description: this._description,
			series: this._series
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ImagingStudy = ImagingStudy;
module.exports.Series = Series;
module.exports.Instance = Instance;
