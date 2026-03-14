<template>
  <v-container class="mx-auto">
    <h2>갤러리 이미지 업로드</h2>
    <form @submit.prevent="uploadImage">
      <v-file-input type="file"
                    label="Image Input"
                    prepend-icon="mdi-camera"
                    @change="handleFileChange"
                    accept="image/*"/>
      <v-btn variant="outlined" type="submit">업로드</v-btn>
    </form>
    <div v-if="previewUrl">
      <h3>미리보기:</h3>
      <img :src="previewUrl" alt="이미지 미리보기" style="max-width: 300px;"/>
    </div>
  </v-container>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

const file = ref(null);
const previewUrl = ref(null);

function handleFileChange(event) {
  file.value = event.target.files[0];
  if (file.value) {
    previewUrl.value = URL.createObjectURL(file.value);
  } else {
    previewUrl.value = null;
  }
}

async function uploadImage() {
  if (!file.value) {
    return alert("업로드할 이미지를 선택해주세요.");
  }

  const formData = new FormData();
  formData.append("image", file.value);

  try {
    await axios.post('/api/image/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    alert("업로드 성공");
    // 필요에 따라 업로드 후 상태 갱신 처리
  } catch (error) {
    console.error("업로드 실패", error);
    alert("업로드에 실패했습니다.");
  }
}
</script>
