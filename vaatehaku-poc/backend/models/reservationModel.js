// filepath: /workspaces/Cloth-Search_POC/backend/models/reservationModel.js
const db = require('./db');

const createReservationTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Reservations (
            id SERIAL PRIMARY KEY,
            mock_user_id TEXT,
            store_id INTEGER REFERENCES Stores(id),
            product_id INTEGER REFERENCES Products(id),
            quantity INTEGER,
            status TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW()
        );
    `;
    await db.query(query);
};

module.exports = { createReservationTable };