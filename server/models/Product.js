    const mongoose = require('mongoose');
    const { Schema } = mongoose;

    const productSchema = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        instruction: {
            type: String
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        brand: {
            type: Schema.Types.ObjectId,
            ref: 'Brand',
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        }
    });

    const Product = mongoose.model('Product',productSchema);
    module.exports = Product;