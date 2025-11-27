const Blog = require('../model/Blog');
const { uploadSingleImage, deleteImage } = require('../utils/uploadImage');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
exports.getBlogs = async (req, res, next) => {
  try {
    const { isPublished } = req.query;
    const query = {};

    if (isPublished === 'true') {
      query.isPublished = true;
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog
// @route   GET /api/blogs/:id
// @access  Public
exports.getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create blog
// @route   POST /api/blogs
// @access  Private/Admin
exports.createBlog = async (req, res, next) => {
  try {
    // Upload image to Cloudinary if provided
    let imageUrl = null;
    if (req.file) {
      imageUrl = await uploadSingleImage(req.file, 'blogs');
    } else if (req.body.image) {
      // Allow image URL to be passed directly (for backward compatibility)
      imageUrl = req.body.image;
    }

    const blogData = {
      ...req.body,
      image: imageUrl
    };

    const blog = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Handle image upload
    let imageUrl = blog.image; // Keep existing image
    if (req.file) {
      // Delete old image if exists
      if (blog.image) {
        await deleteImage(blog.image);
      }
      // Upload new image
      imageUrl = await uploadSingleImage(req.file, 'blogs');
    } else if (req.body.image !== undefined) {
      // If image URL is provided in body, use it (or set to null if explicitly set)
      if (req.body.image && req.body.image !== blog.image) {
        // Delete old image if it's being replaced
        if (blog.image) {
          await deleteImage(blog.image);
        }
      }
      imageUrl = req.body.image || null;
    }

    const blogData = {
      ...req.body,
      image: imageUrl
    };

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      blogData,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: updatedBlog
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Delete image from Cloudinary
    if (blog.image) {
      await deleteImage(blog.image);
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

