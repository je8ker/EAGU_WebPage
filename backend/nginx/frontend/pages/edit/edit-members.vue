<template>
  <div class="d-flex align-center justify-center">
    <v-card class="pa-4 my-4">
      <v-card-title>Edit Members Titles</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="saveAbout">
          <div v-for="(titles, index) in aboutTitles" :key="index" class="d-flex align-center mb-3">
            <v-textarea
              v-model="aboutTitles[index]"
              :label="`Title ${index + 1}`"
              outlined
              dense
              class="flex-grow-1"
              auto-grow
              rows="2"
            ></v-textarea>
            <v-btn icon color="red" @click="removeTitle(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
          <v-btn text color="green" @click="addTitle">
            <v-icon left>mdi-plus</v-icon>
            Add Title
          </v-btn>
          <v-btn type="submit" color="primary" class="mt-4">
            Save Changes
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const aboutTitles = ref([]);

onMounted(() => {
  axios.get('/api/about')
    .then(response => {
      aboutTitles.value = response.data.map(item => item.title);
    })
    .catch(error => {
      console.error('Error fetching about content:', error);
    });
});

// 새로운 제목 추가 함수
const addTitle = () => {
  aboutTitles.value.push('');
};

// 제목 삭제 함수 (최소 한 개는 남겨두도록)
const removeTitle = (index) => {
  if (aboutTitles.value.length > 1) {
    aboutTitles.value.splice(index, 1);
  } else {
    alert('At least one title is required.');
  }
};

// 수정된 제목 배열을 서버로 전송하는 함수
const saveAbout = () => {
  axios.put('/api/about', {titles: aboutTitles.value})
    .then(() => {
      alert('About titles updated successfully!');
    })
    .catch(error => {
      console.error('Error saving about content:', error);
      alert('Failed to update about titles.');
    });
};
</script>
