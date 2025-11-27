import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import ProductCard from '../components/product/ProductCard';
import Footer from '../components/common/Footer';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    rating: '',
    sortBy: ''
  });

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query]);

  const performSearch = async () => {
    setLoading(true);
    try {
      const response = await productService.searchProducts(query);
      let results = response.data;

      // Apply filters
      if (filters.minPrice) {
        results = results.filter(p => p.price >= parseFloat(filters.minPrice));
      }
      if (filters.maxPrice) {
        results = results.filter(p => p.price <= parseFloat(filters.maxPrice));
      }
      if (filters.rating) {
        results = results.filter(p => p.rating >= parseFloat(filters.rating));
      }
      if (filters.sortBy === 'price-low') {
        results.sort((a, b) => a.price - b.price);
      } else if (filters.sortBy === 'price-high') {
        results.sort((a, b) => b.price - a.price);
      } else if (filters.sortBy === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
      }

      setProducts(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0 flex flex-col">
      <div className="flex-1 container mx-auto px-3 md:px-4 py-4 md:py-6 max-w-full overflow-x-hidden">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
          {query ? `Search Results for "${query}"` : 'Search Products'}
        </h1>

        {/* Filters */}
        <div className="bg-white rounded-lg p-3 md:p-4 mb-4 md:mb-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                placeholder="₹0"
                className="w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                placeholder="₹10000"
                className="w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Min Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                className="w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">All Ratings</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-8 md:py-12">
            <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-b-2 border-purple-600 mx-auto mb-3 md:mb-4"></div>
            <p className="text-gray-600 text-sm md:text-base">Searching...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-8 md:py-12">
            <p className="text-gray-600 text-base md:text-lg mb-2 md:mb-4">No products found</p>
            <p className="text-gray-500 text-sm md:text-base">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{products.length} product(s) found</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;

