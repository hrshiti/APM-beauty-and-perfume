const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blogController');
const { protect, authorize } = require('../middleware/auth');
const { uploadSingleImage } = require('../middleware/upload');

// Public routes
router.get('/', getBlogs);
router.get('/:id', getBlog);

// Admin routes
router.post('/', protect, authorize('admin'), uploadSingleImage, createBlog);
router.put('/:id', protect, authorize('admin'), uploadSingleImage, updateBlog);
router.delete('/:id', protect, authorize('admin'), deleteBlog);

module.exports = router;

