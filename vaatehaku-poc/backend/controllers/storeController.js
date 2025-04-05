const db = require('../models/db');

const findStores = async (req, res) => {
    try {
        const { latitude, longitude, radius } = req.query;

        console.log('findStores function executed with:', { latitude: '60.1697', longitude: '24.9314', radius: '5' });

        // Convert string parameters to numbers
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);
        const rad = parseFloat(radius) || 5;

        console.log('Executing query with:', { lat: 60.1697, lng: 24.9314, rad: 5 });

        const result = await db.query(
            `SELECT id, name, address, latitude, longitude,
             (6371 * acos(
                cos(radians($1)) * 
                cos(radians(latitude)) * 
                cos(radians(longitude) - radians($2)) + 
                sin(radians($1)) * 
                sin(radians(latitude))
             )) AS distance
             FROM Stores
             WHERE (6371 * acos(
                cos(radians($1)) * 
                cos(radians(latitude)) * 
                cos(radians(longitude) - radians($2)) + 
                sin(radians($1)) * 
                sin(radians(latitude))
             )) <= $3
             ORDER BY distance`,
            [lat, lng, rad]
        );

        console.log('Query result:', result.rows);

        res.json(result.rows);
    } catch (error) {
        console.error(`Error in findStores: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { findStores };