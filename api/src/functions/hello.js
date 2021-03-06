"use strict";

exports.hello = async event => {
	return {
		"statusCode": 200,
		"headers": {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true
		},
		"body": JSON.stringify( "Hello World!" )
	};
};
