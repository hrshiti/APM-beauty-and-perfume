const express = require('express');
const router = express.Router();
const {
  getCarouselItems,
  getCarouselItem,
  createCarouselItem,
  updateCarouselItem,
  deleteCarouselItem,
  toggleCarouselActive,
  updateCarouselOrder
} = require('../controller/heroCarouselController');
const { protect, authorize } = require('../middleware/auth');
const { uploadSingleImage } = require('../middleware/upload');

// Public route
router.get('/', getCarouselItems);

// Admin routes
router.get('/:id', protect, authorize('admin'), getCarouselItem);
router.post('/', protect, authorize('admin'), uploadSingleImage, createCarouselItem);
router.put('/:id', protect, authorize('admin'), uploadSingleImage, updateCarouselItem);
router.delete('/:id', protect, authorize('admin'), deleteCarouselItem);
router.patch('/:id/toggle', protect, authorize('admin'), toggleCarouselActive);
router.put('/order', protect, authorize('admin'), updateCarouselOrder);

module.exports = router;

