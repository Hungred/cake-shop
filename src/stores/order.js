import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useOrder = defineStore('order', () => {
  const orders = computed(() => {
    return [
      {
        id: '1',
        orderNumber: 'ORDER1',
        createdAt: 1746671147,
        total: 12.99,
        status: 'Delivered',
        items: [
          {
            productName: 'bread',
            quantity: 5,
            price: 5.99,
          },
        ],
      },
      {
        id: '2',
        orderNumber: 'ORDER2',
        createdAt: 1746671147,
        total: 12.99,
        status: 'Processing',
        items: [
          {
            productName: 'bread',
            quantity: 5,
            price: 5.99,
          },
        ],
      },
      {
        id: '3',
        orderNumber: 'ORDER3',
        createdAt: 1746671147,
        total: 12.99,
        status: 'Shipped',
        items: [
          {
            productName: 'bread',
            quantity: 5,
            price: 5.99,
          },
        ],
      },
    ];
  });

  return { orders };
});
