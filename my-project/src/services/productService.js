import { 
  getMockProducts, 
  searchProducts, 
  getProductsByCategory, 
  getRelatedProducts,
  getMockReviews 
} from './mockDataService';

// Simulate API delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const productService = {
  getAllProducts: async (filters = {}) => {
    await delay();
    let products = getMockProducts();
    
    if (filters.category) {
      products = products.filter(p => p.category === filters.category);
    }
    
    if (filters.minPrice) {
      products = products.filter(p => p.price >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
      products = products.filter(p => p.price <= filters.maxPrice);
    }
    
    if (filters.rating) {
      products = products.filter(p => p.rating >= filters.rating);
    }
    
    if (filters.isBestSeller) {
      products = products.filter(p => p.isBestSeller);
    }
    
    if (filters.isFeatured) {
      products = products.filter(p => p.isFeatured);
    }
    
    if (filters.sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'newest') {
      products.reverse();
    }
    
    return { data: products, success: true };
  },
  
  getProductById: async (id) => {
    await delay();
    const products = getMockProducts();
    const product = products.find(p => p.id === id);
    
    if (!product) {
      throw new Error('Product not found');
    }
    
    return { data: product, success: true };
  },
  
  searchProducts: async (query) => {
    await delay();
    const results = searchProducts(query);
    return { data: results, success: true };
  },
  
  getProductsByCategory: async (categorySlug) => {
    await delay();
    const products = getProductsByCategory(categorySlug);
    return { data: products, success: true };
  },
  
  getRelatedProducts: async (productId, limit = 4) => {
    await delay();
    const products = getRelatedProducts(productId, limit);
    return { data: products, success: true };
  },
  
  getProductReviews: async (productId) => {
    await delay();
    const reviews = getMockReviews(productId);
    return { data: reviews, success: true };
  },
  
  getBestsellers: async () => {
    await delay();
    const products = getMockProducts();
    return { 
      data: products.filter(p => p.isBestSeller).slice(0, 8), 
      success: true 
    };
  },
  
  getFeaturedProducts: async () => {
    await delay();
    const products = getMockProducts();
    return { 
      data: products.filter(p => p.isFeatured).slice(0, 8), 
      success: true 
    };
  },
  
  getNewArrivals: async () => {
    await delay();
    const products = getMockProducts();
    return { 
      data: products.slice(0, 8), 
      success: true 
    };
  }
};

