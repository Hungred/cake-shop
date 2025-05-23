import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuth = defineStore('user', () => {
  const user = ref('null');

  const setUser = (userData) => {
    if (!userData) return;
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const clearUser = () => {
    user.value = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const isLoggedIn = computed(() => {
    return !!user.value;
  });
  const isAdmin = computed(() => {
    return user.value?.role === 'Admin';
  });
  const isUser = computed(() => {
    return user.value?.role === 'User';
  });

  return { user, setUser, clearUser, isLoggedIn, isAdmin, isUser };
});
