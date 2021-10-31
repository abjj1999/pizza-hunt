const { Schema, model } = require('mongoose');


const PizzaSchema = new Schema({
    pizzaName: {
        type: 'string',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
    },
    size: {
        type: String,
        default: 'Large',
    },
    toppings: []

});

const Pizza = model('Pizza',PizzaSchema);
module.exports = Pizza;