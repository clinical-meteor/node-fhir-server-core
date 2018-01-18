const { ISSUE } = require('../../constants');
const { OperationOutcome: dstu2OperationOutcome } = require('../dstu2/resources');
const { OperationOutcome: stu3OperationOutcome } = require('../stu3/resources');

// /**
//  * @class ServerError
//  * @summary Extends error to add additional code property
//  */
// class ServerError extends Error {
//   constructor (code, message) {
//     super(message);
//
//     if (Error.captureStackStrace) {
//       Error.captureStackStrace(this, ServerError);
//     }
//
//     this.code = code;
//   }
// }

// Invalid or Missing parameter from request
let invalidParameter = message =>
({
		statusCode: 400,
		code: ISSUE.CODE.INVALID,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message,
		message
	});

// Unauthorized request of some resource
let unauthorized = message =>
({
		statusCode: 401,
		code: ISSUE.CODE.FORBIDDEN,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Unauthorized request',
		message: message || 'Unauthorized request'
	});

let insufficientScope = message =>
({
		statusCode: 403,
		code: ISSUE.CODE.FORBIDDEN,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Insufficient scope',
		message: message || 'Insufficient scope'
	});

let notFound = message =>
({
		statusCode: 404,
		code: ISSUE.CODE.NOT_FOUND,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Not found',
		message: message || 'Not found'
	});

let deleted = message =>
({
		statusCode: 410,
		code: ISSUE.CODE.NOT_FOUND,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Resource deleted',
		message: message || 'Resource deleted'
	});

let internal = message =>
({
		statusCode: 500,
		code: ISSUE.CODE.EXCEPTION,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Internal server error',
		message: message || 'Internal server error'
	});

let getErrorConstructor = url => {
	if (url.indexOf('dstu2/') > -1) { return dstu2OperationOutcome; }
	else if (url.indexOf('stu3/') > -1) { return stu3OperationOutcome; }
	else { return stu3OperationOutcome; }
};

/**
 * @name exports
 * @static
 * @summary Error Configurations
 */
module.exports = {
	invalidParameter,
	unauthorized,
	insufficientScope,
	notFound,
	deleted,
	internal,
	getErrorConstructor
	// ServerError
};
