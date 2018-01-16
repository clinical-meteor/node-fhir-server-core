const DomainResource = require('./types/DomainResource');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Ratio = require('./types/Ratio');

class Ingredient {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// item		1..1 	Reference(Substance | Medication)	The product contained
	set item(item) {
		this._item = new Reference(item);
	}

	get item() {
		return this._item;
	}

	// amount		0..1	 Ratio	Quantity of ingredient present
	set amount(amount) {
		this._amount = new Ratio(amount);
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			item: this._item,
			amount: this._amount
		};
	}
}

class Batch {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// lotNumber		0..1	 string
	set lotNumber(lotNumber) {
		this._lotNumber = lotNumber;
	}

	get lotNumber() {
		return this._lotNumber;
	}

	// expirationDate		0..1	 dateTime
	set expirationDate(expirationDate) {
		this._expirationDate = expirationDate;
	}

	get expirationDate() {
		return this._expirationDate;
	}

	toJSON() {
		return {
			lotNumber: this._lotNumber,
			expirationDate: this._expirationDate
		};
	}
}

class Product {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// form		0..1	 CodeableConcept	powder | tablets | carton +
	// SNOMED CT Form Codes (Example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// ingredient		0..*	 BackboneElement	Active or inactive ingredient
	set ingredient(ingredient) {
		if (Array.isArray(ingredient)) {
			this._ingredient = ingredient.map((i) => new Ingredient(i));
		} else {
			this._ingredient = [new Ingredient(ingredient)];
		}
	}

	get ingredient() {
		return this._ingredient;
	}

	// batch		0..*	 BackboneElement
	set batch(batch) {
		if (Array.isArray(batch)) {
			this._batch = batch.map((i) => new Batch(i));
		} else {
			this._batch = [new Batch(batch)];
		}
	}

	get batch() {
		return this._batch;
	}

	toJSON() {
		return {
			form: this._form,
			ingredient: this._ingredient,
			batch: this._batch
		};
	}
}

class Content {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// item		1..1 	Reference(Medication)	A product in the package
	set item(item) {
		this._item = new Reference(item);
	}

	get item() {
		return this._item;
	}

	// amount		0..1	 SimpleQuantity	Quantity present in the package
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			item: this._item,
			amount: this._amount
		};
	}
}

class MedicationPackage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// container		0..1 	CodeableConcept	E.g. box, vial, blister-pack
	// SNOMED CT Form Codes (Example)
	set container(container) {
		this._container = new CodeableConcept(container);
	}

	get container() {
		return this._container;
	}

	// content		0..*	 BackboneElement	What is in the package
	set content(content) {
		if (Array.isArray(content)) {
			this._content = content.map((i) => new Content(i));
		} else {
			this._content = [new Content(content)];
		}
	}

	get content() {
		return this._content;
	}

	toJSON() {
		return {
			container: this._container,
			content: this._content
		};
	}
}

class Medication extends DomainResource{
	constructor(obj) {
		super();
		this._resourceType = 'Medication';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// code	Σ	0..1 	CodeableConcept	Codes that identify this medication
	// SNOMED CT Medication Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// isBrand	Σ	0..1 	boolean	True if a brand
	set isBrand(isBrand) {
		this._isBrand = isBrand;
	}

	get isBrand() {
		return this._isBrand;
	}

	// manufacturer	Σ	0..1	 Reference(Organization)	Manufacturer of the item
	set manufacturer(manufacturer) {
		this._manufacturer = new Reference(manufacturer);
	}

	get manufacturer() {
		return this._manufacturer;
	}

	// product		0..1	 BackboneElement	Administrable medication details
	set product(product) {
		this._product = new Product(product);
	}

	get product() {
		return this._product;
	}

	// medicationPackage		0..1	 BackboneElement	Details about packaged medications
	set medicationPackage(medicationPackage) {
		this._medicationPackage = new MedicationPackage(medicationPackage);
	}

	get medicationPackage() {
		return this._medicationPackage;
	}

	toJSON() {
		const json = {
			code: this._code,
			isBrand: this._isBrand,
			manufacturer: this._manufacturer,
			product: this._product,
			medicationPackage: this._medicationPackage
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Medication = Medication;
module.exports.Product = Product;
module.exports.Ingredient = Ingredient;
module.exports.Batch = Batch;
module.exports.MedicationPackage = MedicationPackage;
module.exports.Content = Content;
