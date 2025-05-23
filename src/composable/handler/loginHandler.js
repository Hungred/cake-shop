import { useAuth } from '@/stores/auth';
import { useCart } from '@/stores/cart';
import { useRouter } from 'vue-router';

export const useLoginHandler = () => {
  const authStore = useAuth();
  const cartStore = useCart();
  const router = useRouter();

  const handleLogin = async (payload) => {
    const data = {
      token: crypto.randomUUID(),
      id: 657,
      name: payload.name,
      email: payload.email,
      role: payload.name === 'admin' ? 'Admin' : 'User',
      lastLoginTime: Math.floor(Date.now() / 1000),
      createdAt: Math.floor(Date.now() / 1000),
    };

    localStorage.setItem('token', data.token);
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        lastLoginTime: data.lastLoginTime,
        createdAt: data.createdAt,
      })
    );

    authStore.setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role,
      lastLoginTime: data.lastLoginTime,
      createdAt: data.createdAt,
    });

    if (data.role === 'Admin') cartStore.clearCart();

    router.push(data.role === 'Admin' ? '/dashboard' : '/');
  };

  return { handleLogin };
};
