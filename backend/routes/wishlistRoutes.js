const express = require('express');
const router = express.Router();
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  getAllWishlists
} = require('../controller/wishlistController');
const { protect, authorize } = require('../middleware/auth');

// Protected routes
router.get('/', protect, getWishlist);
router.post('/', protect, addToWishlist);
router.delete('/:productId', protect, removeFromWishlist);

// Admin routes
router.get('/admin/all', protect, authorize('admin'), getAllWishlists);

module.exports = router;

