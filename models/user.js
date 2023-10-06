const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },

    
    gender: {
        type: String,
        default: 'male',
    },
    DOB: {
        type: String,
        default: new Date().toISOString(),
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('User', UserSchema)