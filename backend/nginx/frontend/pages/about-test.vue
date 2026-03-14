<template>
  <div class="container">
    <h1
      v-for="(section, index) in sections"
      :key="index"
      class="d-flex justify-center align-center section"
      :style="{ transform: `scale(${section.scale})`, color: section.color, backgroundColor: section.bgColor, fontSize: computedFontSzie }"
    >
      <template v-for="(line, lineIndex) in section.title" :key="lineIndex">
        {{ line }}
        <br v-if="lineIndex < section.title.length - 1">
      </template>
    </h1>
  </div>
</template>


<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import {useDisplay} from "vuetify";
import axios from "axios";

const {xs, sm, md, lg, xl} = useDisplay();
//화면 넓이에 따라 폰트 사이즈 변경
const computedFontSzie = computed(() => {
  if (xs.value) return '7vw';
  if (sm.value) return '6vw';
  if (md.value) return '5vw';
  if (lg.value) return '4vw';
  if (xl.value) return '3vw';
  return '3vw';
})
const sections = ref([]);

const containerBgColor = ref('black'); // 초기 배경 색상 설정

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  let newBgColor = 'black'; // 기본 색상

  sections.value.forEach((section, index) => {
    const sectionTop = index * windowHeight;
    const sectionBottom = sectionTop + windowHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const scrollFraction = (scrollPosition - sectionTop) / windowHeight;
      const scaleValue = 1 - scrollFraction / 1.5;
      sections.value[index] = {...section, scale: Math.max(scaleValue, 0.5)};

      // 현재 섹션의 배경색을 컨테이너 배경색으로 설정
      newBgColor = section.bgColor;
    } else {
      sections.value[index] = {...section, scale: 1};
    }
  });

  containerBgColor.value = newBgColor; // 컨테이너 배경 색상 업데이트
};

onMounted(() => {
  axios.get('api/about').then((response) => {
    sections.value = response.data.map(section => ({
      ...section,
      title: section.title.split('\n'),
    }));
  }).catch((error) => {
    console.log('Error fetching about sections:', error);
    sections.value = [
      {title: ['안녕하세요', 'EAGU입니다.'], scale: 1},
      {title: ['안녕하세요', 'EAGU입니다.']},
      {title: ['안녕하세요', 'EAGU입니다.']},
      {title: ['안녕하세요', 'EAGU입니다.']}
    ];
  })
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>

body {
  margin: 0;
}

.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-out;
  text-align: left;
  padding: 0 20px;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear alternate infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
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

.block {
  pointer-events: none;
  position: relative;
  width: 128px;
  height: 128px;
  margin: 1px;
  font-size: 12px;
  color: #2c3e50;
}
</style>
