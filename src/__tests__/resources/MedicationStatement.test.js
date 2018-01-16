const path = require('path');
const { MedicationStatement } = require(path.resolve('./src/server/dstu2/resources/MedicationStatement'));

describe('MedicationStatement Resource Tests', () => {
	test('should create an MedicationStatement Object default type', () => {
		let medicationStatement = new MedicationStatement();

		const expected = {
			resourceType: 'MedicationStatement'
		};

		expect(medicationStatement).toBeInstanceOf(MedicationStatement);
		expect(medicationStatement.resourceType).toEqual('MedicationStatement');
		expect(JSON.stringify(medicationStatement)).toEqual(JSON.stringify(expected));
	});
});
