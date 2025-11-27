const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addAddress,
  updateAddress,
  deleteAddress
} = require('../controller/userController');
const { protect, authorize } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/:id', protect, updateUser);

// Address routes
router.post('/:id/addresses', protect, addAddress);
router.put('/:id/addresses/:addressId', protect, updateAddress);
router.delete('/:id/addresses/:addressId', protect, deleteAddress);

// Admin routes
router.get('/', protect, authorize('admin'), getUsers);
router.get('/:id', protect, authorize('admin'), getUser);
router.delete('/:id', protect, authorize('admin'), deleteUser);

module.exports = router;

