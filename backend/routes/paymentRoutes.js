const express = require('express');
const router = express.Router();
const {
  getPaymentHistory,
  getUserPayments
} = require('../controller/paymentController');
const { protect, authorize } = require('../middleware/auth');

// Protected routes
router.get('/user', protect, getUserPayments);

// Admin routes
router.get('/', protect, authorize('admin'), getPaymentHistory);

module.exports = router;

