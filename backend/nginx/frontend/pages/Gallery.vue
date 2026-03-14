<template>
  <v-img :style="{height:imageHeight}" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex flex-column align-center justify-center fill-height">
      <h1 class="text-white">갤러리</h1>
      <p class="text-white">EAGU의 활동사진들을 모아놓은곳입니다.</p>
    </div>
  </v-img>
  <v-card class="mx-auto" max-width="1000">
    <v-row class="ma-2">
      <v-col
        v-for="img in images"
        :key="img.id"
        class="d-flex justify-space-around"
        cols="4"
      >
        <v-img
          :src="img.image_url"
          aspect-ratio="1"
          rounded="xl"
          class="bg-grey-darken-4"
        >
          <template v-slot:placeholder>
            <v-row
              align="center"
              class="fill-height ma-0"
              justify="center"
            >
              <v-progress-circular
                color="grey-lighten-5"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import {useDisplay} from "vuetify";
import axios from "axios";

const {smAndDown} = useDisplay()
const imageHeight = computed(() => smAndDown.value ? '150px' : '200px')
const baseURL = "http://localhost:3333"; // 올바른 URL로 수정

const images = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/image');
    console.log("API 응답 데이터:", response.data);
    images.value = Array.isArray(response.data) ? response.data.map(img => ({
      id: img.id,
      image_url: `${baseURL}${img.image_url}`
    })) : [{
      id: response.data.id,
      image_url: `${baseURL}${response.data.image_url}`
    }];
  } catch (error) {
    console.error(error);
  }
})
</script>
