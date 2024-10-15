// backend/controllers/itemController.js
const Item = require('../Models/Item');

// Get item details by ID
exports.getItemDetails = async (req, res) => {
    try {
        const item = await Item.find({});
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
