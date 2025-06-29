const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], required: true },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    address: { type: String },
    photoUrl: { type: String },
}, { timestamps: true });

// Cria um índice geoespacial para buscas por localização
ReportSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Report', ReportSchema);