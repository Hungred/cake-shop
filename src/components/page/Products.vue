<template>
  <div class="bg-[#FFCAD4] min-h-screen font-sans text-[#2c2c2c] pt-[60px]">
    <div
      class="max-w-7xl mx-auto px-6 pt-8 pb-12 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8"
    >
      <!-- Sidebar -->
      <aside>
        <h2 class="text-3xl font-bold mb-6">Product Listing</h2>
        <div class="mb-4">
          <input
            v-model="search"
            type="text"
            placeholder="Search"
            class="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <h3 class="font-semibold mb-2" aria-label="Filter by category">
            Filter by
          </h3>
          <div class="space-y-2">
            <div>
              <label class="flex items-center gap-2">
                <input type="checkbox" value="true" v-model="checkedAll" />
                All
              </label>
            </div>
            <div v-for="category in categories" :key="category.id">
              <label class="flex items-center gap-2">
                <input
                  type="checkbox"
                  :value="category"
                  v-model="selectedCategories"
                />
                {{ category }}
              </label>
            </div>
          </div>
        </div>
      </aside>

      <!-- Product Grid -->
      <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="bg-white rounded-lg p-4 shadow flex flex-col items-center cursor-pointer transition duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-[#e29396]"
            @click="router.push(`/products/${product.id}`)"
          >
            <img
              :src="`/images/products/${product.id}.jpg`"
              :alt="product.name"
              loading="lazy"
              class="w-24 h-24 object-cover mb-2"
            />
            <div class="text-center">
              <div class="font-medium">{{ product.name }}</div>
              <div class="text-sm text-gray-600">
                ${{ product.price.toFixed(2) }}
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 flex justify-end items-center space-x-1">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-3 py-1 border rounded',
              currentPage === page
                ? 'bg-[#e29396] text-white'
                : 'bg-white hover:bg-gray-100',
            ]"
          >
            {{ page }}
          </button>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProduct } from '@/stores/product';
import { storeToRefs } from 'pinia';

const router = useRouter();
const route = useRoute();
const productStore = useProduct();
const { products, categories } = storeToRefs(productStore);

const search = ref('');
const selectedCategories = ref([]);
const checkedAll = ref(true);
const currentPage = ref(1);
const pageSize = 9;

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredProducts.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / pageSize)
);

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase());
    const matchCategory = selectedCategories.value.includes(product.type);
    return matchSearch && matchCategory;
  });
});

watch(checkedAll, (val) => {
  if (val) {
    selectedCategories.value = categories.value;
  } else {
    selectedCategories.value = [];
  }
});
watch(filteredProducts, () => {
  currentPage.value = 1;
});
onMounted(async () => {
  selectedCategories.value = categories.value;
});
</script>
