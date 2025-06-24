<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { RightOutlined, CaretRightOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/productStore.ts';
import sale20 from '@/assets/images/sale20.png';
import { ref, computed, watch } from 'vue';

const price = ref(10000000);
const maxPrice = 10000000;
const selectedSizes = ref([]);
const selectedClothes = ref([]);
const selectedBrands = ref([]);
const selectedColors = ref([]);
const sortBy = ref('');

const colors = [
  { name: 'Vàng', code: '#FBBF24' },
  { name: 'Đỏ', code: '#EF4444' },
  { name: 'Trắng', code: '#FFFFFF' },
  { name: 'Nâu', code: '#92400E' },
  { name: 'Da cam', code: '#F97316' },
  { name: 'Hồng', code: '#F472B6' },
];

const productStore = useProductStore();
const router = useRouter();

const filteredProducts = computed(() => productStore.filteredProducts);
const availableCategories = computed(() => productStore.availableCategories);
const availableBrands = computed(() => productStore.availableBrands);
const availableColors = computed(() => productStore.availableColors);
const availableSizes = computed(() => productStore.availableSizes);

watch(price, (newPrice) => {
  productStore.updatePriceRange(newPrice);
});

watch(selectedSizes, (newSizes) => {
  productStore.updateSelectedSizes(newSizes);
});

watch(selectedClothes, (newCategories) => {
  productStore.updateSelectedCategories(newCategories);
});

watch(selectedBrands, (newBrands) => {
  productStore.updateSelectedBrands(newBrands);
});

watch(selectedColors, (newColors) => {
  productStore.updateSelectedColors(newColors);
});

watch(sortBy, (newSortBy) => {
  if (newSortBy) {
    productStore.updateSortBy(newSortBy);
  }
});

const formatPrice = (price) => {
  return price.toLocaleString('vi-VN');
};
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
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-semibold text-base sm:text-lg">DANH MỤC</h2>
        </div>

        <div class="space-y-1 mb-5">
          <a
            v-for="category in availableCategories"
            :key="category"
            href="#"
            @click.prevent="
              selectedClothes.includes(category)
                ? (selectedClothes = selectedClothes.filter((c) => c !== category))
                : selectedClothes.push(category)
            "
            :class="[
              'block rounded-md py-2 text-gray-600 font-medium hover:bg-teal-50 hover:text-teal-600 no-underline transition-colors duration-150 text-xs sm:text-base',
              selectedClothes.includes(category) ? 'bg-teal-50 text-teal-600' : '',
            ]"
          >
            <CaretRightOutlined /> {{ category }}
          </a>
        </div>

        <hr />

        <h2 class="font-bold mb-4 mt-5 text-xs sm:text-base">MỨC GIÁ</h2>
        <div class="w-full max-w-md mx-auto mt-4 sm:mt-10 space-y-3 sm:space-y-5">
          <input type="range" min="0" max="10000000" v-model="price" class="w-full accent-teal-500" />
          <label class="block text-gray-700 font-semibold mb-2 text-xs sm:text-base">
            Giá: {{ formatPrice(price) }}đ
          </label>
          <div class="flex items-center gap-2 sm:gap-4">
            <input
              type="number"
              min="0"
              :max="maxPrice"
              v-model="price"
              class="w-14 sm:w-20 px-2 py-1 text-xs sm:text-sm border rounded"
            />
            -
            <input
              type="text"
              :value="formatPrice(maxPrice)"
              readonly
              class="w-14 sm:w-20 px-2 py-1 text-xs sm:text-sm border rounded bg-gray-100"
            />
          </div>
          <hr />

          <div class="mt-3 mb-3">
            <h2 class="font-bold mb-3 sm:mb-5 text-xs sm:text-base">MÀU SẮC</h2>
            <div class="flex flex-col space-y-2 sm:space-y-3">
              <div v-for="color in colors" :key="color.name" class="flex items-center space-x-2 sm:space-x-3">
                <span
                  :style="{ backgroundColor: color.code }"
                  class="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
                  @click="
                    selectedColors.includes(color.name)
                      ? (selectedColors = selectedColors.filter((c) => c !== color.name))
                      : selectedColors.push(color.name)
                  "
                ></span>
                <span
                  @click="
                    selectedColors.includes(color.name)
                      ? (selectedColors = selectedColors.filter((c) => c !== color.name))
                      : selectedColors.push(color.name)
                  "
                  :class="[
                    'hover:text-teal-500 cursor-pointer text-slate-900 text-xs sm:text-base',
                    selectedColors.includes(color.name) ? 'text-teal-600 font-medium' : '',
                  ]"
                >
                  {{ color.name }}
                </span>
              </div>
            </div>
          </div>

          <hr />

          <div class="mt-3">
            <h2 class="mb-3 sm:mb-5 text-xs sm:text-base">KÍCH THƯỚC</h2>
            <div class="flex flex-col space-y-2 sm:space-y-3">
              <div v-for="size in availableSizes" :key="size">
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
            <h2 class="mb-3 sm:mb-5 text-xs sm:text-base">THEO THƯƠNG HIỆU</h2>
            <div class="max-h-40 overflow-y-auto space-y-2 sm:space-y-3 border rounded p-2 custom-scrollbar">
              <div v-for="brand in availableBrands" :key="brand">
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

          <img :src="sale20" alt="sale20" class="pr-2 sm:pr-5 mt-2 mr-3" />
        </div>
      </aside>

      <section class="flex-1">
        <div class="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-2">
          <h2 class="text-base sm:text-xl font-bold">
            TẤT CẢ SẢN PHẨM ({{ filteredProducts.length }} sản phẩm)
          </h2>
          <div class="flex items-center gap-2">
            <p class="text-gray-500 text-xs sm:text-base">Sắp xếp theo</p>
            <select v-model="sortBy" class="border rounded px-2 mb-5 text-xs sm:text-sm">
              <option value="">Mặc định</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
              <option value="name-asc">Tên A-Z</option>
              <option value="name-desc">Tên Z-A</option>
            </select>
          </div>
        </div>

        <div
          v-if="filteredProducts.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
        >
          <div v-for="product in filteredProducts" :key="product.id">
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
              <p class="text-teal-500 font-light text-xs sm:text-base">{{ formatPrice(product.price) }} đ</p>
              <div class="flex flex-wrap gap-1 mt-1">
                <span
                  v-for="color in product.colors.slice(0, 3)"
                  :key="color.name"
                  :style="{ backgroundColor: color.code }"
                  class="w-3 h-3 rounded-full border border-gray-300"
                  :title="color.name"
                >
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-8">
          <p class="text-gray-500 text-lg">Không tìm thấy sản phẩm phù hợp</p>
        </div>
      </section>
    </div>
  </main>
  <Footer />
</template>
