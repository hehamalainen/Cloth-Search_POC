// filepath: /workspaces/Cloth-Search_POC/backend/models/productModel.js
const db = require('./db');

const createProductTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Products (
            id SERIAL PRIMARY KEY,
            name TEXT,
            description TEXT,
            sku TEXT UNIQUE,
            category TEXT
        );
    `;
    await db.query(query);
};

module.exports = { createProductTable };