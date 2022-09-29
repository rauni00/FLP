import Hapi from '@hapi/hapi';
import * as getAllListing from './routes/getAllListing.js';
import * as getListing from './routes/getListing.js';
import * as db from './database.js';
import * as addViewToListing from './routes/addViewToListing.js';
import * as getUserListingRoute from './routes/getUserListingRoute.js';
import * as createNewListing from './routes/createNewListing.js';
import * as updateListing from './routes/updateListing.js';
import * as deleteListing from './routes/deleteListing.js';

//! async() delay in certain in server
const start = async () => {
	let server = Hapi.server({
		port: 8000,
		host: 'localhost',
	});
	server.route(getAllListing.default);
	server.route(getListing.default);
	server.route(addViewToListing.default);
	server.route(getUserListingRoute.default);
	server.route(createNewListing.default);
	server.route(updateListing.default);
	server.route(deleteListing.default);

	db.default.connect();
	await server.start();
	console.log(`server is listing on port 8000`);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});
process.on('SIGINT', async () => {
	console.log('Stopping server......');
	await server.stop({ timeout: 10000 });
	db.default.end();
	console.log('Server Stopped....');
	process.exit(1);
});
start();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// GET METHOD
// // ! Define end Point "/hello"
// server.route({
//     method: 'GET', //! POST ,UPDATE ,DELETE ,PATCH
//     path: '/hello',
//     handler: (request, err) => {
//         return err.response('HELLO! this is SERVER');
//     },
// });
// // POST METHOD
// server.route({
//     method: 'POST', //! POST ,UPDATE ,DELETE ,PATCH
//     path: '/hello',
//     handler: (request, err) => {
//         const payload = request.payload;
//         const designation = payload.designation;
//         const name = payload.name;
//         return `Hello ${name}!\nYou are ${designation}`;
//     },
// });
