const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Please provide a coupon code'],
    unique: true,
    uppercase: true,
    trim: true
  },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'],
    default: 'percentage'
  },
  discountValue: {
    type: Number,
    required: [true, 'Please provide discount value'],
    min: 0
  },
  discountPercentage: {
    type: Number,
    min: 0,
    max: 100
  },
  minPurchase: {
    type: Number,
    default: 0,
    min: 0
  },
  minOrderAmount: {
    type: Number,
    default: 0,
    min: 0
  },
  maxDiscount: {
    type: Number,
    default: null
  },
  validFrom: {
    type: Date,
    default: Date.now
  },
  validUntil: {
    type: Date,
    required: [true, 'Please provide expiry date']
  },
  endDate: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  },
  usageLimit: {
    type: Number,
    default: 0,
    min: 0
  },
  maxUses: {
    type: Number,
    default: 0,
    min: 0
  },
  usedCount: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
});

// Set endDate same as validUntil
couponSchema.pre('save', function(next) {
  if (this.validUntil && !this.endDate) {
    this.endDate = this.validUntil;
  }
  if (this.discountType === 'percentage' && !this.discountPercentage) {
    this.discountPercentage = this.discountValue;
  }
  next();
});

module.exports = mongoose.model('Coupon', couponSchema);

