const Identifier = require('./Identifier');

class Reference {
	constructor(obj) {
		Object.assign(this, obj);
	}

	set reference(reference) {
		this._reference = reference;
	}

	get reference() {
		return this._reference;
	}

	// identifier	Σ	0..1	Identifier	Logical reference, when literal reference is not known
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	toJSON() {
		return {
			reference: this._reference,
			identifier: this._identifier,
			display: this._display
		};
	}
}

module.exports = Reference;
