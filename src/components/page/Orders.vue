<template>
  <div
    class="min-h-screen bg-[#FFCAD4] py-12 px-4 flex justify-center mt-[60px]"
  >
    <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Orders</h1>
      <table class="w-full text-left text-sm">
        <thead class="border-b text-gray-600">
          <tr>
            <th class="pb-2">Order Number</th>
            <th class="pb-2">Date</th>
            <th class="pb-2">Total</th>
            <th class="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="orders?.length === 0">
            <td colspan="4" class="text-center py-8 text-gray-400 italic">
              You have no orders yet.
            </td>
          </tr>
          <template v-for="order in orders" :key="order.id">
            <tr
              class="border-b last:border-0 cursor-pointer hover:bg-[#f8f4ef] transition"
              @click="toggleRow(order.id)"
            >
              <td class="py-3 font-medium">#{{ order.orderNumber }}</td>
              <td class="py-3">{{ $f.dateFormat(order.createdAt) }}</td>
              <td class="py-3">${{ order.total.toFixed(2) }}</td>
              <td class="py-3">
                <span
                  :class="`px-2 py-1 rounded-full text-xs font-semibold ${statusClass(
                    order.status
                  )}`"
                >
                  {{ order.status }}
                </span>
              </td>
            </tr>
            <tr
              v-if="expandedRows.includes(order.id)"
              :key="`details-${order.id}`"
              class="bg-[#fdf9f5]"
            >
              <td colspan="4" class="px-6 py-4 border-l-4 border-[#d9a074]">
                <ul
                  class="space-y-1 text-sm text-gray-700"
                  v-if="order.items?.length"
                >
                  <li v-for="(item, index) in order.items" :key="index">
                    • {{ item.productName }} × {{ item.quantity }} —
                    <span class="text-gray-500"
                      >${{ item.price.toFixed(2) }}</span
                    >
                  </li>
                </ul>
                <p v-else class="text-sm text-gray-500">No items found.</p>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="mt-6 flex justify-center">
        <RouterLink
          to="/"
          class="bg-[#e29396] text-white px-4 py-2 rounded hover:bg-[#d87f83] transition-colors"
        >
          Back to Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrder } from '@/stores/order';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const orderStore = useOrder();
const { orders } = storeToRefs(orderStore);
const statusClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'Shipped':
      return 'bg-blue-100 text-blue-800';
    case 'Processing':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const expandedRows = ref([]);

const toggleRow = (orderId) => {
  const index = expandedRows.value.indexOf(orderId);
  if (index > -1) {
    expandedRows.value.splice(index, 1);
  } else {
    expandedRows.value.push(orderId);
  }
};
</script>
