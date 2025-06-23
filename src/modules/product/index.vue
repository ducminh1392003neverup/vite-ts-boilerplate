<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { RightOutlined, CaretRightOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/productStore.ts';
import sale20 from '@/assets/images/sale20.png';
import { ref } from 'vue';

const categories = [
  'Áo sơ mi',
  'Áo phông nam',
  'Váy nữ',
  'Quần jeans',
  'Quần đùi',
  'Đang khuyến mãi',
  'Sản phẩm nổi bật',
  'Sản phẩm hot',
];

const price = ref(0);
const maxPrice = 10000000;

const selectedSizes = ref([]);

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const selectedClothes = ref([]);

const clothes = [
  'Phụ kiện',
  'Quần',
  'Áo phông',
  'Áo Sơmi',
  'Áo khoác',
  'Giày nam',
  'Giày nữ',
  'Ví cầm tay',
  'Thắt lưng',
  'Túi xách',
  'Nước hoa',
  'Đồng hồ',
];

const brands = [
  'Dickies',
  'Catarzi',
  'Brixton',
  'Ted Baker',
  'New Era',
  'Ray-Ban',
  'Pretty Green',
  'Only & Sons',
  'New Lock',
  'Farah',
  'Bellfield',
  'Selected Homme',
  'Fred Pery',
  'Emporio Armani',
  'Tommy Hilfiger',
  'Asos',
  'Kama',
  'Star',
  'Codad',
  'Promax',
  'Prowin',
  'NX',
  'Lining',
  'Bandolini',
  'ZIlandi',
  'Something Borrow',
  'Gucci',
  'Raga',
  'Casio',
  'Free People',
  'Calvin Klein',
  'Anna Klein',
  'Charter',
  'Guess',
  'Michael Kors',
  'Nike',
];

const selectedBrands = ref([]);

const productStore = useProductStore();
const router = useRouter();
</script>

<template>
  <Header />
  <main>
    <div class="bg-zinc-200 py-6 sm:py-8">
      <div class="ml-4 sm:ml-10 text-xs sm:text-base flex items-center gap-2">
        <a href="/" class="no-underline text-slate-900">Trang chủ</a>
        <RightOutlined />
        <a href="/product" class="no-underline text-teal-600 font-thin">Tất cả sản phẩm</a>
      </div>
    </div>
    <div class="flex flex-col md:flex-row px-2 sm:px-4 md:px-16 py-4 sm:py-8 gap-4 md:gap-8">
      <aside class="w-full md:w-1/4 bg-white rounded-lg shadow p-3 sm:p-6 mb-4 md:mb-0 hidden md:block">
        <h2 class="font-semibold text-base sm:text-lg mb-4">DANH MỤC</h2>
        <div class="space-y-1 mb-5">
          <a
            v-for="category in categories"
            :key="category"
            href="#"
            class="block rounded-md py-2 text-gray-600 font-medium hover:bg-teal-50 hover:text-teal-600 no-underline transition-colors duration-150 text-xs sm:text-base"
          >
            <CaretRightOutlined /> {{ category }}
          </a>
        </div>
        <hr />
        <h2 class="font-bold mb-4 mt-5 text-xs sm:text-base">MỨC GIÁ</h2>
        <div class="w-full max-w-md mx-auto mt-4 sm:mt-10 space-y-3 sm:space-y-5">
          <input type="range" min="0" max="10000000" v-model="price" class="w-full accent-teal-500" />
          <label class="block text-gray-700 font-semibold mb-2 text-xs sm:text-base">Giá: {{ price }}đ</label>
          <div class="flex items-center gap-2 sm:gap-4">
            <input
              type="text"
              min="0"
              :max="maxPrice"
              v-model="price"
              class="w-14 sm:w-20 px-2 py-1 text-xs sm:text-sm border rounded"
            />
            -
            <input
              type="text"
              :value="maxPrice"
              readonly
              class="w-14 sm:w-20 px-2 py-1 text-xs sm:text-sm border rounded bg-gray-100"
            />
          </div>
          <button
            class="bg-teal-500 text-white mt-3 mb-3 border border-green-700 px-4 sm:px-6 md:px-10 py-2 rounded-3xl font-semibold shadow transition-colors duration-200 text-xs sm:text-base"
          >
            Lọc giá
          </button>
          <hr />
          <div class="mt-3 mb-3">
            <h2 class="font-bold mb-3 sm:mb-5 text-xs sm:text-base">MÀU SẮC</h2>
            <div class="flex flex-col space-y-2 sm:space-y-3">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="w-5 h-5 rounded-full bg-yellow-400 border border-gray-300"></span>
                <a href="#" class="hover:text-teal-500 no-underline text-slate-900 text-xs sm:text-base"
                  >Vàng</a
                >
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="w-5 h-5 rounded-full bg-red-500 border border-gray-300"></span>
                <a href="#" class="hover:text-teal-500 no-underline text-slate-900 text-xs sm:text-base"
                  >Đỏ</a
                >
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="w-5 h-5 rounded-full bg-white border border-gray-300"></span>
                <a href="#" class="hover:text-teal-500 no-underline text-slate-900 text-xs sm:text-base"
                  >Trắng</a
                >
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="w-5 h-5 rounded-full bg-amber-900 border border-gray-300"></span>
                <a href="#" class="hover:text-teal-500 no-underline text-slate-900 text-xs sm:text-base"
                  >Nâu</a
                >
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="w-5 h-5 rounded-full bg-orange-500 border border-gray-300"></span>
                <a href="#" class="hover:text-teal-500 no-underline text-slate-900 text-xs sm:text-base"
                  >Da cam</a
                >
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="w-5 h-5 rounded-full bg-pink-400 border border-gray-300"></span>
                <a href="#" class="hover:text-teal-500 no-underline text-slate-900 text-xs sm:text-base"
                  >Hồng</a
                >
              </div>
            </div>
          </div>
          <hr />
          <div class="mt-3">
            <h2 class="mb-3 sm:mb-5 text-xs sm:text-base">KÍCH THƯỚC</h2>
            <div class="flex flex-col space-y-2 sm:space-y-3">
              <div v-for="size in sizes" :key="size">
                <label class="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    :value="size"
                    v-model="selectedSizes"
                    class="form-checkbox text-teal-600 w-4 h-4"
                  />
                  <span class="text-xs sm:text-base">{{ size }}</span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div class="mt-3">
            <h2 class="mb-3 sm:mb-5 text-xs sm:text-base">SẢN PHẨM</h2>
            <div class="max-h-40 overflow-y-auto space-y-2 sm:space-y-3 border rounded p-2 custom-scrollbar">
              <div v-for="clothe in clothes" :key="clothe">
                <label class="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    :value="clothe"
                    v-model="selectedClothes"
                    class="form-checkbox text-teal-600 w-4 h-4"
                  />
                  <span class="text-xs sm:text-base">{{ clothe }}</span>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div class="mt-3">
            <h2 class="mb-3 sm:mb-5 text-xs sm:text-base">THEO THƯƠNG HIỆU</h2>
            <div class="max-h-40 overflow-y-auto space-y-2 sm:space-y-3 border rounded p-2 custom-scrollbar">
              <div v-for="brand in brands" :key="brand">
                <label class="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    :value="brand"
                    v-model="selectedBrands"
                    class="form-checkbox text-teal-600 w-4 h-4"
                  />
                  <span class="text-xs sm:text-base">{{ brand }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <h2 class="text-xs sm:text-lg font-semibold mb-2">Thẻ Tags</h2>
            <div class="flex flex-wrap gap-2">
              <span
                class="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-teal-200"
              >
                Thời trang
              </span>
              <span
                class="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-teal-200"
              >
                Nam
              </span>
              <span
                class="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-teal-200"
              >
                Nữ
              </span>
              <span
                class="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-teal-200"
              >
                Khuyến mãi
              </span>
              <span
                class="bg-teal-100 text-teal-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-teal-200"
              >
                Hè 2025
              </span>
            </div>
          </div>
          <img :src="sale20" alt="sale20" class="pr-2 sm:pr-5 mt-2" />
        </div>
      </aside>
      <section class="flex-1">
        <div class="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-2">
          <h2 class="text-base sm:text-xl font-bold">
            TẤT CẢ SẢN PHẨM ({{ productStore.products.length }} sản phẩm)
          </h2>
          <p class="text-gray-500 text-xs sm:text-base">Sắp xếp theo</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          <div v-for="product in productStore.products" :key="product.id">
            <div
              @click="router.push(`/product/${product.id}`)"
              style="cursor: pointer"
              class="bg-white rounded-lg p-3 sm:p-4 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-44 sm:h-64 object-cover mb-2 sm:mb-4 rounded-md"
              />
              <p class="font-light text-xs sm:text-sm">{{ product.title }}</p>
              <p class="text-teal-500 font-light text-xs sm:text-base">
                {{ product.price.toLocaleString() }} đ
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <Footer />
</template>
