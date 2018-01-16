const Element = require('./Element');
const Reference = require('./Reference');

// Annotation		Σ	Element Text node with attribution
class Annotation extends Element {

	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// Σ 0..1	Individual responcible for the annotation
	// authorReference			Reference(Practitioner | Patient | RelatedPerson)
	set authorReference(authorReference) {
		this._authorReference = new Reference(authorReference);
	}

	get authorReference() {
		return this._authorReference;
	}

	// Σ 0..1	Individual responcible for the annotation
	// authorString				string
	set authorString(authorString) {
		this._authorString = authorString;
	}

	get authorString() {
		return this._authorString;
	}

	// time	Σ	0..1	 dateTime	When the annotation was made
	set time(time) {
		this._time = time;
	}

	get time() {
		return this._time;
	}

	// text	Σ	1..1	 string	The annotation - text content
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		const json = {
				authorReference: this._authorReference,
				authorString: this._authorString,
				time: this._time,
				text: this._text
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Annotation;
