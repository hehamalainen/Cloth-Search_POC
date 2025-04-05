// filepath: /workspaces/Cloth-Search_POC/backend/models/storeModel.js
const db = require('./db');

const createStoreTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Stores (
            id SERIAL PRIMARY KEY,
            name TEXT,
            address TEXT,
            latitude REAL,
            longitude REAL
        );
    `;
    await db.query(query);
};

module.exports = { createStoreTable };