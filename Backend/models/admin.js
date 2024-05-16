const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    location: String,
    Hospitals: String,
    doctorName: String,
    qualification: String,
    specialist: String,
    timing: String
});

const adminModule = mongoose.model('admindata', adminSchema);

module.exports = adminModule
