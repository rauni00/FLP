import * as db from '../database.js';

export default {
	method: 'POST',
	path: '/api/listings/{id}/add-view',
	handler: async (req, h) => {
		const id = req.params.id;
		await db.default.query('UPDATE listing SET views=views+1 WHERE id=?', [id]);
		const { result } = await db.default.query('SELECT * FROM listing WHERE id=?', [id]);
		return result[0];
	},
};
