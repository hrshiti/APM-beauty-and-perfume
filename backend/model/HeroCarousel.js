const mongoose = require('mongoose');

const heroCarouselSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title']
  },
  subtitle: {
    type: String
  },
  image: {
    type: String,
    required: [true, 'Please provide an image']
  },
  link: {
    type: String
  },
  buttonText: {
    type: String,
    default: 'Shop Now'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('HeroCarousel', heroCarouselSchema);

