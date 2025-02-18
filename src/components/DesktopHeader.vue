<template>
  <v-app-bar height="68" app :style="{ backgroundColor: backgroundColor }">
    <svg-icon class="svgicon" height="64" width="64" @click="movepage('/')"/>
    <v-app-bar-title style="color: black">EAGU</v-app-bar-title>
      <v-btn text v-for="item in items" :key="item.title" style="color: black" @click="movepage(item.path)">
        {{ item.title }}
      </v-btn>
<!--      <v-btn size="x-large" color="black" icon="" @click.stop="drawer = !drawer">-->
<!--        <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>-->
<!--      </v-btn>-->
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

<script>
import SvgIcon from '@/assets/eagu_logo.svg';
import router from "@/router";

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {title: 'About', path: '/about'},
        {title: 'Activities', path: '/activities'},
        {title: 'Benefits', path: '/benefits'},
        {title: 'Members', path: '/members'},
        {title: 'Join Us', path: '/join-us'},
        {title: 'Gallery', path: '/gallery'},
        // {title: 'Community', path: '/community'},
        {title: 'Notice', path: '/notice'},
      ],
      initialScrollPosition: 0,
      scrollThreshold: 500, // 스크롤 임계값 (SVG 색상이 변경되는 지점)
      maxColorValue: 255,
      svgColor: 'black', // SVG 초기 색상 설정
      backgroundColor: 'white', // 페이지 배경색 초기 설정
      titleColor: 'black' // 글자 색상 설정
    };
  },
  mounted() {
    this.initialScrollPosition = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
    this.updateColors(); // 페이지 로드 시 색상 업데이트
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.updateColors();
    },
    updateColors() {
      const scrollPosition = window.scrollY;
      const scrollFraction = scrollPosition / this.scrollThreshold;

      // 페이지의 배경색에 따라 SVG 색상을 조정
      if (this.backgroundColor === 'black') {
        const invertedColorValue = Math.round(this.maxColorValue * scrollFraction);
        this.svgColor = `rgb(${invertedColorValue}, ${invertedColorValue}, ${invertedColorValue})`;
      } else {
        // 기본적으로 하얀색을 사용
        this.svgColor = 'white';
      }
    },
    movepage(path) {
      router.push(path);
    },
    closelist() {
      this.movepage('/');
      this.drawer = false;
    }
  }
};
</script>

<style>
.svgicon {
  cursor: pointer;
  padding-left: 10px;
}
</style>
