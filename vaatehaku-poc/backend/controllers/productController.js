const db = require('../models/db');

const searchProducts = async (req, res) => {
    try {
        const { query } = req.query;
        const result = await db.query(
            `SELECT * FROM Products 
             WHERE name ILIKE $1 OR description ILIKE $1`,
            [`%${query}%`]
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { searchProducts };