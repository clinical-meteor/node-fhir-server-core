const CodeableConcept = require('./CodeableConcept');
const Range = require('./Range');

// I	0..*	BackboneElement	Provides guide for interpretation
// Must have at least a low or a high or text
class ReferenceRange {

	constructor(obj) {
		Object.assign(this, obj);
	}

	// I	0..1	SimpleQuantity	Low Range, if relevant
	set low(low){
		this._low = low;
	}

	get low() {
		return this._low;
	}

	// I	0..1	SimpleQuantity	High Range, if relevant
	set high(high) {
		this._high = high;
	}

	get high() {
		return this._high;
	}

	// type		0..1	CodeableConcept	Reference range qualifier
	// Observation Reference Range Meaning Codes (Extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// appliesTo		0..*	CodeableConcept	Reference range population
	// Observation Reference Range Applies To Codes (Example)
	set appliesTo(appliesTo) {
		if (Array.isArray(appliesTo)) {
			this._appliesTo = appliesTo.map((i) => new CodeableConcept(i));
		} else {
			this._appliesTo = [new CodeableConcept(appliesTo)];
		}
	}

	get appliesTo() {
		return this._appliesTo;
	}

	// 0..1	Range	Applicable age range, if relevant
	set age(age) {
		this._age = new Range(age);
	}

	get age() {
		return this._age;
	}

	// 0..1	string	Text based reference range in an observation
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			low: this._low,
			high: this._high,
			type: this._type,
			appliesTo: this._appliesTo,
			age: this._age,
			text: this._text
		};
	}
}

module.exports = ReferenceRange;
