import knex from "knex";

try {
	const sqlBuilder = knex({ client: 'pg' });

	const sqlCreateQuery = sqlBuilder('user').where('id', 1).update({ name: 'Jane Doe' }).toSQL();
	const sqlUpdateQuery = sqlBuilder('user').where('id', 1).update({ name: 'Jane Doe' }).toSQL();
	const sqlQuery2 = sqlBuilder('users').where('id', 1).select().toSQL().sql;


	console.log('sqlCreateQuery =', sqlCreateQuery);
	console.log('sqlUpdateQuery =', sqlUpdateQuery);
	console.log('sqlQuery2 =', sqlQuery2);

} catch (error) {
	console.log('error =>', error.message);
}
