
const mongoose = require("mongoose");



const ItemSchema = new mongoose.Schema({
    item_id:{type: String, required: true},
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: String },
    price: { type: Number },
    status: { type: String },
    godown_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Godown', required: true },
    godown_id: {type: String},
    brand: { type: String },
    attributes: { 
        
        type:{type: String} ,
        material:{type: String} ,
        warranty_years:{type: Number} ,
},
    image_url: { type: String },
});

module.exports = mongoose.model('items', ItemSchema);

