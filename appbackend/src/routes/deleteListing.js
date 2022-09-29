import * as db from '../database.js';

export default {
	method: 'DELETE',
	path: '/api/listings/{id}',
	handler: async (req, h) => {
		const { id } = req.params;
		await db.default.query('DELETE FROM listing WHERE id=?', [id]);
		return { message: 'SUCCESS!!' };
	},
};
