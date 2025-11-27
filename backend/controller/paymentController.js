const Payment = require('../model/Payment');
const Order = require('../model/Order');

// @desc    Get payment history
// @route   GET /api/payments
// @access  Private/Admin
exports.getPaymentHistory = async (req, res, next) => {
  try {
    const payments = await Payment.find()
      .populate('order', 'orderStatus totalPrice')
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    const stats = {
      totalTransactions: payments.length,
      totalAmount: payments.reduce((sum, p) => sum + p.amount, 0),
      onlinePayments: payments.filter(p => p.method === 'online').length,
      codPayments: payments.filter(p => p.method === 'cod').length
    };

    res.status(200).json({
      success: true,
      count: payments.length,
      data: {
        payments,
        stats
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user payments
// @route   GET /api/payments/user
// @access  Private
exports.getUserPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find({ user: req.user._id })
      .populate('order', 'orderStatus totalPrice')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    next(error);
  }
};

