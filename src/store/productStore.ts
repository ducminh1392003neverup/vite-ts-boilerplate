import { defineStore } from 'pinia';
import aothun from '@/assets/images/Frame 32.png';
import jeans from '@/assets/images/jeans.png';
import shirt1 from '@/assets/images/shirt1.png';
import shirt from '@/assets/images/tshirt.png';
import ist1 from '@/assets/images/insta1.png';
import ist2 from '@/assets/images/insta2.png';
import ist3 from '@/assets/images/insta3.png';
import ist4 from '@/assets/images/insta4.png';
import ist5 from '@/assets/images/insta5.png';

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  sizes: string[];
  colors: { name: string; code: string }[];
  sale?: boolean;
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
      },
      {
        id: 2,
        title: 'Quần jeans nam',
        description: 'Quần jeans form slim-fit, co giãn nhẹ. Thoải mái nhẹ nhàng phù hợp với mọi lứa tuổi.',
        image: jeans,
        price: 399000,
        sizes: ['28', '29', '30', '31', '32', '34'],
        colors: [
          { name: 'Xanh đậm', code: '#0F4C81' },
          { name: 'Xanh nhạt', code: '#6B8CAE' },
        ],
      },
      {
        id: 3,
        title: 'ShirtShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: shirt1,
        price: 459000,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
          { name: 'Be', code: '#E8DCCA' },
        ],
      },
      {
        id: 4,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: shirt,
        price: 459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
      },
      {
        id: 5,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist1,
        price: 459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
      },
      {
        id: 6,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist2,
        price: 459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
      },
      {
        id: 7,
        title: 'Áo TShirt',
        description: 'Hoodie unisex, chất liệu nỉ ấm áp cho mùa đông.',
        image: ist3,
        price: 459000,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Trắng', code: '#FFFFFF' },
          { name: 'Đen', code: '#000000' },
        ],
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
      },
    ] as Product[],
  }),
});
