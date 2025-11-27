const cloudinary = require('../config/cloudinary');
const { Readable } = require('stream');

// Upload image to Cloudinary
const uploadToCloudinary = (buffer, folder = 'general') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        resource_type: 'image',
        transformation: [
          { quality: 'auto' },
          { fetch_format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );

    // Convert buffer to stream
    const stream = Readable.from(buffer);
    stream.pipe(uploadStream);
  });
};

// Upload multiple images for products
exports.uploadProductImages = async (files) => {
  const imageUrls = [];

  if (files) {
    // Handle mainImage
    if (files.mainImage && files.mainImage[0]) {
      const mainImageUrl = await uploadToCloudinary(files.mainImage[0].buffer, 'products');
      imageUrls.push(mainImageUrl);
    }

    // Handle additional images
    for (let i = 1; i <= 3; i++) {
      const fieldName = `image${i}`;
      if (files[fieldName] && files[fieldName][0]) {
        const imageUrl = await uploadToCloudinary(files[fieldName][0].buffer, 'products');
        imageUrls.push(imageUrl);
      }
    }
  }

  return imageUrls;
};

// Upload single image
exports.uploadSingleImage = async (file, folder = 'general') => {
  if (!file) {
    return null;
  }

  const imageUrl = await uploadToCloudinary(file.buffer, folder);
  return imageUrl;
};

// Delete image from Cloudinary
exports.deleteImage = async (imageUrl) => {
  try {
    if (!imageUrl) {
      return false;
    }

    // Extract public_id from URL
    // Cloudinary URL format: https://res.cloudinary.com/{cloud_name}/image/upload/{folder}/{public_id}.{format}
    const urlParts = imageUrl.split('/');
    const uploadIndex = urlParts.findIndex(part => part === 'upload');
    
    if (uploadIndex === -1) {
      return false;
    }

    // Get the path after 'upload'
    const pathAfterUpload = urlParts.slice(uploadIndex + 1).join('/');
    // Remove file extension
    const publicId = pathAfterUpload.split('.')[0];

    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    console.error('Error deleting image from Cloudinary:', error);
    return false;
  }
};

// Delete multiple images
exports.deleteImages = async (imageUrls) => {
  if (!imageUrls || !Array.isArray(imageUrls)) {
    return;
  }

  for (const imageUrl of imageUrls) {
    if (imageUrl) {
      await exports.deleteImage(imageUrl);
    }
  }
};

