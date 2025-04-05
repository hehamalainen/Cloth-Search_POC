// filepath: /workspaces/Cloth-Search_POC/backend/models/inventoryModel.js
const db = require('./db');

const createInventoryTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Inventory (
            id SERIAL PRIMARY KEY,
            store_id INTEGER REFERENCES Stores(id),
            product_id INTEGER REFERENCES Products(id),
            quantity INTEGER,
            last_updated TIMESTAMPTZ DEFAULT NOW(),
            UNIQUE(store_id, product_id)
        );
    `;
    await db.query(query);
};

module.exports = { createInventoryTable };