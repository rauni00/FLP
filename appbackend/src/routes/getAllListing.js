import * as db from '../database.js';
export default {
	method: 'GET',
	path: '/api/listings',
	handler: async (req, h) => {
		const { result } = await db.default.query('SELECT * FROM listing');
		return result;
	},
};
 