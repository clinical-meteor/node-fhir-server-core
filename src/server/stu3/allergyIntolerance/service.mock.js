module.exports.getCount = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling allergyIntolerance mock service. Did you forget to implement \'getCount\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAllergyIntolerance = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling allergyIntolerance mock service. Did you forget to implement \'getAllergyIntolerance\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.getAllergyIntoleranceByID = (req, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'getAllergyIntoleranceById\'';
	logger.info(message);
	reject(new Error(message));
});
