<template>
  <app>
    <v-app-bar height="80" app :style="{ backgroundColor: backgroundColor }">
      <v-row align="center">
        <v-col align="start"></v-col>
        <v-col align="center">
          <SvgIcon :fill="none" height="64" width="64"/>
        </v-col>
        <!--      <v-app-bar-title :style="{ color: titleColor }">EAGU</v-app-bar-title>-->
        <v-col align="end">
          <v-btn size="x-large" color="black" icon @click.stop="drawer = !drawer">
            <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      <v-list
        :items="items"
      ></v-list>
    </v-navigation-drawer>
  </app>
</template>

<script>
import SvgIcon from '@/assets/eagu_logo.svg';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: 'about',
          value: 'about',
        },
        {
          title: 'Members',
          value: 'Members',
        },
        {
          title: 'Events',
          value: 'Events',
        },
        {
          title: 'Resources',
          value: 'Resources',
        },
        {
          title: 'Blog',
          value: 'Blog',
        },
        {
          title: 'Gallery',
          value: 'Gallery',
        },
        {
          title: 'Join Us',
          value: 'Join Us',
        },
        {
          title: 'Contact',
          value: 'Contact',
        }, {
          title: 'FAQ',
          value: 'FAQ',
        },
        {
          title: 'Forum',
          value: 'Forum',
        },
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
    }
  }
};
</script>

<style>
.v-app-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 다른 콘텐츠 위에 위치하도록 설정 */
}

v-navigation-drawer {
  position: fixed;
  top: 0;
  z-index: 100;
  transition: transform 0.5s ease;
}
</style>
