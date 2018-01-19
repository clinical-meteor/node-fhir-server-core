const Element = require('./Element');
const Period = require('./Period');

// Σ		Element	Describes a required data item
// Elements defined in Ancestors: id, extension
class DataRequirementDateFilter extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// path	Σ	1..1	string	The date-valued attribute of the filter
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// Σ	0..1		The value of the filter, as a Period, DateTime, or Duration value
	// valueDateTime			dateTime
	set valueDateTime(valueDateTime) {
		this._valueDateTime = valueDateTime;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// Σ	0..1		The value of the filter, as a Period, DateTime, or Duration value
	// valuePeriod			Period
	set valuePeriod(valuePeriod) {
		this._valuePeriod = new Period(valuePeriod);
	}

	get valuePeriod() {
		return this._valuePeriod;
	}

	// Σ	0..1		The value of the filter, as a Period, DateTime, or Duration value
	// valueDuration			Duration
	set valueDuration(valueDuration) {
		this._valueDuration = valueDuration;
	}

	get valueDuration() {
		return this._valueDuration;
	}

	toJSON() {
		const json = {
			path: this._path,
			valueDateTime: this._valueDateTime,
			valuePeriod: this._valuePeriod,
			valueDuration: this._valueDuration
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = DataRequirementDateFilter;
