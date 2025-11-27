const Support = require('../model/Support');

// @desc    Create support query
// @route   POST /api/support
// @access  Private
exports.createSupportQuery = async (req, res, next) => {
  try {
    const support = await Support.create({
      user: req.user._id,
      subject: req.body.subject,
      message: req.body.message,
      priority: req.body.priority || 'medium'
    });

    res.status(201).json({
      success: true,
      message: 'Support query created successfully',
      data: support
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user support queries
// @route   GET /api/support
// @access  Private
exports.getUserSupportQueries = async (req, res, next) => {
  try {
    const queries = await Support.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: queries.length,
      data: queries
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all support queries (Admin)
// @route   GET /api/support/admin/all
// @access  Private/Admin
exports.getAllSupportQueries = async (req, res, next) => {
  try {
    const queries = await Support.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: queries.length,
      data: queries
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single support query
// @route   GET /api/support/:id
// @access  Private
exports.getSupportQuery = async (req, res, next) => {
  try {
    const query = await Support.findById(req.params.id).populate('user', 'name email');

    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'Support query not found'
      });
    }

    // Check if user owns the query or is admin
    if (query.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this query'
      });
    }

    res.status(200).json({
      success: true,
      data: query
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update support query
// @route   PUT /api/support/:id
// @access  Private/Admin
exports.updateSupportQuery = async (req, res, next) => {
  try {
    const { status, response } = req.body;

    const query = await Support.findById(req.params.id);

    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'Support query not found'
      });
    }

    if (status) {
      query.status = status;
    }

    if (response) {
      query.response = response;
      query.respondedBy = req.user.name;
      query.respondedAt = new Date();
    }

    await query.save();

    res.status(200).json({
      success: true,
      message: 'Support query updated successfully',
      data: query
    });
  } catch (error) {
    next(error);
  }
};

