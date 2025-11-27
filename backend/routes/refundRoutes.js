const express = require('express');
const router = express.Router();
const {
  getRefunds,
  getRefund,
  updateRefundStatus
} = require('../controller/refundController');
const { protect, authorize } = require('../middleware/auth');

// Admin routes
router.get('/', protect, authorize('admin'), getRefunds);
router.get('/:id', protect, authorize('admin'), getRefund);
router.put('/:id', protect, authorize('admin'), updateRefundStatus);

module.exports = router;

