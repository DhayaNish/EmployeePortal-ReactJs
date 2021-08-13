const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    username: String,
    password: String,
    name:String,
    position:String,
    department: String,
    email:String,
    experience:String,
    status:String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', TestSchema);
