<template>
  <div class="max-w-3xl mx-auto p-6 mt-[60px]">
    <h1 class="text-2xl font-bold flex items-center gap-2 mb-6">
      Shopping Cart
    </h1>
    <hr class="mb-6 color-[#9D8189]" />

    <div v-if="items.length === 0" class="text-center text-black">
      Your cart is empty. Please add some delicious cakes to your cart before
      checking out!
    </div>

    <div
      v-for="item in items"
      :key="item.id"
      class="flex items-center justify-between p-4 border rounded-lg mb-4 bg-[#FFFFFF]"
    >
      <div class="flex items-center gap-4">
        <img
          :src="`/images/products/${item.id}.jpg`"
          :alt="item.name"
          class="w-16 h-16 object-cover rounded"
        />
        <div>
          <div class="font-semibold text-lg">{{ item.name }}</div>
          <div class="text-gray-600">${{ item.price.toFixed(2) }}</div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="decreaseQuantity(item.id)"
          class="px-2 py-1 bg-gray-100 rounded"
        >
          −
        </button>
        <span class="min-w-[32px] text-center font-semibold">{{
          item.quantity
        }}</span>
        <button
          @click="increaseQuantity(item.id)"
          class="px-2 py-1 bg-gray-100 rounded"
        >
          ＋
        </button>
        <button
          @click="removeFromCart(item.id)"
          class="text-sm text-gray-500 underline ml-4"
        >
          Remove
        </button>
      </div>
    </div>

    <div class="flex justify-between items-center text-lg font-semibold mt-8">
      <span>Total:</span>
      <span>${{ totalPrice.toFixed(2) }}</span>
    </div>

    <div class="mt-6" v-if="items.length > 0">
      <button
        class="bg-[#e29396] text-white font-bold w-full py-3 rounded-full hover:bg-[#d87f83]"
        @click="router.push('/checkout')"
      >
        Checkout
      </button>
    </div>

    <div class="mt-4">
      <button
        @click="router.push('/products')"
        class="text-sm text-[#9D8189] underline hover:text-[#d87f83]"
      >
        ← Continue Shopping
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/stores/cart';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const cartStore = useCart();
const { totalPrice, items } = storeToRefs(cartStore);
const { removeFromCart } = cartStore;

const increaseQuantity = (id) => {
  const item = items.value.find((i) => i.id === id);
  if (item) item.quantity++;
};

const decreaseQuantity = (id) => {
  const item = items.value.find((i) => i.id === id);
  if (item && item.quantity > 1) item.quantity--;
};
</script>
