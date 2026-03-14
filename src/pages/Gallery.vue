<template>
  <v-img max-height="200" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex flex-column align-center justify-center fill-height">
      <h1 class="text-white">갤러리</h1>
      <p class="text-white">EAGU의 활동사진들을 모아놓은곳입니다.</p>
    </div>
  </v-img>
  <v-row class="ma-2">
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex justify-space-around"
      cols="4"
    >
      <v-img
        src='@/assets/logo.png'
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
</template>
<script setup>
</script>
