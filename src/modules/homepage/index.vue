<script setup>
import { h, ref } from 'vue';
import {
  ShoppingCartOutlined,
  PhoneFilled,
  SearchOutlined,
  RedoOutlined,
  LockFilled,
  UserOutlined,
  CarFilled,
  MenuOutlined,
} from '@ant-design/icons-vue';
import { Card, Row, Col, Drawer } from 'ant-design-vue';
import { useProductStore } from '@/store/productStore.js';
import image1 from '@/assets/images/image1.png';
import image11 from '@/assets/images/image11.png';
import image12 from '@/assets/images/image12.png';
import image13 from '@/assets/images/image13.png';
import image14 from '@/assets/images/image14.png';
import social from '@/assets/images/social.png';
import ist1 from '@/assets/images/insta1.png';
import ist2 from '@/assets/images/insta2.png';
import ist3 from '@/assets/images/insta3.png';
import ist4 from '@/assets/images/insta4.png';
import ist5 from '@/assets/images/insta5.png';
import Visa from '@/assets/images/visa.png';

const productStore = useProductStore();
const showAccountDropdown = ref(false);
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-2">
    <header class="mb-2 mt-2">
      <div class="flex items-center justify-between mb-2 px-4 max-w-7xl mx-auto">
        <div class="hidden md:flex items-center ml-0 md:ml-10">
          <PhoneFilled class="mr-2" />
          <p class="text-xs">HỖ TRỢ MIỄN PHÍ: 1900 1234</p>
        </div>
        <div class="hidden md:flex items-center space-x-4 text-sm mr-0 md:mr-10">
          <div class="relative flex items-center">
            <UserOutlined class="mr-1" />
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
                TÀI KHOẢN
              </p>
              <div
                v-if="showAccountDropdown"
                class="absolute left-0 top-full w-40 bg-white border rounded shadow-lg z-50 transition-all duration-300"
              >
                <a href="/login" class="block px-4 py-2 text-sm hover:bg-gray-100"
                  ><LockFilled class="mr-1" />Đăng nhập</a
                >
                <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100"
                  ><UserOutlined class="mr-1" />Đăng ký</a
                >
              </div>
            </div>
          </div>
          <p class="font-light text-xs">GIỚI THIỆU</p>
          <p class="font-light text-xs">LIÊN HỆ</p>
        </div>
      </div>
      <hr />
      <div class="flex items-center justify-between mt-2 px-4 max-w-7xl mx-auto">
        <div class="flex items-center">
          <button class="md:hidden mr-4" @click="toggleMobileMenu">
            <MenuOutlined class="text-xl" />
          </button>
          <h2 class="text-xl md:text-2xl font-black">SHOPMINH</h2>
        </div>

        <div class="hidden md:flex items-center space-x-5 ml-10">
          <a href="#" class="text-sm">TRANG CHỦ</a>
          <a href="#" class="text-sm">SẢN PHẨM</a>
          <a href="#" class="text-sm">GIỚI THIỆU</a>
          <a href="#" class="text-sm">TIN TỨC</a>
          <a href="#" class="text-sm">ĐẠI LÝ</a>
          <a href="#" class="text-sm">LIÊN HỆ</a>
        </div>

        <div class="flex items-center space-x-4">
          <button class="hidden md:block bg-green-500 text-white px-6 md:px-10 py-2 rounded-3xl">
            ĐẶT HÀNG
          </button>
          <div class="flex items-center space-x-4">
            <button>
              <SearchOutlined />
            </button>
            <button><ShoppingCartOutlined /> <span class="text-sm">0/0đ</span></button>
          </div>
        </div>
      </div>
    </header>

    <Drawer
      placement="left"
      :visible="showMobileMenu"
      :closable="false"
      class="mobile-menu-drawer"
      @close="toggleMobileMenu"
    >
      <div class="flex flex-col space-y-4">
        <a href="#" class="text-sm py-2 border-b">TRANG CHỦ</a>
        <a href="#" class="text-sm py-2 border-b">SẢN PHẨM</a>
        <a href="#" class="text-sm py-2 border-b">GIỚI THIỆU</a>
        <a href="#" class="text-sm py-2 border-b">TIN TỨC</a>
        <a href="#" class="text-sm py-2 border-b">ĐẠI LÝ</a>
        <a href="#" class="text-sm py-2 border-b">LIÊN HỆ</a>
        <div class="pt-4">
          <button class="w-full bg-green-500 text-white px-6 py-2 rounded-3xl">ĐẶT HÀNG</button>
        </div>
        <div class="pt-4 flex flex-col space-y-2">
          <a href="/login" class="flex items-center text-sm"><LockFilled class="mr-2" />Đăng nhập</a>
          <a href="#" class="flex items-center text-sm"><UserOutlined class="mr-2" />Đăng ký</a>
        </div>
      </div>
    </Drawer>

    <hr />
    <div class="max-w-7xl mx-auto px-4">
      <img :src="image1" alt="image" class="w-full" />
      <div class="flex flex-col md:flex-row items-center justify-between mx-2 md:mx-10 mt-10 gap-6">
        <div class="flex items-center w-full md:w-auto">
          <div>
            <CarFilled class="text-2xl" />
          </div>
          <div class="ml-4">
            <h2 class="text-sm md:text-base">MIỄN PHÍ VẬN CHUYỂN</h2>
            <p class="text-gray-600 text-xs md:text-sm">Trong bán kính 10km với mọi đơn</p>
          </div>
        </div>
        <div class="h-6 w-px bg-gray-300 hidden md:block"></div>
        <div class="flex items-center w-full md:w-auto">
          <div class="flex items-center mr-5">
            <RedoOutlined class="text-2xl" />
          </div>
          <div>
            <h2 class="text-sm md:text-base">ĐỔI TRẢ MIỄN PHÍ</h2>
            <p class="text-gray-600 text-xs md:text-sm">Đổi trả hàng nhanh trong 15 ngày</p>
          </div>
        </div>
        <div class="h-6 w-px bg-gray-300 hidden md:block"></div>
        <div class="flex items-center w-full md:w-auto">
          <div class="mr-5">
            <PhoneFilled class="text-2xl" />
          </div>
          <div class="mr-0 md:mr-10">
            <h2 class="text-sm md:text-base">HỖ TRỢ MIỄN PHÍ</h2>
            <p class="text-gray-600 text-xs md:text-sm">Gọi (04) 5560 6780 để được tư vấn</p>
          </div>
        </div>
      </div>
      <div class="relative rounded-3xl my-10 bg-neutral-200 p-4 md:p-0">
        <h2 class="font-black text-3xl md:text-5xl text-center my-4 md:my-10 pt-4 md:pt-10">
          PHONG CÁCH ĂN MẶC
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full py-4 md:py-8">
          <div
            class="relative group overflow-hidden rounded-3xl shadow-lg h-48 md:h-64 transition-all duration-300"
          >
            <img
              :src="image11"
              alt="image11"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div
            class="relative group overflow-hidden rounded-3xl shadow-lg h-48 md:h-64 transition-all duration-300"
          >
            <img
              :src="image12"
              alt="image12"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full py-4 md:py-8">
          <div
            class="relative group overflow-hidden rounded-3xl shadow-lg h-48 md:h-64 transition-all duration-300"
          >
            <img
              :src="image13"
              alt="image13"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div
            class="relative group overflow-hidden rounded-3xl shadow-lg h-48 md:h-64 transition-all duration-300"
          >
            <img
              :src="image14"
              alt="image14"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-10 px-4">
      <div class="text-center mb-8 md:mb-12">
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-4">SẢN PHẨM NỔI BẬT</h1>
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-5 px-2 md:px-10">
          <a href="#" class="text-xs md:text-sm">THỜI TRANG NAM</a>
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm">THỜI TRANG NỮ</a>
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm">ÁO ĐÔI</a>
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm">TÚI SÁCH</a>
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm">PHỤ KIỆN KHÁC</a>
        </div>
      </div>
      <Row :gutter="[16, 16]" class="w-full">
        <Col
          v-for="product in productStore.products"
          :key="product.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
          class="mb-4 gap-4"
        >
          <Card
            class="h-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            :hoverable="true"
            :cover="
              h('img', {
                src: product.image,
                alt: product.title,
                class: 'w-full h-48 object-contain bg-white p-4',
              })
            "
          >
            <template #actions>
              <a-button
                type="primary"
                class="w-full h-10 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCartOutlined />
                Thêm vào giỏ
              </a-button>
            </template>
            <Card.Meta :title="product.title">
              <template #description>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ product.description }}</p>
                <p class="text-xl font-semibold text-blue-500 m-0">{{ product.price.toLocaleString() }} đ</p>
              </template>
            </Card.Meta>
          </Card>
        </Col>
      </Row>
    </div>
    <div class="max-w-7xl mx-auto mt-10 px-4">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-black text-gray-900 mb-4">XU HƯỚNG MỚI</h1>
      </div>
      <Row :gutter="[16, 16]" class="w-full">
        <Col
          v-for="product in productStore.products"
          :key="product.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
          class="mb-4 gap-4"
        >
          <Card
            class="h-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            :hoverable="true"
            :cover="
              h('img', {
                src: product.image,
                alt: product.title,
                class: 'w-full h-48 object-contain bg-white p-4',
              })
            "
          >
            <template #actions>
              <a-button
                type="primary"
                class="w-full h-10 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCartOutlined />
                Thêm vào giỏ
              </a-button>
            </template>
            <Card.Meta :title="product.title">
              <template #description>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ product.description }}</p>
                <p class="text-xl font-semibold text-blue-500 m-0">{{ product.price.toLocaleString() }} đ</p>
              </template>
            </Card.Meta>
          </Card>
        </Col>
      </Row>
    </div>
    <div
      class="bg-black h-auto md:h-20 mt-10 max-w-7xl mx-4 md:mx-14 flex flex-col md:flex-row items-center justify-between p-4 md:px-4"
    >
      <p class="text-white text-sm md:text-base text-center md:text-left mb-4 md:mb-0">
        Theo dõi chúng tôi để nhận <span class="text-green-500 font-semibold">10%</span> giảm giá
      </p>
      <img :src="social" alt="social" class="h-6 md:h-8 w-auto object-contain" />
    </div>

    <div class="bg-zinc-100 text-slate-950">
      <div>
        <h2 class="text-3xl md:text-4xl text-center mt-10 font-black">SHOP TRÊN INSTAGRAM</h2>
        <p class="text-center text-gray-600 text-sm md:text-base">
          Theo dõi <a href="#" class="text-slate-900 mt-2">@MINHSHOP</a>
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 p-4 md:p-8">
        <img :src="ist1" alt="ast1" class="w-full h-40 md:h-52 object-cover rounded-xl" />
        <img :src="ist2" alt="ast2" class="w-full h-40 md:h-52 object-cover rounded-xl" />
        <img :src="ist3" alt="ast3" class="w-full h-40 md:h-52 object-cover rounded-xl" />
        <img :src="ist4" alt="ast4" class="w-full h-40 md:h-52 object-cover rounded-xl" />
        <img :src="ist5" alt="ast5" class="w-full h-40 md:h-52 object-cover rounded-xl" />
      </div>
    </div>

    <footer class="relative bg-zinc-100 text-slate-950">
      <div
        class="flex flex-col md:flex-row md:items-start justify-between max-w-7xl mx-auto mb-6 mt-10 md:mt-28 px-4 md:px-10"
      >
        <div class="text-center md:text-left mb-8 md:mb-0 md:mt-10">
          <h2 class="font-black text-2xl md:text-3xl">SHOPMINH</h2>
          <p class="text-gray-600 text-xs mt-4">
            We have clothes that suits your style and <br class="hidden md:block" />
            which you're proud to wear. From <br class="hidden md:block" />
            women to men.
          </p>
          <img :src="social" alt="social" class="h-6 mt-3 mx-auto md:mx-0" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 mt-4 md:mt-10">
          <div class="text-center md:text-left">
            <h2 class="font-medium text-sm md:text-base">COMPANY</h2>
            <p class="text-gray-600 my-3 md:my-5 text-xs">About</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Features</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Works</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Carrer</p>
          </div>
          <div class="text-center md:text-left">
            <h2 class="font-medium text-sm md:text-base">HELP</h2>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Customer Support</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Delivery Details</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Term & Conditions</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Privacy Policy</p>
          </div>
          <div class="text-center md:text-left">
            <h2 class="font-medium text-sm md:text-base">FAQ</h2>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Account</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Manage Delivery</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Oders</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Payment</p>
          </div>
          <div class="text-center md:text-left">
            <h2 class="font-medium text-sm md:text-base">Liên hệ</h2>
            <p class="text-gray-600 my-3 md:my-5 text-xs">Toa E8, 14 Thụy Khuê, Hà Nội,</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">support@sapo.vn</p>
            <p class="text-gray-600 my-3 md:my-5 text-xs">1900 1234</p>
          </div>
        </div>
      </div>
      <hr class="font-medium max-w-7xl mx-auto" />
      <div
        class="container px-4 py-6 text-center md:text-left mb-10 text-gray-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4 md:gap-0"
      >
        <p class="text-xs md:text-sm">SHOPMINH © 2003-2025, All Rights Reserved</p>
        <img :src="Visa" alt="visa" class="w-auto h-8 md:h-10 object-cover" />
      </div>
    </footer>
  </div>
</template>

<style>
.ant-card {
  @apply border-0;
}

.ant-card-meta-title {
  @apply text-base font-semibold text-gray-900 mb-2;
}

.ant-card-actions {
  @apply bg-white border-t border-gray-100;
}

.ant-btn-primary {
  @apply bg-blue-500 hover:bg-blue-600;
}

.mobile-menu-drawer .ant-drawer-content-wrapper {
  @apply w-64;
}

.mobile-menu-drawer .ant-drawer-body {
  @apply p-0;
}

.mobile-menu-drawer .ant-drawer-content {
  @apply bg-white;
}
</style>
