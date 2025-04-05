const db = require('../models/db');

const createReservation = async (req, res) => {
    try {
        const { storeId, productId, quantity, userId } = req.body;
        const result = await db.query(
            `INSERT INTO Reservations (store_id, product_id, quantity, mock_user_id, status)
             VALUES ($1, $2, $3, $4, 'pending')
             RETURNING *`,
            [storeId, productId, quantity, userId]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createReservation };