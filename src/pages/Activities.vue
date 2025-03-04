<template>
  <v-img src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex align-center justify-center fill-height">
      <h1 class="white--text">활동내역</h1>
    </div>
  </v-img>
  <div class="d-flex justify-center align-center">
    <div data-aos="fade-up" data-aos-duration="1000">
      <br>
      <div
        :class="{
      'text-h5': !$vuetify.display.smAndDown,
      'text-h6': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2">
        2022<br>
        <v-divider class="border-opacity-50" color="white"/>
        대전스타트업 스쿨 우수상<br>
        자율주행 자동차 코딩 경진대회 대상<br>
        Boot-Up 창업캠프 대상<br>
        START 창업경진대회 장려상<br>
        ESG 창업 아이디어 Funding School 대상<br>
        <br>2023<br>
        <v-divider class="border-opacity-50" color="white"/>
        Boot-UP 창업캠프<br>
        START 창업경진대회 장려상<br>
        메이커 창업캠프<br>
        <br>2024<br>
        <v-divider class="border-opacity-50" color="white"/>
        START 창업경진대회 장려상<br>
        <br><br>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>


