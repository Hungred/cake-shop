<template>
  <div
    class="fixed top-0 w-full z-50 bg-[#d6d6d6] shadow-md flex justify-between items-center min-h-[60px] p-4"
  >
    <div
      class="text-2xl font-bold flex items-center gap-2 cursor-pointer"
      @click="router.push('/home')"
    >
      <span>Bake It Easy</span>
      <!-- <span>{{
        isAdmin ? 'Delicious Cakes Management' : 'Delicious Cakes'
      }}</span> -->
    </div>
    <div class="flex gap-4 font-medium">
      <div class="text-gray-600 text-sm mr-2 self-center">Hi, {{}}!</div>
      <template v-if="!isAdmin">
        <RouterLink to="/cart" class="relative group hover:underline">
          Cart
          <span
            v-if="totalQuantity > 0"
            class="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2"
          >
            {{ totalQuantity }}
          </span>
          <div
            v-if="items.length"
            class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-md rounded-md p-4 z-50 text-sm text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            <div
              v-for="item in items.slice(0, 3)"
              :key="item.id"
              class="mb-2 flex items-center gap-3"
            >
              <img
                :src="`/images/products/${item.id}.jpg`"
                :alt="item.name"
                class="w-12 h-12 object-cover rounded"
              />
              <div>
                <div class="font-medium">{{ item.name }}</div>
                <div class="text-gray-500">Qty: {{ item.quantity }}</div>
              </div>
            </div>
            <div v-if="items.length > 3" class="text-gray-400 text-xs mt-2">
              ...and {{ items.length - 3 }} more
            </div>
          </div>
        </RouterLink>
      </template>
      <RouterLink v-if="isUser" to="/orders" class="hover:underline">
        Orders
      </RouterLink>
      <template v-if="isLoggedIn">
        <button @click="signOut" class="hover:underline">Sign Out</button>
      </template>
      <template v-else-if="route.path !== '/signin'">
        <RouterLink to="/signin" class="hover:underline">Sign In</RouterLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter, RouterLink, useRoute } from 'vue-router';
import { useCart } from '@/stores/cart';
import { useAuth } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const cartStore = useCart();
const { totalQuantity, items } = storeToRefs(cartStore);

const router = useRouter();
const route = useRoute();
const authStore = useAuth();
const { isAdmin, isUser, isLoggedIn } = storeToRefs(authStore);
const { clearUser } = authStore;

const signOut = () => {
  authStore.clearUser();
  router.push('/signin');
};
// const isAdmin = ref(false);
</script>
