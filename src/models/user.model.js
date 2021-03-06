const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true},
    hash: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);