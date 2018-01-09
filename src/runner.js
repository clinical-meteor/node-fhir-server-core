const fhirServer = require('./index.js');

const CONFIG = {
	auth: {
		clientId: 'client_id',
		secret: 'secret',
		issuer: {
			uri: 'https://lit-lake-71789.herokuapp.com',
			discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',
		}
	},
	server: {
		port: 3000,
		corsOptions: {
			maxAge: 86400
		},
		// ssl: {
		// 	key: './src/key.pem',
		// 	cert: './src/cert.pem'
		// }
	},
	logging: {
		level: 'debug'
	},
	// TODO: will make this into a flag
	// security: [
	// 	{
	// 		url: 'authorize',
	// 		valueUri: 'https://lit-lake-71789.herokuapp.com/authorize'
	// 	},
	// 	{
	// 		url: 'token',
	// 		valueUri: 'https://lit-lake-71789.herokuapp.com/token'
	// 	}
	// 	// optional - registration
	// ],
	profiles: {
		patient: {
			service: './src/server/patient/service.mock.js',
			corsOptions: {
				maxAge: 3600
			}
		},
		observation: {
			service: './src/server/observation/service.mock.js',
			corsOptions: {
				maxAge: 3600
			}
		},
		allergyIntolerance: {
			service: './src/server/allergyIntolerance/service.mock.js',
			corsOptions: {
				maxAge: 3600
			}
		},
		oauth: {
			service: './src/server/oauth/service.mock.js' // optional if you plan to implement oauth in the same project
		}
	}
};

let handler = promise => promise
	.then(data => [null, data])
	.catch(err => [err]);

let main = async function () {

	const [ err, server ] = await handler(fhirServer(CONFIG));

	// If something happened on initialization, handle it here
	if (err) {
		console.error(err.message);
		process.exit(1);
	} else {
		server.logger.info('FHIR Server started successfully');
	}

};

main();
