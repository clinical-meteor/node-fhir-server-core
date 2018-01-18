const controller = require('./controllers/allergyIntolerance.controller');

let routes = [
  {
    type: 'get',
		path: '/dstu2/allergyIntolerance',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
      name: 'patient',
			type: 'string',
			required: true
    }, {
      name: 'category',
      type: 'string'
    }, {
      name: 'code',
      type: 'string'
    }, {
      name: 'date',
      type: 'string'
    }, {
			name: '_format',
			type: 'string'
		}],
    scopes: [],
    controller: controller.getAllergyIntolerance
  },
  {
    type: 'get',
		path: '/dstu2/allergyIntolerance/:id',
		corsOptions: {
			methods: ['GET']
		},
    args: [{
      name: 'id',
      type: 'number',
      required: true
    }],
    scopes: [],
    controller: controller.getAllergyIntoleranceByID
  }
];



/**
 * @name exports
 * @summary AllergyIntolerance config
 */
module.exports = {
	routes
};
