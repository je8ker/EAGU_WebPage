<template>
  <h1>admin page</h1>
  <h3 v-if="cookie">
    {{ userId }}님
  </h3>
  <button @click="Logout">로그아웃</button>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue';
import axios from "axios";
import {useAuthStore} from "nginx/frontend/stores/auth";
import {useRouter} from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const Logout = async () => {
  try {
    await axios.post("/api/logout")
    router.push("/admin/login")
  } catch (error) {
    console.log(error);
  }
}
const checkTokenValidity = async () => {
  try {
    const response = await axios.get('/api/auth-check', {withCredentials: true});
    if (response.data.success && response.data.user) {
      authStore.setAuthenticated(true);
    } else {
      authStore.setAuthenticated(false);
      router.push('/admin/login');
    }
  } catch (error) {
    console.error("토큰 유효성 검사 에러:", error);
    authStore.setAuthenticated(false);
    router.push('/admin/login');
  }
};

let intervaIld = null;

onMounted(() => {
  checkTokenValidity();
  intervaIld = setInterval(checkTokenValidity, 1000*60);
})
onUnmounted(() => {
  clearInterval(intervaIld);
})
const cookie = computed(() => {
  return document.cookie.split(';').some(cookie => cookie.trim().startsWith('authToken='));
})
const userId = ref(localStorage.getItem('userId') || '');

</script>

<style scoped>

</style>
