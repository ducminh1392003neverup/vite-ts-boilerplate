<template>
  <div
    @click="goToDetail"
    style="cursor: pointer"
    class="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition-all"
  >
    <img
      :src="product.image"
      :alt="product.name || product.title"
      class="w-full h-64 object-cover mb-4 rounded-md"
    />
    <p class="font-light text-sm">{{ product.name || product.title }}</p>
    <p class="text-teal-500 font-light">{{ formatPrice(product.price) }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({ product: Object });
const router = useRouter();
function goToDetail() {
  router.push(`/product/${props.product.id}`);
}
function formatPrice(price) {
  if (typeof price === 'number') return price.toLocaleString() + ' đ';
  if (typeof price === 'string' && !price.endsWith('đ')) return price + ' đ';
  return price;
}
</script>
