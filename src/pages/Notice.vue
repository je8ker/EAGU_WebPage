<template>
  <v-sheet
    class="d-flex bg-black align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="100%"
    width="100%"
    rounded
  >
    <div>
      <h2 :class="{
        'text-h2': !$vuetify.display.smAndDown,
        'text-h3': $vuetify.display.smAndDown,
      }"
          class="font-weight-black text-deep-purple-accent-1">공지사항</h2>
      <br>

      <div :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }"
           class="font-weight-bold mb-2 text-indigo-accent-4">
        👨🏻‍💻2024 EAGU 6기 동아리원을 모집합니다👩🏻‍💻<br></div>
      <br>
      <div
        :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2 text-cyan-lighten-3">
        🗂️모집 분야🗂<br>
      </div>
      <div
        :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2">
        프론트엔드, 백엔드, 서버 & 네트워크, 보안, Android, IOS<br>
        <br>
        🔥 이런 분들에게 추천드려요!🔥<br>
        컴퓨터 언어는 배웠지만 막상 개발을 어떻게 할지 모르는 분!<br>
        프로젝트는 하고 싶지만 막상 어떻게 팀원을 모을지 막막한분!<br>
        <br>
        자세한 내용은
        <v-btn
          :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }" class="font-weight-bold mb-2 text-red"
          variant="text"
          @click="movepage('/join-us')">가입신청
        </v-btn>
        을 확인해주세요!
      </div>
    </div>
  </v-sheet>
</template>

<script>
import router from "@/router";

export default {
  data: () => ({}),


  methods: {

    movepage(path) {
      router.push(path);
    },
  },
}
</script>

<style scoped>

</style>
