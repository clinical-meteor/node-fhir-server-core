const Element = require('./Element');
const Code = require('./Code');
const Reference = require('./Reference');
const Coding = require('./Coding');
const CodeableConcept = require('./CodeableConcept');

// Σ		Element	Describes a required data item
// Elements defined in Ancestors: id, extension
class DataRequirementCodeFilter extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// path	Σ	1..1	string	The code-valued attribute of the filter
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// Σ	0..1		Valueset for the filter
	// valueSetString			string
	set valueSetString(valueSetString) {
		this._valueSetString = valueSetString;
	}

	get valueSetString() {
		return this._valueSetString;
	}

	// Σ	0..1		Valueset for the filter
	// valueSetReference			Reference(ValueSet)
	set valueSetReference(valueSetReference) {
		this._valueSetReference = new Reference(valueSetReference);
	}

	get valueSetReference() {
		return this._valueSetReference;
	}

	// valueCode	Σ	0..*	code	What code is expected
	set valueCode(valueCode) {
		if (Array.isArray(valueCode)) {
			this._valueCode = valueCode.map((x) => new Code(x));
		} else {
			this._valueCode = [new Code(valueCode)];
		}
	}

	get valueCode() {
		return this._valueCode;
	}

	// valueCoding	Σ	0..*	Coding	What Coding is expected
	set valueCoding(valueCoding) {
		if (Array.isArray(valueCoding)) {
			this._valueCoding = valueCoding.map((x) => new Coding(x));
		} else {
			this._valueCoding = [new Coding(valueCoding)];
		}
	}

	get valueCoding() {
		return this._valueCoding;
	}

	// valueCodeableConcept	Σ	0..*	CodeableConcept	What CodeableConcept is expected
	set valueCodeableConcept(valueCodeableConcept) {
		if (Array.isArray(valueCodeableConcept)) {
			this._valueCodeableConcept = valueCodeableConcept.map((x) => new CodeableConcept(x));
		} else {
			this._valueCodeableConcept = [new CodeableConcept(valueCodeableConcept)];
		}
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	toJSON() {
		const json = {
			path: this._path,
			valueSetString: this._valueSetString,
			valueSetReference: this._valueSetReference,
			valueCode: this._valueCode,
			valueCoding: this._valueCoding,
			valueCodeableConcept: this._valueCodeableConcept
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = DataRequirementCodeFilter;
