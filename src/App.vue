<template>
  <div
    class="bg-[#fffaf3] min-h-screen min-w-screen font-sans text-[#2c2c2c] flex flex-col"
  >
    <div class="bg-red-500">測試背景顏色是否正常</div>
    <!-- Global Header -->
    <Header />
    <!-- Page Content -->
    <div>
      <RouterView />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
  <!-- <Alert />
  <Message />
  <Loading /> -->
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
<style lang="scss"></style>
