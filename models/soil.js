const mongoose = require('mongoose');

module.exports = mongoose.model('soil', new mongoose.Schema({
    device: String,
    sensorData: Array
}, { collection: 'soil' }));