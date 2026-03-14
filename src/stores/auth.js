// src/stores/auth.js
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: Cookies.get('authToken') || null,
    authenticated: !!Cookies.get('authToken'),
  }),
  getters: {
    isAuthenticated: (state) => state.authenticated,
  },
  actions: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    setToken(newToken) {
      this.token = newToken;
      Cookies.set('authToken', newToken, {
        httpOnly: false, // 테스트용, 실제 운영시에는 true 권장
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
      this.authenticated = true;
    },
    clearToken() {
      this.token = null;
      Cookies.remove('authToken');
      this.authenticated = false;
    },
    syncToken() {
      this.token = Cookies.get('authToken') || null;
      this.authenticated = !!this.token;
    },
  },
});
