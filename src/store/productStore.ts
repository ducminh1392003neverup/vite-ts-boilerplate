import { defineStore } from 'pinia';
import aothun from '@/assets/images/Frame 32.png';
import jeans from '@/assets/images/jeans.png';
import shirt1 from '@/assets/images/shirt1.png';
import shirt from '@/assets/images/tshirt.png';
import ist1 from '@/assets/images/insta1.png';
import ist2 from '@/assets/images/insta2.png';
import ist3 from '@/assets/images/insta3.png';
import ist4 from '@/assets/images/insta4.png';

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  sizes: string[];
  colors: { name: string; code: string }[];
  category?: string;
  brand?: string;
  sale?: boolean;
}

export interface FilterOptions {
  priceRange: number;
  selectedSizes: string[];
  selectedColors: string[];
  selectedCategories: string[];
  selectedBrands: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Áo thun Basic',
        description: 'Áo thun cotton chất lượng cao, mềm mại và thoáng mát.',
        image: aothun,
        price: 199000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
          { name: 'Xám', code: '#808080' },
        ],
        category: 'Áo phông nam',
        brand: 'Nike',
      },
      {
        id: 2,
        title: 'Quần jeans nam',
        description: 'Quần jeans form slim-fit, co giãn nhẹ. Thoải mái nhẹ nhàng phù hợp với mọi lứa tuổi.',
        image: jeans,
        price: 1399000,
        sizes: ['28', '29', '30', '31', '32', '34'],
        colors: [
          { name: 'Xanh đậm', code: '#0F4C81' },
          { name: 'Xanh nhạt', code: '#6B8CAE' },
        ],
        category: 'Quần jeans',
        brand: 'Dickies',
      },
      {
        id: 3,
        title: 'ShirtShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: shirt1,
        price: 4459000,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
          { name: 'Be', code: '#E8DCCA' },
        ],
        category: 'Áo Sơmi',
        brand: 'Tommy Hilfiger',
      },
      {
        id: 4,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: shirt,
        price: 8459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
        category: 'Áo phông nam',
        brand: 'Calvin Klein',
      },
      {
        id: 5,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist1,
        price: 3459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
        category: 'Áo phông nam',
        brand: 'Asos',
      },
      {
        id: 6,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist2,
        price: 2459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
        category: 'Áo phông nam',
        brand: 'Gucci',
      },
      {
        id: 7,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist3,
        price: 2459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
        category: 'Áo phông nam',
        brand: 'Michael Kors',
      },
      {
        id: 8,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist4,
        price: 459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
        category: 'Áo phông nam',
        brand: 'Ray-Ban',
      },
    ] as Product[],
    filters: {
      priceRange: 10000000,
      selectedSizes: [] as string[],
      selectedColors: [] as string[],
      selectedCategories: [] as string[],
      selectedBrands: [] as string[],
      sortBy: undefined as 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | undefined,
    } as FilterOptions,
  }),

  getters: {
    filteredProducts: (state) => {
      let filtered = [...state.products];

      if (state.filters.priceRange < 10000000) {
        filtered = filtered.filter((product) => product.price <= state.filters.priceRange);
      }

      if (state.filters.selectedSizes.length > 0) {
        filtered = filtered.filter((product) =>
          product.sizes.some((size) => state.filters.selectedSizes.includes(size)),
        );
      }

      if (state.filters.selectedColors.length > 0) {
        filtered = filtered.filter((product) =>
          product.colors.some((color) => state.filters.selectedColors.includes(color.name)),
        );
      }

      if (state.filters.selectedCategories.length > 0) {
        filtered = filtered.filter(
          (product) => product.category && state.filters.selectedCategories.includes(product.category),
        );
      }

      if (state.filters.selectedBrands.length > 0) {
        filtered = filtered.filter(
          (product) => product.brand && state.filters.selectedBrands.includes(product.brand),
        );
      }

      if (state.filters.sortBy) {
        filtered.sort((a, b) => {
          switch (state.filters.sortBy) {
            case 'price-asc':
              return a.price - b.price;
            case 'price-desc':
              return b.price - a.price;
            case 'name-asc':
              return a.title.localeCompare(b.title);
            case 'name-desc':
              return b.title.localeCompare(a.title);
            default:
              return 0;
          }
        });
      }

      return filtered;
    },

    availableCategories: (state) => {
      const categories = new Set<string>();
      state.products.forEach((product) => {
        if (product.category) {
          categories.add(product.category);
        }
      });
      return Array.from(categories);
    },

    availableBrands: (state) => {
      const brands = new Set<string>();
      state.products.forEach((product) => {
        if (product.brand) {
          brands.add(product.brand);
        }
      });
      return Array.from(brands);
    },

    availableColors: (state) => {
      const colors = new Set<string>();
      state.products.forEach((product) => {
        product.colors.forEach((color) => {
          colors.add(color.name);
        });
      });
      return Array.from(colors);
    },

    availableSizes: (state) => {
      const sizes = new Set<string>();
      state.products.forEach((product) => {
        product.sizes.forEach((size) => {
          sizes.add(size);
        });
      });
      return Array.from(sizes).sort();
    },
  },

  actions: {
    updatePriceRange(price: number) {
      this.filters.priceRange = price;
    },

    updateSelectedSizes(sizes: string[]) {
      this.filters.selectedSizes = sizes;
    },

    updateSelectedColors(colors: string[]) {
      this.filters.selectedColors = colors;
    },

    updateSelectedCategories(categories: string[]) {
      this.filters.selectedCategories = categories;
    },

    updateSelectedBrands(brands: string[]) {
      this.filters.selectedBrands = brands;
    },

    updateSortBy(sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc') {
      this.filters.sortBy = sortBy;
    },

    clearAllFilters() {
      this.filters = {
        priceRange: 10000000,
        selectedSizes: [],
        selectedColors: [],
        selectedCategories: [],
        selectedBrands: [],
        sortBy: undefined,
      };
    },
  },
});
