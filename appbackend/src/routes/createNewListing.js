import { v4 as uuid } from 'uuid';
import * as db from '../database.js';
export default {
	method: 'POST',
	path: '/api/create/listings',
	handler: async (req, h) => {
		const id = uuid();
		const { name = '', description = '', price = 0 } = req.payload;
		const userId = '12345';
		const views = 0;
		await db.default.query(
			`INSERT INTO listing (id,name,description,price,user_id,views) VALUES(?,?,?,?,?,?);`,
			[id, name, description, price, userId, views]
		);
		return { id, name, description, price, userId, views };
	},
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
