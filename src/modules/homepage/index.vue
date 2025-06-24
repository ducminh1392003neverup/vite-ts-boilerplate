<script setup>
import { h, ref } from 'vue';
import {
  ShoppingCartOutlined,
  PhoneFilled,
  RedoOutlined,
  LockFilled,
  UserOutlined,
  CarFilled,
  MenuOutlined,
} from '@ant-design/icons-vue';
import { Card, Row, Col, Drawer } from 'ant-design-vue';
import { useProductStore } from '@/store/productStore.ts';
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
import dodoi from '@/assets/images/dodoi.png';
import nu from '@/assets/images/nu.png';
import nam from '@/assets/images/nam.png';
import { useRouter } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

const router = useRouter();

function logout() {
  localStorage.removeItem('app_access_token');
  router.push('/login');
}

const productStore = useProductStore();
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<template>
  <Header />
  <div class="min-h-screen bg-gray-50 py-2">
    <Drawer
      placement="left"
      :visible="showMobileMenu"
      :closable="false"
      class="mobile-menu-drawer"
      @close="toggleMobileMenu"
    >
      <div class="flex flex-col space-y-4">
        <a href="#" class="text-sm py-2 border-b">TRANG CHỦ</a>
        <a href="/product" class="text-sm py-2 border-b">SẢN PHẨM</a>
        <a href="#" class="text-sm py-2 border-b">GIỚI THIỆU</a>
        <a href="#" class="text-sm py-2 border-b">TIN TỨC</a>
        <a href="#" class="text-sm py-2 border-b">ĐẠI LÝ</a>
        <a href="#" class="text-sm py-2 border-b">LIÊN HỆ</a>
        <div class="pt-4">
          <button
            class="w-full bg-transparent border-none shadow-none text-green-600 px-6 py-2 rounded-3xl hover:bg-green-100 transition-colors duration-200 font-semibold"
          >
            ĐẶT HÀNG
          </button>
        </div>
        <div class="pt-4 flex flex-col space-y-2">
          <a
            href="/login"
            class="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
            ><LockFilled class="mr-2" />Đăng nhập</a
          >
          <a
            href="#"
            class="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
            ><UserOutlined class="mr-2" />Đăng ký</a
          >
          <button
            @click="logout"
            class="flex items-center text-sm text-red-600 bg-red-50 rounded-lg border-none shadow-none px-3 py-2 mt-1 hover:bg-red-100 hover:text-red-700 transition-colors duration-200 font-semibold gap-2"
          >
            <UserOutlined class="mr-1" />Đăng xuất
          </button>
        </div>
      </div>
    </Drawer>

    <hr />

    <div class="max-w-7xl mx-auto px-4">
      <img :src="image1" alt="image" class="w-full" />
      <div class="flex flex-col md:flex-row items-center justify-between mx-2 md:mx-10 mt-10 gap-6">
        <div class="flex items-center w-full md:w-auto">
          <div>
            <CarFilled class="text-2xl mb-3" />
          </div>
          <div class="ml-4">
            <h2 class="text-sm md:text-base">MIỄN PHÍ VẬN CHUYỂN</h2>
            <p class="text-gray-600 text-xs md:text-sm">Trong bán kính 10km với mọi đơn</p>
          </div>
        </div>
        <div class="h-6 w-px bg-gray-300 hidden md:block"></div>
        <div class="flex items-center w-full md:w-auto">
          <div class="flex items-center mr-5">
            <RedoOutlined class="text-2xl mb-3" />
          </div>
          <div>
            <h2 class="text-sm md:text-base">ĐỔI TRẢ MIỄN PHÍ</h2>
            <p class="text-gray-600 text-xs md:text-sm">Đổi trả hàng nhanh trong 15 ngày</p>
          </div>
        </div>
        <div class="h-6 w-px bg-gray-300 hidden md:block"></div>
        <div class="flex items-center w-full md:w-auto">
          <div class="mr-5">
            <PhoneFilled class="text-2xl mb-3" />
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
          <a href="#" class="text-xs md:text-sm no-underline text-slate-900 hover:text-teal-500"
            >THỜI TRANG NAM</a
          >
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm no-underline text-slate-900 hover:text-teal-500"
            >THỜI TRANG NỮ</a
          >
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm no-underline text-slate-900 hover:text-teal-500">ÁO ĐÔI</a>
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm no-underline text-slate-900 hover:text-teal-500">TÚI SÁCH</a>
          <div class="h-4 w-px bg-gray-300 hidden md:block"></div>
          <a href="#" class="text-xs md:text-sm no-underline text-slate-900 hover:text-teal-500"
            >PHỤ KIỆN KHÁC</a
          >
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
          <div @click="router.push(`/product/${product.id}`)" style="cursor: pointer">
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
                  <p class="text-xl font-semibold text-blue-500 m-0">
                    {{ product.price.toLocaleString() }} đ
                  </p>
                </template>
              </Card.Meta>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
    <div class="py-20">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-black text-gray-900 mb-4">DANH MỤC SẢN PHẨM</h1>
      </div>
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img :src="dodoi" alt="Áo đôi" class="w-full h-[300px] object-cover" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">ÁO ĐÔI</span>
            </div>
          </div>
          <div
            class="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img :src="nu" alt="Thời trang nữ" class="w-full h-[300px] object-cover" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">THỜI TRANG NỮ</span>
            </div>
          </div>
          <div
            class="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img :src="nam" alt="Thời trang nam" class="w-full h-[300px] object-cover" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">THỜI TRANG NAM</span>
            </div>
          </div>
        </div>
      </div>
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
          <div @click="router.push(`/product/${product.id}`)" style="cursor: pointer">
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
                  <p class="text-xl font-semibold text-blue-500 m-0">
                    {{ product.price.toLocaleString() }} đ
                  </p>
                </template>
              </Card.Meta>
            </Card>
          </div>
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

    <Footer />
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
