<template>
  <v-app-bar height="68" app :style="{ backgroundColor: backgroundColor }">
    <div class="d-flex align-center cursor-pointer" @click="movepage('/')">
      <svg-icon class="svgicon" height="50" width="50">EAGU</svg-icon>
      <div class="d-flex flex-column pa-2">
        <p class="text-start font-weight-bold headertitle">EAGU</p>
        <p class="headersuptitle font-weight-bold">Daejeon University Programing Club</p>
      </div>
    </div>
    <v-app-bar-title/>
    <v-btn size="x-large" color="black" icon="" @click.stop="drawer = !drawer">
      <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="movepage(item.path)"
      >
        <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import router from "nginx/frontend/router";
import SvgIcon from '@/assets/eagu_logo.svg';


// 상태 변수들
const drawer = ref(false);
// const group = ref(null);
const items = [
  {title: 'About', path: '/about'},
  {title: 'Activities', path: '/activities'},
  // {title: 'Benefits', path: '/benefits'},
  {title: 'Members', path: '/members'},
  // {title: 'Join Us', path: '/join-us'},
  {title: 'Gallery', path: '/gallery'},
  // { title: 'Community', path: '/community' },
  {title: 'Notice', path: '/notice'},
  // {title: 'admin', path: '/admin/login'},
];

const initialScrollPosition = ref(0);
const scrollThreshold = 500; // 스크롤 임계값 (SVG 색상이 변경되는 지점)
const maxColorValue = 255;
const svgColor = ref('black'); // SVG 초기 색상 설정
const backgroundColor = ref('white'); // 페이지 배경색 초기 설정
// const titleColor = ref('black'); // 글자 색상 설정

// SVG 색상을 업데이트하는 함수
function updateColors() {
  const scrollPosition = window.scrollY;
  const scrollFraction = scrollPosition / scrollThreshold;
  if (backgroundColor.value === 'black') {
    const invertedColorValue = Math.round(maxColorValue * scrollFraction);
    svgColor.value = `rgb(${invertedColorValue}, ${invertedColorValue}, ${invertedColorValue})`;
  } else {
    svgColor.value = 'white';
  }
}

// 스크롤 이벤트 핸들러
function handleScroll() {
  updateColors();
}

// 페이지 이동 함수
function movepage(path) {
  router.push(path);
}

// 라이프사이클 훅
onMounted(() => {
  initialScrollPosition.value = window.scrollY;
  window.addEventListener('scroll', handleScroll);
  updateColors(); // 페이지 로드 시 색상 업데이트
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.svgicon {
  padding-left: 10px;
}

.headertitle {
  font-size: 20px;
  color: black;
}

.headersuptitle {
  font-size: 10px;
  color: black;
}
</style>
