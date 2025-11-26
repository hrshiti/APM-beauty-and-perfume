import { mockProducts } from '../module/Admin/admin-services/mockData';

// Enhanced mock data with all needed fields
export const getMockProducts = () => {
  return mockProducts.map(product => ({
    id: product._id,
    name: product.name,
    price: product.price,
    originalPrice: product.regularPrice || product.price * 1.5,
    discount: product.regularPrice 
      ? Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100)
      : 0,
    image: product.image || product.images?.[0],
    images: product.images || [product.image],
    category: product.category,
    categoryName: product.categoryName,
    description: product.description || 'Premium quality product',
    rating: product.rating || 4.5,
    reviews: product.reviews || 100,
    inStock: product.inStock,
    stock: product.stock || 0,
    isFeatured: product.isFeatured,
    isBestSeller: product.isBestSeller,
    isMostLoved: product.isMostLoved,
    size: product.size || 'Standard',
    tags: product.tags || []
  }));
};

// Mock categories
export const getMockCategories = () => [
  { id: 'cat1', name: 'Gift Sets', slug: 'gift-sets', image: '' },
  { id: 'cat2', name: 'Men', slug: 'men', image: '' },
  { id: 'cat3', name: 'Women', slug: 'women', image: '' },
  { id: 'cat4', name: 'Unisex', slug: 'unisex', image: '' },
  { id: 'cat5', name: 'Bath & Body', slug: 'bath-body', image: '' },
  { id: 'cat6', name: 'Cosmetics', slug: 'cosmetics', image: '' },
  { id: 'cat7', name: 'Skincare', slug: 'skincare', image: '' }
];

// Mock user
export const getMockUser = () => ({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 98765 43210',
  addresses: [
    {
      id: '1',
      type: 'home',
      name: 'John Doe',
      phone: '+91 98765 43210',
      address: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true
    }
  ]
});

// Mock orders
export const getMockOrders = () => {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  return [
    {
      id: 'ORD001',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'delivered',
      items: [
        { id: '1', name: 'CEO Man Perfume', quantity: 1, price: 699, image: '' }
      ],
      total: 749,
      shipping: 50,
      address: getMockUser().addresses[0],
      trackingNumber: 'TRK123456789'
    },
    ...orders
  ];
};

// Mock reviews
export const getMockReviews = (productId) => [
  {
    id: '1',
    userId: '1',
    userName: 'Rahul Sharma',
    rating: 5,
    comment: 'Excellent product! Great quality and long-lasting fragrance. Highly recommended!',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    verified: true
  },
  {
    id: '2',
    userId: '2',
    userName: 'Priya Patel',
    rating: 4,
    comment: 'Good value for money. Packaging could be better but the product quality is excellent.',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    verified: true
  },
  {
    id: '3',
    userId: '3',
    userName: 'Amit Kumar',
    rating: 5,
    comment: 'Amazing fragrance! Lasts all day. Will definitely buy again.',
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    verified: true
  }
];

// Search products
export const searchProducts = (query) => {
  const products = getMockProducts();
  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.categoryName.toLowerCase().includes(lowerQuery) ||
    (product.description && product.description.toLowerCase().includes(lowerQuery))
  );
};

// Get products by category
export const getProductsByCategory = (categorySlug) => {
  const products = getMockProducts();
  const categoryMap = {
    'gift-sets': 'Gift Sets',
    'men': 'Men',
    'women': 'Women',
    'unisex': 'Unisex',
    'bath-body': 'Bath & Body',
    'cosmetics': 'Cosmetics',
    'skincare': 'Skincare'
  };
  
  const categoryName = categoryMap[categorySlug] || categorySlug;
  return products.filter(product => 
    product.categoryName.toLowerCase() === categoryName.toLowerCase()
  );
};

// Get related products
export const getRelatedProducts = (productId, limit = 4) => {
  const products = getMockProducts();
  const currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => 
      p.id !== productId && 
      (p.category === currentProduct.category || p.isBestSeller)
    )
    .slice(0, limit);
};

