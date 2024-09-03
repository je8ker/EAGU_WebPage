<template>
  <v-sheet
    class="d-flex bg-black align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="100%"
    width="100%"
    rounded
  >
    <div>
      <h2
        :class="{
        'text-h2 font-weight-black text-purple': !$vuetify.display.smAndDown,
        'text-h3 font-weight-black text-purple': $vuetify.display.smAndDown,}">
        활동내역</h2>
      <br>
      <div
        :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2">
        2022<br>
        대전스타트업 스쿨 우수상<br>
        자율주행 자동차 코딩 경진대회 대상<br>
        Boot-Up 창업캠프 대상<br>
        START 창업경진대회 장려상<br>
        ESG 창업 아이디어 Funding School 대상<br>
        <br>2023<br>
        Boot-UP 창업캠프<br>
        START 창업경진대회 장려상<br>
        메이커 창업캠프<br>
        <br>2024<br>
        START 창업경진대회 장려상<br>
        <br><br>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>

</script>

<style scoped>
h2{
  margin-top: 20px;
}
</style>


