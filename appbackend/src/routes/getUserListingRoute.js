import * as db from '../database.js';

export default {
	method: 'GET',
	path: '/api/user/{userId}/listings',
	handler: async (req, h) => {
		const userId = req.params.userId;
		const { result } = await db.default.query('SELECT * FROM listing WHERE user_id=?', [userId]);
		return result;
	},
};
