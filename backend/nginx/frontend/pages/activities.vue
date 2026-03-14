<template>
  <v-img :style="{height:imageHeight}" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex flex-column align-center justify-center fill-height">
      <h1 class="text-white">활동내역</h1>
      <p class="text-white">EAGU의 교내외 활동 기록입니다.</p>
    </div>
  </v-img>
  <!--페이지 최상단 부분은 계속 중복이 되면 파일 분할해서 사용-->
  <v-main>
    <v-timeline align="start" class="justify-center">
      <v-timeline-item
        v-for="(item, i) in years"
        :key="i"
        :dot-color="item.color"
        size="small"
      >
        <template #opposite>
          <div :class="`pt-1 headline font-weight-bold text-${item.color}`">
            {{ item.year }}
          </div>
        </template>
        <div>
          <div class="timeline-text text-h6">{{ item.text }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-main>
</template>
<script setup>
import {computed} from "vue";
import {useDisplay} from "vuetify";

const {smAndDown} = useDisplay()
const imageHeight = computed(() => smAndDown.value ? '150px' : '200px')

const years = [
  {
    color: 'black',
    year: '2022',
    text: '대전스타트업 스쿨 우수상\n' +
      '자율주행 자동차 코딩 경진대회 대상\n' +
      'Boot-Up 창업캠프 대상\n' +
      'START 창업경진대회 장려상\nESG 창업 아이디어 Funding School 대상'
  },
  {
    color: 'black',
    year: '2023',
    text: 'Boot-UP 창업캠프\n' +
      'START 창업경진대회 장려상\n' +
      '메이커 창업캠프'
  },
  {
    color: 'black',
    year: '2024',
    text: 'START 창업경진대회 장려상'
  }
];
</script>
<style scoped>
.timeline-text {
  white-space: pre-line;
}
</style>
