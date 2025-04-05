const db = require('../models/db');

const checkInventory = async (req, res) => {
    try {
        const { storeId, productId } = req.query;
        const result = await db.query(
            `SELECT quantity FROM Inventory 
             WHERE store_id = $1 AND product_id = $2`,
            [storeId, productId]
        );
        res.json(result.rows[0] || { quantity: 0 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { checkInventory };