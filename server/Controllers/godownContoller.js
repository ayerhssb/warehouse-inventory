// backend/controllers/locationController.js
const godown = require('../Models/Godown');

// Get all godowns
const getGodown = async (req, res) => {
    try {
        const godowns = await godown.find({});
        res.status(200).json(godowns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = getGodown;
