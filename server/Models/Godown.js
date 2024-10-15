// backend/models/Location.js
const mongoose = require('mongoose');

const GodownSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    parent_godown: { type: mongoose.Schema.Types.ObjectId, ref: 'Godown', default: null },
    // parent_godown : {type: String}
});

module.exports = mongoose.model('Godown', GodownSchema);
