// Utility Helper Functions

/**
 * Format price with currency symbol
 * @param {number|string} price - Price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `₹${parseFloat(price).toFixed(2)}`;
};

/**
 * Calculate discount percentage
 * @param {number} originalPrice - Original price
 * @param {number} discountedPrice - Discounted price
 * @returns {number} Discount percentage
 */
export const calculateDiscount = (originalPrice, discountedPrice) => {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return Math.round(discount);
};

/**
 * Format review count
 * @param {number} count - Review count
 * @returns {string} Formatted review count (e.g., "1.3K")
 */
export const formatReviewCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

