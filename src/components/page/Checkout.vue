<template>
  <div
    class="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[60px]"
  >
    <!-- 左側表單 -->
    <form class="bg-white p-6 rounded-lg shadow" @submit.prevent="placeOrder">
      <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email"
        class="mb-4"
        :class="inputStyle"
      />

      <!-- 新增 Phone 欄位 -->
      <input
        v-model="formData.phone"
        type="tel"
        inputmode="tel"
        placeholder="Phone Number"
        class="mb-3"
        :class="inputStyle"
      />

      <h2 class="text-xl font-semibold mb-4">Shipping Address</h2>
      <input
        v-model="formData.name"
        type="text"
        placeholder="Full Name"
        class="mb-3"
        :class="inputStyle"
      />
      <input
        v-model="formData.address"
        type="text"
        placeholder="Address"
        class="mb-3"
        :class="inputStyle"
      />
      <input
        v-model="formData.postalCode"
        type="text"
        placeholder="Postal Code"
        class="mb-6"
        :class="inputStyle"
      />

      <button
        type="submit"
        class="w-full py-3 bg-neutral-800 text-white font-bold rounded hover:bg-neutral-700"
      >
        Place Order
      </button>
    </form>

    <!-- 右側訂單摘要 -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-6">Order Summary</h2>
      <div
        v-for="item in items"
        :key="item.id"
        class="flex items-center justify-between mb-4"
      >
        <div class="flex items-center gap-3">
          <img
            :src="`/images/products/${item.id}.jpg`"
            :alt="item.name"
            class="w-12 h-12 rounded object-cover"
          />
          <div>
            <p class="font-medium">{{ item.name }}</p>
            <p class="text-sm text-gray-500">Qty. {{ item.quantity }}</p>
          </div>
        </div>
        <p class="font-semibold">
          ${{ (item.price * item.quantity).toFixed(2) }}
        </p>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>${{ totalPrice.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '@/stores/cart';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const cartStore = useCart();
const { totalPrice, items } = storeToRefs(cartStore);
const { clearCart } = cartStore;

const formData = reactive({
  email: '',
  phone: '',
  name: '',
  address: '',
  postalCode: '',
});

const inputStyle =
  'w-full border rounded px-3 py-2 border-gray-300 focus:outline-none focus:ring focus:ring-[#e29396]';

const placeOrder = async () => {
  if (
    !formData.email ||
    !formData.name ||
    !formData.phone ||
    !formData.address ||
    !formData.postalCode
  ) {
    return;
  }
};
</script>
