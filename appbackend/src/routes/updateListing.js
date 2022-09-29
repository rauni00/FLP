import * as db from '../database.js';
export default {
	method: 'POST',
	path: '/api/listings/{id}',
	handler: async (req, h) => {
		const { id } = req.params;
		const { name = '', description = '', price = 0 } = req.payload;
		const userId = '12345';
		await db.default.query(
			`UPDATE listing SET name=?,description=?,price=?  WHERE id=? AND user_id=?`,
			[name, description, price, id, userId]
		);
		const { result } = await db.default.query('SELECT * FROM listing WHERE id=? AND user_id=?', [
			id,
			userId,
		]);
		return result[0];
	},
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
