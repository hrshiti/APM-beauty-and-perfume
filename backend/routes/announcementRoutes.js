const express = require('express');
const router = express.Router();
const {
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
} = require('../controller/announcementController');
const { protect, authorize } = require('../middleware/auth');

// Public route
router.get('/', getAnnouncements);

// Admin routes
router.get('/:id', protect, authorize('admin'), getAnnouncement);
router.post('/', protect, authorize('admin'), createAnnouncement);
router.put('/:id', protect, authorize('admin'), updateAnnouncement);
router.delete('/:id', protect, authorize('admin'), deleteAnnouncement);

module.exports = router;

