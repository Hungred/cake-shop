import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useProduct = defineStore('product', () => {
  const products = computed(() => {
    return [
      {
        id: '001',
        name: 'cheese cake',
        type: 'cake',
        createdAt: 1746671147,
        price: 12.99,
        description:
          'Enjoy it plain or with your favorite toppings like fresh berries, chocolate drizzle, or caramel sauce.',
        ingredients:
          '1 ½ cups graham cracker crumbs, ¼ cup granulated sugar, ½ cup unsalted butter (melted)',
      },
      {
        id: '002',
        name: 'bread',
        type: 'bread',
        createdAt: 1746671150,
        price: 5.99,
      },
      {
        id: '003',
        name: 'apple juice',
        type: 'drink',
        createdAt: 1746671146,
        price: 3.5,
      },
      {
        id: '004',
        name: 'macaron',
        type: 'cake',
        createdAt: 1746671143,
        price: 7.0,
      },
      {
        id: '005',
        name: 'pancake',
        type: 'cake',
        createdAt: 1746671166,
        price: 8.5,
      },
      {
        id: '006',
        name: 'pie',
        type: 'cake',
        createdAt: 1746671155,
        price: 9.0,
      },
      {
        id: '007',
        name: 'chocolate roll',
        type: 'cake roll',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '008',
        name: 'strawberry roll',
        type: 'cake roll',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '009',
        name: 'cake roll',
        type: 'cake roll',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '010',
        name: 'chocolate cookie',
        type: 'cookie',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '011',
        name: 'berry cookie',
        type: 'cookie',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '012',
        name: 'marshmallow cookies',
        type: 'cookie',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '013',
        name: 'lemon juice',
        type: 'drink',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '014',
        name: 'cream cake',
        type: 'cake',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '015',
        name: 'chocolate cream cake',
        type: 'cake',
        createdAt: 1746671156,
        price: 9.0,
      },
      {
        id: '016',
        name: 'black tea',
        type: 'juice',
        createdAt: 1746671156,
        price: 9.0,
      },
    ];
  });
  const categories = computed(() => {
    return [...new Set(products.value.map((item) => item.type))];
  });

  return { products, categories };
});
