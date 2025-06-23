<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { RightOutlined, CaretRightOutlined } from '@ant-design/icons-vue';
import news1 from '@/assets/images/news1.png';
import sale20 from '@/assets/images/sale20.png';

const categories = ['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Tin tức', 'Đại lý', 'Liên hệ'];
</script>

<template>
  <Header />
  <div>
    <div class="bg-zinc-200 py-6 sm:py-8">
      <div class="ml-4 sm:ml-10 text-xs sm:text-base flex items-center gap-2">
        <a href="/" class="no-underline text-slate-900">Trang chủ</a>
        <RightOutlined />
        <a href="/news" class="no-underline text-teal-600 font-thin">Tin tức</a>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-2">
        <h2 class="text-2xl font-bold mb-6">TIN TỨC</h2>
        <div>
          <img :src="news1" alt="news1" class="w-full rounded-xl mb-4" />
          <div class="prose max-w-none">
            <h3>Tiêu đề bài viết</h3>
            <p>Nội dung bài viết ở đây...</p>
          </div>
        </div>
      </div>
      <aside class="md:col-span-1">
        <div class="bg-white rounded-xl shadow p-4 mb-6">
          <h4 class="font-bold mb-2">DANH MỤC</h4>
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
          <div class="mt-5">
            <h2 class="text-xs sm:text-lg font-semibold mb-2">THẺ TAGS</h2>
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
            <hr />
            <div>
              <h2 class="text-xs sm:text-lg font-semibold mT-2">TIN NỔI BẬT</h2>
            </div>
            <hr />
            <img :src="sale20" alt="sale20" class="flex items-center ml-10" />
          </div>
        </div>
      </aside>
    </div>
  </div>
  <Footer />
</template>
