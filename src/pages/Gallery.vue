<template>
  <v-img src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex align-center justify-center fill-height">
      <h1 class="white--text">갤러리</h1>
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
