<template>
  <v-sheet
    class="d-flex bg-black align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="100%"
    width="100%"
    rounded
  >
    <div>
      <div
        style="margin-top: 20px"
        :class="{'text-h3 font-weight-black':$vuetify.display.smAndDown,
        'text-h2 font-weight-black': !$vuetify.display.smAndDown}"
        class="color1"
      >공지사항
      </div>
      <br>

      <div
        :class="{'text-h5 font-weight-black':$vuetify.display.smAndDown,
        'text-h4 font-weight-black': !$vuetify.display.smAndDown}"
        class="font-weight-bold mb-2 color2">
        EAGU 6기 동아리원을 모집합니다<br></div>
      <br>
      <div
        :class="{'text-h5 font-weight-black':$vuetify.display.smAndDown,
        'text-h4 font-weight-black': !$vuetify.display.smAndDown}"
        class="font-weight-bold mb-2 color3">
        모집 분야<br>
      </div>
      <div
        :class="{'text-h6 font-weight-bold':$vuetify.display.smAndDown,
        'text-h5 font-weight-bold': !$vuetify.display.smAndDown}">
        프론트엔드, 백엔드, 서버 & 네트워크,<br>
        보안, Android, iOS<br>
      </div>

      <div style="margin-bottom: 20px"
           :class="{'text-h6 font-weight-bold':$vuetify.display.smAndDown,
        'text-h5 font-weight-bold': !$vuetify.display.smAndDown}">
        <br>
        <div v-if="$vuetify.display.smAndDown">
          이런 분들에게 추천드려요!<br>
          컴퓨터 언어는 배웠지만 <br>
          개발을 어떻게 할지 모르는 분!<br>
          프로젝트는 하고 싶지만<br>
          어떻게 팀원을 모을지 막막한분!
        </div>
        <div v-else>
          이런 분들에게 추천드려요!<br>
          컴퓨터 언어는 배웠지만 개발을 어떻게 할지 모르는 분!<br>
          프로젝트는 하고 싶지만 어떻게 팀원을 모을지 막막한분!
        </div>
        <br>
        자세한 내용은
        <button
          @click="movepage('/join-us')">
          가입신청
        </button>
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

span {
  display: inline;
}

button {
  color: red;
}

.color1 {
  color: #2196F3;
}

.color2 {
  color: #FF9800;
}

.color3 {
  color: #4CAF50;
}

.color4 {
  color: #F44336;
}
</style>
