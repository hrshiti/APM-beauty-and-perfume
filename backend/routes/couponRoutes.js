const express = require('express');
const router = express.Router();
const {
  getCoupons,
  getCoupon,
  validateCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon
} = require('../controller/couponController');
const { protect, authorize } = require('../middleware/auth');

// Public route
router.get('/validate/:code', validateCoupon);

// Admin routes
router.get('/', protect, authorize('admin'), getCoupons);
router.get('/:id', protect, authorize('admin'), getCoupon);
router.post('/', protect, authorize('admin'), createCoupon);
router.put('/:id', protect, authorize('admin'), updateCoupon);
router.delete('/:id', protect, authorize('admin'), deleteCoupon);

module.exports = router;

