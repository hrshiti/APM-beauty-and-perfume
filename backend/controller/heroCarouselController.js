const HeroCarousel = require('../model/HeroCarousel');
const { uploadSingleImage, deleteImage } = require('../utils/uploadImage');

// @desc    Get all carousel items
// @route   GET /api/hero-carousel
// @access  Public
exports.getCarouselItems = async (req, res, next) => {
  try {
    const { isActive } = req.query;
    const query = {};

    if (isActive === 'true') {
      query.isActive = true;
    }

    const items = await HeroCarousel.find(query).sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single carousel item
// @route   GET /api/hero-carousel/:id
// @access  Private/Admin
exports.getCarouselItem = async (req, res, next) => {
  try {
    const item = await HeroCarousel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Carousel item not found'
      });
    }

    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create carousel item
// @route   POST /api/hero-carousel
// @access  Private/Admin
exports.createCarouselItem = async (req, res, next) => {
  try {
    // Upload image to Cloudinary if provided
    let imageUrl = null;
    if (req.file) {
      imageUrl = await uploadSingleImage(req.file, 'hero-carousel');
    } else if (req.body.image) {
      // Allow image URL to be passed directly (for backward compatibility)
      imageUrl = req.body.image;
    }

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Image is required'
      });
    }

    const itemData = {
      ...req.body,
      image: imageUrl
    };

    const item = await HeroCarousel.create(itemData);

    res.status(201).json({
      success: true,
      message: 'Carousel item created successfully',
      data: item
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update carousel item
// @route   PUT /api/hero-carousel/:id
// @access  Private/Admin
exports.updateCarouselItem = async (req, res, next) => {
  try {
    const item = await HeroCarousel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Carousel item not found'
      });
    }

    // Handle image upload
    let imageUrl = item.image; // Keep existing image
    if (req.file) {
      // Delete old image if exists
      if (item.image) {
        await deleteImage(item.image);
      }
      // Upload new image
      imageUrl = await uploadSingleImage(req.file, 'hero-carousel');
    } else if (req.body.image !== undefined) {
      // If image URL is provided in body, use it (or set to null if explicitly set)
      if (req.body.image && req.body.image !== item.image) {
        // Delete old image if it's being replaced
        if (item.image) {
          await deleteImage(item.image);
        }
      }
      imageUrl = req.body.image || null;
    }

    const itemData = {
      ...req.body,
      image: imageUrl
    };

    const updatedItem = await HeroCarousel.findByIdAndUpdate(
      req.params.id,
      itemData,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: 'Carousel item updated successfully',
      data: updatedItem
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete carousel item
// @route   DELETE /api/hero-carousel/:id
// @access  Private/Admin
exports.deleteCarouselItem = async (req, res, next) => {
  try {
    const item = await HeroCarousel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Carousel item not found'
      });
    }

    // Delete image from Cloudinary
    if (item.image) {
      await deleteImage(item.image);
    }

    await item.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Carousel item deleted successfully',
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Toggle carousel active status
// @route   PATCH /api/hero-carousel/:id/toggle
// @access  Private/Admin
exports.toggleCarouselActive = async (req, res, next) => {
  try {
    const item = await HeroCarousel.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Carousel item not found'
      });
    }

    item.isActive = !item.isActive;
    await item.save();

    res.status(200).json({
      success: true,
      message: 'Carousel item status updated',
      data: item
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update carousel order
// @route   PUT /api/hero-carousel/order
// @access  Private/Admin
exports.updateCarouselOrder = async (req, res, next) => {
  try {
    const { items } = req.body;

    for (const item of items) {
      await HeroCarousel.findByIdAndUpdate(item._id, { order: item.order });
    }

    const updatedItems = await HeroCarousel.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      message: 'Carousel order updated successfully',
      data: updatedItems
    });
  } catch (error) {
    next(error);
  }
};

