<script setup>
import { ref } from 'vue';
import {
  ShoppingCartOutlined,
  PhoneFilled,
  SearchOutlined,
  LockFilled,
  UserOutlined,
  MenuOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue';
import { useProductStore } from '@/store/productStore.ts';
import { useRouter } from 'vue-router';

const router = useRouter();

function logout() {
  localStorage.removeItem('app_access_token');
  router.push('/login');
}
const showAccountDropdown = ref(false);
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <header class="mt-2">
    <div class="flex items-center justify-between mb-2 px-4 max-w-7xl mx-auto">
      <div class="hidden md:flex items-center ml-0 md:ml-10">
        <p class="text-xs"><PhoneFilled class="mr-1" />HỖ TRỢ MIỄN PHÍ: 1900 1234</p>
      </div>
      <div class="hidden md:flex items-center space-x-4 text-sm mr-0 md:mr-10">
        <div class="relative flex items-center">
          <div
            class="relative group"
            @mouseenter="showAccountDropdown = true"
            @mouseleave="showAccountDropdown = false"
          >
            <p
              class="font-light text-xs cursor-pointer select-none transition-colors hover:text-blue-500"
              :class="{ 'text-blue-500': showAccountDropdown }"
              tabindex="0"
            >
              <UserOutlined class="mr-1" />
              TÀI KHOẢN
            </p>
            <div
              v-if="showAccountDropdown"
              class="absolute left-0 top-full w-40 bg-white border rounded shadow-lg z-50 transition-all duration-300"
            >
              <a href="/login" class="block px-4 py-2 text-sm hover:bg-gray-100 no-underline"
                ><LockFilled class="mr-1" />Đăng nhập</a
              >
              <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100 no-underline"
                ><UserOutlined class="mr-1" />Đăng ký</a
              >
              <button
                @click="logout"
                class="block w-full px-4 py-2 text-sm font-semibold text-red-600 rounded-lg border-none shadow-none hover:bg-red-100 hover:text-red-700 flex items-center transition-colors duration-200"
              >
                <span><LogoutOutlined class="mr-1" /></span>Đăng xuất
              </button>
            </div>
          </div>
        </div>
        <p class="font-light text-xs">GIỚI THIỆU</p>
        <p class="font-light text-xs">LIÊN HỆ</p>
      </div>
    </div>
    <hr />
    <div class="flex items-center justify-between mt-2 px-10 max-w-7xl">
      <div class="flex items-center">
        <button class="md:hidden mr-4" @click="toggleMobileMenu">
          <MenuOutlined class="text-xl" />
        </button>
        <h2 class="text-xl md:text-2xl font-black pt-2 ml-5">SHOPMINH</h2>
      </div>

      <div class="hidden md:flex items-center space-x-5 ml-10">
        <a href="/" class="hover:text-teal-500 text-sm no-underline text-slate-900">TRANG CHỦ</a>
        <a href="/product" class="hover:text-teal-500 text-sm no-underline text-slate-900">SẢN PHẨM</a>
        <a href="#" class="hover:text-teal-500 text-sm no-underline text-slate-900">GIỚI THIỆU</a>
        <a href="/news" class="hover:text-teal-500 text-sm no-underline text-slate-900">TIN TỨC</a>
        <a href="#" class="hover:text-teal-500 text-sm no-underline text-slate-900">ĐẠI LÝ</a>
        <a href="#" class="hover:text-teal-500 text-sm no-underline text-slate-900">LIÊN HỆ</a>
      </div>
      <div class="flex items-center space-x-4">
        <button
          class="bg-teal-500 text-white border border-green-700 px-6 md:px-10 py-2 rounded-3xl font-semibold shadow transition-colors duration-200"
        >
          ĐẶT HÀNG
        </button>
        <div class="flex items-center space-x-4">
          <button
            class="bg-transparent border-none shadow-none hover:bg-gray-100 rounded-full p-2 transition-colors duration-200"
          >
            <SearchOutlined />
          </button>
          <button
            class="bg-transparent border-none shadow-none hover:bg-gray-100 rounded-full p-2 transition-colors duration-200 flex items-center gap-1"
          >
            <ShoppingCartOutlined /><span class="text-sm">0/0đ</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
