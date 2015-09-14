////////////////////////////////////////////////////////////////////////////////////////////////////
// PROCESS
process.q = require('q');
process.request = require('request');
process.backand = require("./node_custom/backand.js");

////////////////////////////////////////////////////////////////////////////////////////////////////
// BACKAND
// auth
try {
	process.secret = require(process.env.APP_CREDENTIALS_FILE); // exports = { backand: { username: '', password: '', appname: '' } };
} catch(e) {
	process.secret = {};
	process.secret.backand = {
		username: '',
		password: '',
		appname: ''
	};
}
process.backand.auth(process.secret.backand).then(function(){
	// get
	var get = {
		pageSize: 1,
		pageNumber: 1,
		returnObject: true
	};
	process.backand.get('/1/objects/advertisement', get).then(function(data){
		console.log('GOT: ',data);
	});
	// post
	var post = {
		"agency": 5,
		"channel": 2,
		"marketing_campaign": 2
	};
	process.backand.post('/1/objects/advertisement?returnObject=true', post).then(function(data){
		console.log('POSTED: ',data);
	});
});