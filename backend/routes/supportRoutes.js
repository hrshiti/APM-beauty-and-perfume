const express = require('express');
const router = express.Router();
const {
  createSupportQuery,
  getUserSupportQueries,
  getAllSupportQueries,
  getSupportQuery,
  updateSupportQuery
} = require('../controller/supportController');
const { protect, authorize } = require('../middleware/auth');

// Protected routes
router.post('/', protect, createSupportQuery);
router.get('/', protect, getUserSupportQueries);
router.get('/:id', protect, getSupportQuery);

// Admin routes
router.get('/admin/all', protect, authorize('admin'), getAllSupportQueries);
router.put('/:id', protect, authorize('admin'), updateSupportQuery);

module.exports = router;

