<template>
  <v-img src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex align-center justify-center fill-height">
      <h1 class="white--text">회원혜택</h1>
    </div>
  </v-img>
  <div class="d-flex justify-center align-center marginside">
    <div data-aos="fade-up" data-aos-duration="1000">
      <br>
      <div
        :class="{
      'text-h5': !$vuetify.display.smAndDown,
      'text-h6': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2">
        <p>동아리실 제공<br>(있을꺼 다있음 👍)<br><br></p>
        <p>간식 제공<br>(이거 없으면 코딩 못함 아무튼 그럼 🍭)<br><br></p>
        <p>카페인 제공<br>(개발할때 필수품은 노트북이 아닌 ☕️)<br><br></p>
        <p>겨울에는 귤을 지급한다!<br>(감귤농장 지배인 🍊)<br><br></p>
        <br><br>
      </div>
    </div>
  </div>
</template>


<script setup>

</script>


<style scoped>
.marginside {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
