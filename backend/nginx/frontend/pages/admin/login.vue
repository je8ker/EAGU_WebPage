<template>
  <v-main>
    <div class="d-flex justify-center align-center">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        min-width="400px"
        rounded="lg"
      >
        <v-img
          class="mx-auto my-6"
          max-width="64"
          src="@/assets/logo.png"
        ></v-img>
        <h4 class="d-flex justify-center">EAGU Admin login</h4>
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-form @submit.prevent="login">
          <v-text-field
            v-model="userId"
            density="compact"
            placeholder="email"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            @keyup.enter="login"
          ></v-text-field>

          <v-text-field
            v-model="userPw"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            @keyup.enter="login"
          ></v-text-field>

          <v-btn
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            block
            type="submit"
          >
            Log In
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const userId = ref('');
const userPw = ref('');
const visible = ref(false);
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post(
      "/api/login",
      {
        userId: userId.value,
        userPw: userPw.value,
      },
      { withCredentials: true }
    );
    if (response.data.success) {
      localStorage.setItem("userId", response.data.username);
      router.push("/admin/main");
    } else {
      alert('아이디와 비밀번호가 일치하지 않습니다.');
    }
  } catch (err) {
    alert('아이디와 비밀번호가 일치하지 않습니다.');
  }
}
</script>
