const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  refundAmount: {
    type: Number,
    required: true,
    min: 0
  },
  refundStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'processed'],
    default: 'pending'
  },
  reason: {
    type: String,
    required: true
  },
  processedAt: {
    type: Date
  },
  processedBy: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Refund', refundSchema);

