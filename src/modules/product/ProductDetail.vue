<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { useProductStore } from '@/store/productStore';
import type { Product } from '@/store/productStore';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const product = ref<Product | null>(null);
const quantity = ref(1);
const selectedSize = ref('');
const selectedColor = ref('');
const recentlyViewed = ref<Product[]>([]);

function saveRecentlyViewed(id: number) {
  let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
  viewed = viewed.filter((pid: number) => pid !== id);
  viewed.unshift(id);
  if (viewed.length > 10) viewed = viewed.slice(0, 10);
  localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
}

function getRecentlyViewedProducts(): Product[] {
  let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
  viewed = viewed.filter((pid: number) => pid !== product.value?.id);
  const products = viewed
    .map((pid: number) => productStore.products.find((p) => p.id === pid))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 3);
  return products;
}

function updateRecentlyViewed() {
  recentlyViewed.value = getRecentlyViewedProducts();
}

onMounted(() => {
  const id = Number(route.params.id);
  const foundProduct = productStore.products.find((p) => p.id === id);
  if (foundProduct) {
    product.value = foundProduct;
    saveRecentlyViewed(foundProduct.id);
    updateRecentlyViewed();
    if (foundProduct.sizes.length > 0) {
      selectedSize.value = foundProduct.sizes[0];
    }
    if (foundProduct.colors.length > 0) {
      selectedColor.value = foundProduct.colors[0].code;
    }
  }
});

watch(
  () => route.params.id,
  (newId) => {
    const id = Number(newId);
    const foundProduct = productStore.products.find((p) => p.id === id);
    if (foundProduct) {
      product.value = foundProduct;
      saveRecentlyViewed(foundProduct.id);
      updateRecentlyViewed();
      if (foundProduct.sizes.length > 0) {
        selectedSize.value = foundProduct.sizes[0];
      }
      if (foundProduct.colors.length > 0) {
        selectedColor.value = foundProduct.colors[0].code;
      }
    }
  },
);

function increase() {
  quantity.value++;
}

function decrease() {
  if (quantity.value > 1) quantity.value--;
}

function addToCart() {
  if (!selectedSize.value || !selectedColor.value) {
    alert('Vui lòng chọn kích thước và màu sắc!');
    return;
  }
  alert('Đã thêm vào giỏ hàng!');
}

const getColorName = (colorCode: string): string => {
  return product.value?.colors.find((c) => c.code === colorCode)?.name || '';
};
</script>

<template>
  <Header />
  <div class="mx-auto py-6 px-2 sm:px-4 md:px-6 md:max-w-5xl">
    <nav class="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 flex flex-wrap items-center gap-2">
      <span class="hover:underline cursor-pointer" @click="router.push('/')">Trang chủ</span>
      <span>/</span>
      <span class="hover:underline cursor-pointer" @click="router.push('/product')">Sản phẩm</span>
      <span>/</span>
      <span class="text-teal-600 font-semibold truncate max-w-[120px] md:max-w-xs">{{
        product?.title || 'Chi tiết'
      }}</span>
    </nav>
    <div
      v-if="product"
      class="bg-white rounded-2xl shadow-xl sm:p-5 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 animate-fade-in"
    >
      <div class="flex flex-col md:gap-4 w-full md:w-1/2 md:sticky md:top-4">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-auto max-h-[700px] object-contain rounded-xl bg-gray-50 border"
        />
      </div>
      <div class="flex-1 flex flex-col gap-4 md:gap-6">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 md:mb-2">
          {{ product.title }}
        </h1>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <p class="text-xs sm:text-sm">Tình trạng: <span class="text-slate-400">Hết hàng</span></p>
          <div class="h-4 w-px bg-slate-900 hidden sm:block"></div>
          <p class="text-xs sm:text-sm">Mã SP: <span class="text-slate-400">Đang cập nhật</span></p>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 sm:mb-2">
          <span class="text-lg sm:text-xl md:text-2xl font-bold text-teal-500"
            >{{ product.price.toLocaleString() }} đ</span
          >
          <span
            v-if="product.sale"
            class="ml-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold"
            >SALE</span
          >
        </div>
        <div class="border-t sm:pt-4">
          <p class="text-gray-600 text-xs sm:text-base leading-relaxed">{{ product.description }}</p>
        </div>
        <div class="space-y-4">
          <div>
            <p class="text-sm font-semibold mb-2">Kích thước:</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size"
                :class="[
                  'px-3 py-1 border rounded-md text-sm transition-colors duration-200',
                  selectedSize === size
                    ? 'bg-teal-500 text-white border-teal-500'
                    : 'border-gray-300 hover:border-teal-500',
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>
          <div>
            <p class="text-sm font-semibold mb-2">Màu sắc:</p>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="color in product.colors"
                :key="color.code"
                @click="selectedColor = color.code"
                class="relative group"
              >
                <div
                  class="w-8 h-8 rounded-full border-2 transition-all duration-200"
                  :style="{
                    backgroundColor: color.code,
                    borderColor: selectedColor === color.code ? '#14B8A6' : 'transparent',
                  }"
                ></div>
                <span
                  class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap"
                >
                  {{ color.name }}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 flex-wrap">
          <span class="font-semibold text-xs sm:text-base">Số lượng:</span>
          <button
            @click="decrease"
            class="w-8 h-8 rounded-full border flex items-center justify-center text-lg font-bold hover:bg-gray-100"
          >
            -
          </button>
          <input
            type="number"
            v-model="quantity"
            min="1"
            class="w-12 sm:w-14 pl-2 sm:pl-4 text-center border rounded focus:outline-none text-xs sm:text-base"
          />
          <button
            @click="increase"
            class="w-8 h-8 rounded-full border flex items-center justify-center text-lg font-bold hover:bg-gray-100"
          >
            +
          </button>
          <button
            @click="addToCart"
            class="bg-teal-500 text-white border border-green-700 px-4 sm:px-6 md:px-10 py-2 rounded-3xl font-semibold shadow transition-colors duration-200 text-xs sm:text-base mt-2 sm:mt-0"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500 py-10 sm:py-20 text-base sm:text-xl">
      Không tìm thấy sản phẩm
    </div>
  </div>
  <div></div>
  <div class="mt-10 max-w-5xl mx-auto px-2 sm:px-4">
    <h2 class="text-center font-black text-2xl sm:text-3xl mb-6 hover:text-teal-500 transition">
      Sản phẩm vừa xem
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div
        v-for="item in recentlyViewed"
        :key="item.id"
        @click="router.push(`/product/${item.id}`)"
        class="bg-white rounded-lg shadow p-3 flex flex-col items-center text-center hover:shadow-lg transition-all cursor-pointer"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-32 object-contain mb-2 rounded-md bg-gray-50"
        />
        <p class="font-light text-xs sm:text-sm line-clamp-1">{{ item.title }}</p>
        <p class="text-teal-500 font-light text-xs sm:text-base">{{ item.price.toLocaleString() }} đ</p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
