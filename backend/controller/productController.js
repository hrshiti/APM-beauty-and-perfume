const Product = require('../model/Product');
const Review = require('../model/Review');
const { uploadProductImages, deleteImages } = require('../utils/uploadImage');

// @desc    Get all products with filters
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      rating,
      isBestSeller,
      isFeatured,
      isMostLoved,
      sortBy,
      search,
      page = 1,
      limit = 20
    } = req.query;

    // Build query
    const query = {};

    if (category) {
      query.categoryName = new RegExp(category, 'i');
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    if (rating) {
      query.rating = { $gte: parseFloat(rating) };
    }

    if (isBestSeller === 'true') {
      query.isBestSeller = true;
    }

    if (isFeatured === 'true') {
      query.isFeatured = true;
    }

    if (isMostLoved === 'true') {
      query.isMostLoved = true;
    }

    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { categoryName: new RegExp(search, 'i') }
      ];
    }

    // Build sort
    let sort = {};
    if (sortBy === 'price-low') {
      sort = { price: 1 };
    } else if (sortBy === 'price-high') {
      sort = { price: -1 };
    } else if (sortBy === 'rating') {
      sort = { rating: -1 };
    } else if (sortBy === 'newest') {
      sort = { createdAt: -1 };
    } else {
      sort = { createdAt: -1 };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const products = await Product.find(query)
      .populate('category', 'name slug')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      count: products.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name slug');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Search products
// @route   GET /api/products/search
// @access  Public
exports.searchProducts = async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a search query'
      });
    }

    const products = await Product.find({
      $or: [
        { name: new RegExp(q, 'i') },
        { description: new RegExp(q, 'i') },
        { categoryName: new RegExp(q, 'i') },
        { tags: { $in: [new RegExp(q, 'i')] } }
      ]
    }).populate('category', 'name slug').limit(50);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get products by category
// @route   GET /api/products/category/:slug
// @access  Public
exports.getProductsByCategory = async (req, res, next) => {
  try {
    const products = await Product.find({
      categoryName: new RegExp(req.params.slug, 'i')
    }).populate('category', 'name slug');

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get bestsellers
// @route   GET /api/products/bestsellers
// @access  Public
exports.getBestsellers = async (req, res, next) => {
  try {
    const products = await Product.find({ isBestSeller: true })
      .populate('category', 'name slug')
      .limit(8)
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
exports.getFeaturedProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ isFeatured: true })
      .populate('category', 'name slug')
      .limit(8)
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get new arrivals
// @route   GET /api/products/new-arrivals
// @access  Public
exports.getNewArrivals = async (req, res, next) => {
  try {
    const products = await Product.find()
      .populate('category', 'name slug')
      .sort({ createdAt: -1 })
      .limit(8);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get related products
// @route   GET /api/products/:id/related
// @access  Public
exports.getRelatedProducts = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    const relatedProducts = await Product.find({
      $or: [
        { category: product.category },
        { isBestSeller: true }
      ],
      _id: { $ne: product._id }
    })
      .populate('category', 'name slug')
      .limit(4);

    res.status(200).json({
      success: true,
      count: relatedProducts.length,
      data: relatedProducts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get product reviews
// @route   GET /api/products/:id/reviews
// @access  Public
exports.getProductReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ product: req.params.id })
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add product review
// @route   POST /api/products/:id/reviews
// @access  Private
exports.addProductReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Check if user already reviewed
    const existingReview = await Review.findOne({
      product: req.params.id,
      user: req.user._id
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: 'You have already reviewed this product'
      });
    }

    const review = await Review.create({
      product: req.params.id,
      user: req.user._id,
      userName: req.user.name,
      rating: req.body.rating,
      comment: req.body.comment
    });

    // Update product rating
    const reviews = await Review.find({ product: req.params.id });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    await Product.findByIdAndUpdate(req.params.id, {
      rating: avgRating,
      reviews: reviews.length
    });

    res.status(201).json({
      success: true,
      message: 'Review added successfully',
      data: review
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Private/Admin
exports.createProduct = async (req, res, next) => {
  try {
    // Upload images to Cloudinary
    let imageUrls = [];
    if (req.files) {
      imageUrls = await uploadProductImages(req.files);
    }

    // If no images uploaded, check if images are provided as URLs (for backward compatibility)
    if (imageUrls.length === 0 && req.body.images) {
      imageUrls = Array.isArray(req.body.images) ? req.body.images : [req.body.images];
    }

    // Create product with image URLs
    const productData = {
      ...req.body,
      images: imageUrls
    };

    // Convert string numbers to actual numbers
    if (productData.price) productData.price = parseFloat(productData.price);
    if (productData.regularPrice) productData.regularPrice = parseFloat(productData.regularPrice);
    if (productData.stock) productData.stock = parseInt(productData.stock);

    const product = await Product.create(productData);

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Handle image uploads
    let imageUrls = [...(product.images || [])]; // Keep existing images (create copy)

    if (req.files) {
      // Upload new images
      const newImageUrls = await uploadProductImages(req.files);
      
      // Map uploaded images to their positions
      // newImageUrls[0] = mainImage, newImageUrls[1] = image1, etc.
      let newImageIndex = 0;
      
      // If mainImage is uploaded, replace first image
      if (req.files.mainImage && req.files.mainImage[0] && newImageUrls[newImageIndex]) {
        // Delete old main image if exists
        if (imageUrls[0]) {
          await deleteImages([imageUrls[0]]);
        }
        imageUrls[0] = newImageUrls[newImageIndex];
        newImageIndex++;
      }

      // Handle additional images (image1, image2, image3)
      for (let i = 1; i <= 3; i++) {
        const fieldName = `image${i}`;
        if (req.files[fieldName] && req.files[fieldName][0] && newImageUrls[newImageIndex]) {
          // Delete old image if exists
          if (imageUrls[i]) {
            await deleteImages([imageUrls[i]]);
          }
          // Add or replace image
          if (imageUrls.length <= i) {
            imageUrls.push(newImageUrls[newImageIndex]);
          } else {
            imageUrls[i] = newImageUrls[newImageIndex];
          }
          newImageIndex++;
        }
      }
    }

    // Update product
    const productData = {
      ...req.body,
      images: imageUrls
    };

    // Convert string numbers to actual numbers
    if (productData.price) productData.price = parseFloat(productData.price);
    if (productData.regularPrice) productData.regularPrice = parseFloat(productData.regularPrice);
    if (productData.stock) productData.stock = parseInt(productData.stock);

    product = await Product.findByIdAndUpdate(
      req.params.id,
      productData,
      { new: true, runValidators: true }
    ).populate('category', 'name slug');

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Delete images from Cloudinary
    if (product.images && product.images.length > 0) {
      await deleteImages(product.images);
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product sections (featured, bestseller, etc.)
// @route   PATCH /api/products/:id/sections
// @access  Private/Admin
exports.updateProductSections = async (req, res, next) => {
  try {
    const { isFeatured, isBestSeller, isMostLoved } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        isFeatured,
        isBestSeller,
        isMostLoved
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product sections updated successfully',
      data: product
    });
  } catch (error) {
    next(error);
  }
};

