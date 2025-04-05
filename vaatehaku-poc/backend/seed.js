// filepath: /workspaces/Cloth-Search_POC/vaatehaku-poc/backend/seed.js
const { Pool } = require('pg');
const dotenv = require('dotenv');
const { createStoreTable } = require('./models/storeModel');
const { createProductTable } = require('./models/productModel');
const { createInventoryTable } = require('./models/inventoryModel');
const { createReservationTable } = require('./models/reservationModel');

dotenv.config();

const seedDatabase = async () => {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });

    try {
        // Drop existing tables
        await pool.query('DROP TABLE IF EXISTS Reservations');
        await pool.query('DROP TABLE IF EXISTS Inventory');
        await pool.query('DROP TABLE IF EXISTS Products');
        await pool.query('DROP TABLE IF EXISTS Stores');

        // Create tables
        await createStoreTable(pool);
        await createProductTable(pool);
        await createInventoryTable(pool);
        await createReservationTable(pool);

        // Mock Data
        const stores = [
            { name: 'K-Market Kamppi', address: 'Kampinkuja 2, 00100 Helsinki', latitude: 60.1697, longitude: 24.9314 },
            { name: 'S-Market Mannerheimintie', address: 'Mannerheimintie 45-47, 00250 Helsinki', latitude: 60.1720, longitude: 24.9320 },
        ];

        const products = [
            { name: 'Red Adidas Shirt M', description: 'Red Adidas T-shirt size M', sku: 'adidas-red-m', category: 'Shirt' },
            { name: 'Oltermanni Cheese', description: 'Oltermanni cheese block', sku: 'valio-oltermanni', category: 'Cheese' },
        ];

        // Insert Stores
        const storeValues = stores.map(store => `('${store.name}', '${store.address}', ${store.latitude}, ${store.longitude})`).join(',');
        await pool.query(`INSERT INTO Stores (name, address, latitude, longitude) VALUES ${storeValues}`);

        // Insert Products
        const productValues = products.map(product => `('${product.name}', '${product.description}', '${product.sku}', '${product.category}')`).join(',');
        await pool.query(`INSERT INTO Products (name, description, sku, category) VALUES ${productValues}`);

        // Fetch store and product IDs
        const storeResults = await pool.query('SELECT id FROM Stores');
        const productResults = await pool.query('SELECT id FROM Products');
        const storeIds = storeResults.rows.map(row => row.id);
        const productIds = productResults.rows.map(row => row.id);

        // Insert Inventory
        const inventory = [
            { store_id: storeIds[0], product_id: productIds[0], quantity: 5 },
            { store_id: storeIds[1], product_id: productIds[1], quantity: 10 },
        ];

        const inventoryValues = inventory.map(item => `(${item.store_id}, ${item.product_id}, ${item.quantity})`).join(',');
        await pool.query(`INSERT INTO Inventory (store_id, product_id, quantity) VALUES ${inventoryValues}`);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await pool.end();
    }
};

seedDatabase();