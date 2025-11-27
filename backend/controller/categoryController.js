const Category = require('../model/Category');
const { uploadSingleImage, deleteImage } = require('../utils/uploadImage');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      data: category
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create category
// @route   POST /api/categories
// @access  Private/Admin
exports.createCategory = async (req, res, next) => {
  try {
    // Upload image to Cloudinary if provided
    let imageUrl = null;
    if (req.file) {
      imageUrl = await uploadSingleImage(req.file, 'categories');
    } else if (req.body.image) {
      // Allow image URL to be passed directly (for backward compatibility)
      imageUrl = req.body.image;
    }

    const categoryData = {
      ...req.body,
      image: imageUrl
    };

    const category = await Category.create(categoryData);

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: category
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private/Admin
exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    // Handle image upload
    let imageUrl = category.image; // Keep existing image
    if (req.file) {
      // Delete old image if exists
      if (category.image) {
        await deleteImage(category.image);
      }
      // Upload new image
      imageUrl = await uploadSingleImage(req.file, 'categories');
    } else if (req.body.image !== undefined) {
      // If image URL is provided in body, use it (or set to null if explicitly set)
      if (req.body.image && req.body.image !== category.image) {
        // Delete old image if it's being replaced
        if (category.image) {
          await deleteImage(category.image);
        }
      }
      imageUrl = req.body.image || null;
    }

    const categoryData = {
      ...req.body,
      image: imageUrl
    };

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      categoryData,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: 'Category updated successfully',
      data: updatedCategory
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    // Delete image from Cloudinary
    if (category.image) {
      await deleteImage(category.image);
    }

    await category.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

