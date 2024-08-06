<template>
  <v-sheet height="100%" class="bg-black" rounded>
    <div class="MainTitle">
      게시판
    </div>
    <v-card class="mx-auto px-6 py-8" max-width="90%" max-height="90%">
      <v-data-table
        v-if="posts && posts.length"
        :items="posts"
        :headers="headers"
        :loading="loading"
      ></v-data-table>
      <div v-else-if="loading">데이터를 불러오는 중...</div>
      <div v-else>데이터가 없습니다.</div>
      <div align="end">
        <v-btn @click="movepage('/content')">글쓰기버튼</v-btn>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import router from "@/router";
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      headers: [
        {title: 'ID', key: 'id'},
        {title: 'Title', key: 'title'},
        {title: 'Name', key: 'name'},
        {title: 'Content', key: 'content'},
        {title: 'Date', key: 'created_at'}
      ],
      loading: false,
      error: null
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    async getContent() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/content', {
          headers: {
            'Accept': 'application/json'
          }
        });
        console.log('서버 응답:', response);
        if (typeof response.data === 'string' && response.data.includes('<!DOCTYPE html>')) {
          throw new Error('서버가 HTML을 반환했습니다.');
        }
        this.posts = Array.isArray(response.data) ? response.data : [response.data];
      } catch (error) {
        console.error('Error:', error.message);
        console.error('Response:', error.response ? error.response.data : 'No response');
        this.error = '데이터를 불러오는 데 실패했습니다.';
      } finally {
        this.loading = false;
      }
    },
    movepage(path) {
      router.push(path);
    },
  },
}
;
</script>

<style>
.MainTitle {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  justify-content: center;
}
</style>
