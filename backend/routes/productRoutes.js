const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  searchProducts,
  getProductsByCategory,
  getBestsellers,
  getFeaturedProducts,
  getNewArrivals,
  getRelatedProducts,
  getProductReviews,
  addProductReview,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductSections
} = require('../controller/productController');
const { protect, authorize } = require('../middleware/auth');
const { uploadProductImages } = require('../middleware/upload');

// Public routes
router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/bestsellers', getBestsellers);
router.get('/featured', getFeaturedProducts);
router.get('/new-arrivals', getNewArrivals);
router.get('/category/:slug', getProductsByCategory);
router.get('/:id', getProduct);
router.get('/:id/related', getRelatedProducts);
router.get('/:id/reviews', getProductReviews);

// Protected routes
router.post('/:id/reviews', protect, addProductReview);

// Admin routes
router.post('/', protect, authorize('admin'), uploadProductImages, createProduct);
router.put('/:id', protect, authorize('admin'), uploadProductImages, updateProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);
router.patch('/:id/sections', protect, authorize('admin'), updateProductSections);

module.exports = router;

