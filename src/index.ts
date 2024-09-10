import axios from "axios";
import jsPDF from "jspdf";
// import knex from "knex";

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

// type Lower<TSchema = any> = Lowercase<keyof TSchema & string>;


// export function sqlBuilder<TEntitySchema extends Record<string, any> = any>(tableName: string) {
// 	if (!tableName) throw new Error('Table name is needed');
// 	return knex<Lower<Partial<TEntitySchema>>>({ client: 'pg' })(tableName);
// }

// const createQueryKnex = sqlBuilder('user').insert({  }).toString();
// const sqlUpdateQuery = sqlBuilder('user').where('id', 1).update({ name: 'Jane Doe' }).toString();
// // const sqlQuery2 = this.sqlBuilder('users').select().where('id', 1).toString();


// console.log('sqlUpdateQuery =', sqlUpdateQuery);
// console.log('createQueryKnex =', createQueryKnex);

async function generatePDFfromURL(url: string, outputPath: string) {
	try {
		const response = await axios.get(url);
		const textContent = response.data;
		const doc = new jsPDF();
		doc.text(textContent, 10, 10);
		doc.save(outputPath);
		console.log('PDF generated successfully');
	} catch (error) {
		console.error('Error fetching URL:', error);
	}
}

// Usage
generatePDFfromURL('https://google.com', 'google.pdf');