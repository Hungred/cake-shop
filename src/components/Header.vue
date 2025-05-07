<template>
  <div
    class="fixed top-0 w-full z-50 bg-[#fff0e6] shadow-md flex justify-between items-center min-h-[60px] p-4"
  >
    <div
      class="text-2xl font-bold flex items-center gap-2 cursor-pointer"
      @click="router.push(isAdmin ? '/dashboard' : '/')"
    >
      <span> Delicious Cakes</span>
      <!-- <span>{{
        isAdmin ? 'Delicious Cakes Management' : 'Delicious Cakes'
      }}</span> -->
    </div>
    <div class="flex gap-4 font-medium">
      <div class="text-gray-600 text-sm mr-2 self-center">Hi, {{}}!</div>
      <template>
        <RouterLink to="/cart" class="relative group hover:underline">
          Cart
          <span
            class="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2"
          >
            {{}}
          </span>
          <div
            class="hidden group-hover:block absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-md rounded-md p-4 z-50 text-sm text-left"
          >
            <!-- <div
              v-for="item in cartStore.items.slice(0, 3)"
              :key="item.id"
              class="mb-2 flex items-center gap-3"
            >
              <img
                :src="`/images/products/${item.imageName}`"
                :alt="item.name"
                class="w-12 h-12 object-cover rounded"
              />
              <div>
                <div class="font-medium">{{ item.name }}</div>
                <div class="text-gray-500">Qty: {{ item.quantity }}</div>
              </div>
            </div> -->
            <div class="text-gray-400 text-xs mt-2">...and {{}} more</div>
          </div>
        </RouterLink>
      </template>
      <RouterLink to="/orders" class="hover:underline"> Orders </RouterLink>
      <template>
        <button @click="signOut" class="hover:underline">Sign Out</button>
      </template>
      <template>
        <RouterLink to="/signin" class="hover:underline">Sign In</RouterLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// import { useRouter, RouterLink, useRoute } from 'vue-router';
// import { useCartStore } from '@/stores/cartStore';
// import { useAuthStore } from '@/stores/authStore';
// import { storeToRefs } from 'pinia';

// const cartStore = useCartStore();
// const authStore = useAuthStore();
// const router = useRouter();
// const route = useRoute();
// const { isAdmin, isUser } = storeToRefs(authStore);

// const signOut = () => {
//   authStore.clearUser();
//   router.push('/signin');
// };
const isAdmin = ref(false);
</script>
