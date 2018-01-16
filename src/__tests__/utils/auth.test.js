/* eslint-disable */
const path = require('path');
const nock = require('nock');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const auth = require(path.resolve('./src/server/utils/auth'));
const errors = require(path.resolve('./src/server/utils/error.utils'));

// The auth methods should return errors according to https://tools.ietf.org/html/rfc6750#section-3.1
describe('Auth Utils Test', () => {

	let config = {};
	const mockNext = jest.fn();

	const mockLogger = {
		error: _.noop,
		info: _.noop,
		debug: _.noop
	};

	const secretKey = 'secret';
	const aud = 'audience';
	const iss = 'issuer';
	const requiredScopes = ['patient/*.*'];

	const validTokenWithScopes = jwt.sign({ aud, iss, scope: requiredScopes.join(' ') }, secretKey);
	const validTokenWithoutScopes = jwt.sign({ aud, iss }, secretKey);
	const validTokenWithInsufficientScopes = jwt.sign({ aud, iss, scope: 'sillyscope' }, secretKey);

	const introspection_endpoint = 'https://introspection.com';

	const validateFn = auth.validate(requiredScopes, mockLogger, config);

	beforeEach(() => {
		Object.assign(config, {
			auth: {
				clientId: aud,
				secret: secretKey,
				issuer: iss,
				introspection_endpoint
			}
		});
	});

	afterEach(() => {
		//Object.keys(config).forEach(k => delete config[k]);
		//Object.assign(config, originalConfig);
		mockNext.mockClear();
	});

	test('should not validate a request without a valid authorization header', async () => {
		await validateFn({ headers: {} }, {}, mockNext);
		expect(mockNext.mock.calls[0][0]).toEqual(errors.unauthorized());
	});

	test('should not validate a request with an undecodable token', async () => {
		await validateFn({ headers: { authorization: 'Bearer asdfasdfasdfa' } }, {}, mockNext);
		expect(mockNext.mock.calls[0][0]).toEqual(errors.unauthorized('Invalid token'));
	});

	test('should validate a request with a valid token with sufficient scopes in the token', async () => {
		await validateFn({ headers: { authorization: `Bearer ${validTokenWithScopes}` } }, {}, mockNext);
		expect(mockNext.mock.calls[0][0]).toBeUndefined();
	});

	test('should not validate a request with a valid token with insufficient scopes', async () => {
		await validateFn({ headers: { authorization: `Bearer ${validTokenWithInsufficientScopes}` } }, {}, mockNext);
		expect(mockNext.mock.calls[0][0]).toEqual(errors.insufficientScope());
	});

	// ***** Introspection test website is down at the moment ********

	// test('should not validate a request with a valid token without a scope or an introspection endpoint', async () => {
	// 	config.introspection_endpoint = undefined;
	// 	await validateFn({ headers: { authorization: `Bearer ${validTokenWithoutScopes}` } }, {}, mockNext);
	// 	console.log(mockNext.mock.calls);
	// 	expect(mockNext.mock.calls[0][0]).toEqual(errors.insufficientScope());
	// });

	// test('should not validate a request with a valid token but introspection endpoint fails', async () => {
	// 	nock(introspection_endpoint).post('/').reply(500);

	// 	await validateFn({ headers: { authorization: `Bearer ${validTokenWithoutScopes}` } }, {}, mockNext);
	// 	expect(mockNext.mock.calls[0][0]).toEqual(errors.insufficientScope());
	// });

	// test('should not validate a request with a valid token but the token is not active', async () => {
	// 	nock(introspection_endpoint).post('/').reply(200, { active: false, no_scope: true });

	// 	await validateFn({ headers: { authorization: `Bearer ${validTokenWithoutScopes}` } }, {}, mockNext);
	// 	expect(mockNext.mock.calls[0][0]).toEqual(errors.unauthorized('Invalid token'));
	// });

	// test('should not validate a request with a valid token but introspection endpoint does not return scope', async () => {
	// 	nock(introspection_endpoint).post('/').reply(200, { active: true, no_scope: true });

	// 	await validateFn({ headers: { authorization: `Bearer ${validTokenWithoutScopes}` } }, {}, mockNext);
	// 	expect(mockNext.mock.calls[0][0]).toEqual(errors.insufficientScope());
	// });

	// test('should not validate a request with a valid token but introspection endpoint returns insufficient scope', async () => {
	// 	nock(introspection_endpoint).post('/').reply(200, { active: true, scope: 'badscope' });

	// 	await validateFn({ headers: { authorization: `Bearer ${validTokenWithoutScopes}` } }, {}, mockNext);
	// 	expect(mockNext.mock.calls[0][0]).toEqual(errors.insufficientScope());
	// });

	// test('should validate a request with a valid token and introspection endpoint returns a valid scope', async () => {
	// 	nock(introspection_endpoint).post('/').reply(200, { active: true, scope: requiredScopes.join(' ') });

	// 	await validateFn({ headers: { authorization: `Bearer ${validTokenWithoutScopes}` } }, {}, mockNext);
	// 	expect(mockNext.mock.calls[0][0]).toBeUndefined();
	// });
});
