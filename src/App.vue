<template>
  <div
    class="bg-[#FFCAD4] min-h-screen min-w-screen font-sans text-[#2c2c2c] flex flex-col"
  >
    <!-- Global Header -->
    <Header />
    <!-- Page Content -->
    <div class="flex-1">
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
