const Code = require('./Code');
const Reference = require('./Reference');

class Related {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	code	has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
	// ObservationRelationshipType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// target		1..1	Reference(Observation | QuestionnaireResponse | Sequence)	Resource that is related to this one
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	toJSON() {
		return {
			type: this._type,
			target: this._target
		};
	}
}

module.exports = Related;
