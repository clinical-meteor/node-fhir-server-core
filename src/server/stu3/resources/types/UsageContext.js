const Element = require('./Element');
const Code = require('./Code');
const CodeableConcept = require('./CodeableConcept');
const Range = require('./Range');

// UsageContext	Σ		Element	Describes the context of use for a conformance or knowledge resource
// Elements defined in Ancestors: id, extension
class UsageContext extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// code	Σ	1..1	Coding	Type of context being specified
	// UsageContextType (Extensible)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// value[x]	Σ	1..1		Value that defines the context
	// Context of Use ValueSet (Example)
	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = valueQuantity;
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
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

module.exports = UsageContext;
