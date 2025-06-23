<script setup>
import social from '@/assets/images/social.png';
import Visa from '@/assets/images/visa.png';
</script>

<template>
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
</template>
