// RAHUL
import mysql from 'mysql';
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Merchandise',
});
export default {
	connect: () => connection.connect(),
	query: (queryString, escapedValues) =>
		new Promise((resolve, reject) => {
			connection.query(queryString, escapedValues, (error, result, fields) => {
				if (error) {
					reject(error);
				}
				resolve({ result, fields });
			});
		}),

	end: () => connection.end(),
};
// problem solving technique
