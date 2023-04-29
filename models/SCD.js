const mongoose = require('mongoose');

module.exports = mongoose.model('SCD', new mongoose.Schema({
    device: String,
    sensorData: Array
}, { collection: 'SCD' }));
