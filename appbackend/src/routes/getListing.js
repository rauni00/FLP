import * as db from '../database.js';
export default {
	method: 'GET',
	path: '/api/listings/{id}',
	handler: async (req, h) => {
		const id = req.params.id;
		const { result } = await db.default.query('SELECT * FROM listing WHERE id=?', [id]);
		const listing = result[0];
		return listing;
	},
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const id = req.params.id;
// const listing = fakeListings.default.find((listing) => listing.id === id);
// if (!listing) {
// 	throw boom.notFound(`Listing does not exists with id ${id}`);
// } else return listing;
// handler: (req, h) => {
// 	const id = req.params.id;
// 	const {result} = await db.default.query('SELECT * FROM listing ')
// 	// const listing =result[0]
// 	if (!listing) {
// 		throw boom.notFound(`Listing does not exists with id ${id}`);
// 	} else return listing;
// },
