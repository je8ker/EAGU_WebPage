<template>
  <Transition name="fade">
    <svg_anime v-if="showSvg"/>
  </Transition>
  <Transition name="fade" appear>
      <Main v-if="showText"/>
  </Transition>
</template>


<script setup>
import {ref, onMounted} from "vue";
import Svg_anime from "@/components/svg_anime.vue";
import Main from "./main.vue";

const showSvg = ref(true);
const showText = ref(false);

onMounted(() => {
  setTimeout(() => {
    showSvg.value = false;
    setTimeout(() => {
      showText.value = true;
    }, 700);
  }, 3000);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-container {
  /* 필요한 스타일 적용 (예: 중앙 정렬 등) */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
