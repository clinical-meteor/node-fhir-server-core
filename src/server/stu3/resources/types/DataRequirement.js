const Element = require('./Element');
const Code = require('./Code');
const DataRequirementCodeFilter = require('./DataRequirementCodeFilter');
const DataRequirementDateFilter = require('./DataRequirementDateFilter');

// Σ		Element	Describes a required data item
// Elements defined in Ancestors: id, extension
class DataRequirement extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	The type of the required data
	// FHIRAllTypes (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// profile	Σ	0..*	uri	The profile of the required data
	set profile(profile) {
		this._profile = [].concat(profile);
	}

	get profile() {
		return this._profile;
	}

	// mustSupport	Σ	0..*	string	Indicates that specific structure elements are referenced by the knowledge module
	set mustSupport(mustSupport) {
		this._mustSupport = [].concat(mustSupport);
	}

	get mustSupport() {
		return this._mustSupport;
	}

	// codeFilter	Σ	0..*	Element	What codes are expected
	set codeFilter(codeFilter) {
		if (Array.isArray(codeFilter)) {
			this._codeFilter = codeFilter.map((x) => new DataRequirementCodeFilter(x));
		} else {
			this._codeFilter = [new DataRequirementCodeFilter(codeFilter)];
		}
	}

	get codeFilter() {
		return this._codeFilter;
	}

	// dateFilter	Σ	0..*	Element	What dates/date ranges are expected
	set dateFilter(dateFilter) {
		if (Array.isArray(dateFilter)) {
			this._dateFilter = dateFilter.map((x) => new DataRequirementDateFilter(x));
		} else {
			this._dateFilter = [new DataRequirementDateFilter(dateFilter)];
		}
	}

	get dateFilter() {
		return this._dateFilter;
	}

	toJSON() {
		const json = {
			type: this._type,
			profile: this._profile,
			mustSupport: this._mustSupport,
			codeFilter: this._codeFilter,
			dateFilter: this._dateFilter
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = DataRequirement;
