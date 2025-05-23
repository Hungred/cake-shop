<template>
  <div class="min-h-screen font-sans text-[#2c2c2c] pt-[60px]">
    <div
      class="relative group min-h-[500px] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('/images/home-bg.jpg')"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"
      ></div>
      <div
        class="absolute opacity-0 group-hover:opacity-100 transition duration-300 text-center"
      >
        <h1 class="text-white text-2xl font-extrabold mb-2">Delicious Cakes</h1>
        <h2 class="text-white text-2xl font-extrabold mb-4">
          Make Your Life Sweeter
        </h2>
        <button
          class="bg-[#e29396] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#d87f83]"
          @click="router.push('/products')"
        >
          Shop Now
        </button>
      </div>
    </div>

    <!-- Category Shortcuts -->
    <!-- <div class="flex justify-center gap-4 flex-wrap px-4 mb-10">
      <div
        v-for="category in categories"
        :key="category.id"
        class="text-center bg-white p-4 rounded-lg shadow w-32 cursor-pointer transition duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-[#e29396]"
        @click="
          router.push({ path: '/products', query: { category: category.name } })
        "
      >
        <img
          :src="`/images/categories/${category.imageName}`"
          :alt="category.name"
          class="w-24 h-26 object-cover mx-auto"
          loading="lazy"
        />
        <div class="mt-2 font-medium">{{ category.name }}</div>
      </div>
    </div> -->

    <!-- New Arrivals -->
    <div class="max-w-5xl mx-auto px-4 pb-12">
      <h2 class="text-2xl font-bold my-4">New Arrivals</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="product in newProducts"
          :key="product.id"
          class="bg-white rounded-lg p-4 shadow flex flex-col items-center cursor-pointer transition duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-[#e29396]"
          @click="router.push(`/products/${product.id}`)"
        >
          <div class="relative group w-full flex justify-center flex-1">
            <img
              :src="`/images/products/${product.id}.jpg`"
              :alt="product.name"
              class="w-26 h-26 object-cover rounded-xl"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-30 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>
            <button
              class="absolute opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-[#e29396] text-white text-md font-semibold py-1 px-3 rounded-lg hover:bg-[#d87f83] z-10"
              @click.stop="router.push(`/products/${product.id}`)"
            >
              View Details
            </button>
          </div>
          <div class="text-center mt-2">
            <div class="font-medium">{{ product.name }}</div>
            <div class="text-sm text-gray-600">
              ${{ product.price.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProduct } from '@/stores/product';
import { storeToRefs } from 'pinia';

const router = useRouter();
const productStore = useProduct();
const { products } = storeToRefs(productStore);

const sortedProducts = computed(() => {
  return [...products.value].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
});

const newProducts = computed(() => sortedProducts.value.slice(0, 6));
</script>
