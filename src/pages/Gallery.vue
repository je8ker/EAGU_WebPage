<template>
  <h2 style="padding-top: 10px" class="text-center text-h2 font-weight-black text-green-accent-3
">갤러리</h2>
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
        class="bg-grey-lighten-2"
        cover
      >
        작업중
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
