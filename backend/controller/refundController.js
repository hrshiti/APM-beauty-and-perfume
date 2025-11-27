const Refund = require('../model/Refund');
const Order = require('../model/Order');

// @desc    Get all refunds
// @route   GET /api/refunds
// @access  Private/Admin
exports.getRefunds = async (req, res, next) => {
  try {
    const refunds = await Refund.find()
      .populate('order', 'orderStatus totalPrice')
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    const stats = {
      totalRefunds: refunds.length,
      totalRefundAmount: refunds.reduce((sum, r) => sum + r.refundAmount, 0),
      pendingRefunds: refunds.filter(r => r.refundStatus === 'pending').length
    };

    res.status(200).json({
      success: true,
      count: refunds.length,
      data: {
        refunds,
        stats
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single refund
// @route   GET /api/refunds/:id
// @access  Private/Admin
exports.getRefund = async (req, res, next) => {
  try {
    const refund = await Refund.findById(req.params.id)
      .populate('order')
      .populate('user', 'name email');

    if (!refund) {
      return res.status(404).json({
        success: false,
        message: 'Refund not found'
      });
    }

    res.status(200).json({
      success: true,
      data: refund
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update refund status
// @route   PUT /api/refunds/:id
// @access  Private/Admin
exports.updateRefundStatus = async (req, res, next) => {
  try {
    const { refundStatus } = req.body;

    const refund = await Refund.findById(req.params.id);

    if (!refund) {
      return res.status(404).json({
        success: false,
        message: 'Refund not found'
      });
    }

    refund.refundStatus = refundStatus;

    if (refundStatus === 'processed') {
      refund.processedAt = new Date();
      refund.processedBy = req.user.name;

      // Update order refund status
      await Order.findByIdAndUpdate(refund.order, {
        refundStatus: 'processed'
      });
    }

    await refund.save();

    res.status(200).json({
      success: true,
      message: 'Refund status updated successfully',
      data: refund
    });
  } catch (error) {
    next(error);
  }
};

