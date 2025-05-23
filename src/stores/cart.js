import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCart = defineStore('cart', () => {
  const items = ref([]);

  const totalQuantity = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0)
  );
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  const addToCart = (product) => {
    const existing = items.value.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      items.value.push({ ...product });
    }
  };
  const removeFromCart = (id) => {
    items.value = items.value.filter((item) => item.id !== id);
  };
  const clearCart = () => {
    items.value = [];
  };

  return {
    addToCart,
    removeFromCart,
    clearCart,
    items,
    totalQuantity,
    totalPrice,
  };
});
