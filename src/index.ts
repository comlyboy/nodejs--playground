import knex from "knex";

// export class PostgresSqlBulder {
// 	private readonly sqlBuilder = knex({ client: 'pg' });

// 	query() {
// 		const createQueryKnex = this.sqlBuilder('user').insert({ name: 'Jane Doe' }).toString();
// 		// const sqlUpdateQuery = this.sqlBuilder('user').where('id', 1).update({ name: 'Jane Doe' }).toString();
// 		// const sqlQuery2 = this.sqlBuilder('users').select().where('id', 1).toString();


// 		console.log('createQueryKnex =', createQueryKnex);

// 	}

// }


// try {



// } catch (error) {
// 	console.log('error =>', error.message);
// }

// export function sqlBuilder() {
// 	const sqlBuilder = knex({ client: 'pg' });

// 	const createQueryKnex = sqlBuilder('user').insert({ name: 'Jane Doe' }).toString();
// 	// const sqlUpdateQuery = this.sqlBuilder('user').where('id', 1).update({ name: 'Jane Doe' }).toString();
// 	// const sqlQuery2 = this.sqlBuilder('users').select().where('id', 1).toString();


// 	console.log('createQueryKnex =', createQueryKnex);

// }


const sqlBuilder = knex({ client: 'pg' });

const createQueryKnex = sqlBuilder('user').insert({ name: 'Jane Doe' }).toString();
// const sqlUpdateQuery = this.sqlBuilder('user').where('id', 1).update({ name: 'Jane Doe' }).toString();
// const sqlQuery2 = this.sqlBuilder('users').select().where('id', 1).toString();


console.log('createQueryKnex =', createQueryKnex);