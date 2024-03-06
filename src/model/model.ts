import { DataTypes } from 'sequelize';
import conn from '../config/db'; 

export const Post = conn.define('Post', {
	post: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

async function syncDB() {
	try {
		await conn.sync();
	} catch (error) {
		console.error(error);
	}
}

syncDB();