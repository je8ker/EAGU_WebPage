<template>
  <v-img :style="{height:imageHeight}" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex flex-column align-center justify-center fill-height">
      <h1 class="text-white">소개</h1>
      <p class="text-white">EAGU에 대해 소개합니다.</p>
    </div>
  </v-img>
  <v-main>
    <div class="d-flex justify-center align-center mx-4">
      <div data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center font-weight-bold fs30 my30">인사말</div>
        <div class="text-center font-weight-bold font-italic fs30">
          { Explore , Advance, Grow, Unite }
        </div>
        <div class="text-start">
          <p class="wrapper">
            EAGU는 학교에서 컴퓨터 언어의 기본적인 이론을 배웠지만, 실제 개발 경험을 쌓지 못해 어려움을 겪는 학생들을 위한 모임입니다.
            이 동아리는 단순히 코딩 문법을 익히는 것을 넘어, 실제 프로젝트를 통해 문제를 해결하며 개발 역량을 키우고자 합니다.
          </p>
          <p class="wrapper">
            멤버들은 팀을 이루어 실생활의 문제를 개발 프로젝트로 전환하고, 프로젝트 기반 학습을 통해 실무 경험을 쌓으며, 코드 리뷰와 워크샵,
            세미나를 통해 최신 개발 트렌드와 노하우를 공유합니다. 이를 통해 이론에서 실전으로의 전환을 경험하고,
            협업을 통한 지식 보완과 커뮤니케이션 강화로 미래의 개발자로서 자신감을 갖추게 하는 것이 EAGU의 목표입니다.
          </p>
        </div>
        <div class="d-flex flex-column align-center justify-center fill-height text-center">
          <p class="title mt30">"탐구"</p>
          <p>
            우리는 항상 새로운 기술에 도전하고, 문제점을 탐구하여 창의적인 해결책을 모색합니다.
          </p>
        </div>
        <div class="d-flex flex-column align-center justify-center fill-height">
          <p class="title mt30">"발전"</p>
          <p>
            프로젝트를 통해 이론을 실전에 적용하며, 각자의 기술과 역량을 지속적으로 향상시켜 나아갑니다.
          </p>
        </div>
        <div class="d-flex flex-column align-center justify-center fill-height">
          <p class="title mt30">"성장"</p>
          <p>
            지속적인 학습과 경험을 통해 개인의 역량은 물론, 팀 전체가 함께 성장합니다.
          </p>
        </div>
        <div class="d-flex flex-column align-center justify-center fill-height">
          <p class="title mt30">"협력"</p>
          <p>
            각자의 장점을 살린 협력으로, 함께 문제를 해결하고 더 큰 성과를 이루어냅니다.</p>
        </div>

        <v-card class="my30">
          <v-carousel v-model="carouselIndex" hide-delimiters>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
            </v-carousel-item>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-title class="text-center"> {{ carouselText }}
          </v-card-title>
        </v-card>
      </div>
    </div>
  </v-main>
</template>

<script setup>
import {ref, computed} from "vue";
import {useDisplay} from "vuetify";

const {smAndDown} = useDisplay()
const imageHeight = computed(() => smAndDown.value ? '150px' : '200px')

const carouselIndex = ref(0);
const texts = [
  '에듀파크',
  '동아리실 외부',
  '동아리실 내부',
]
const carouselText = computed(() => texts[carouselIndex.value] || '기본 텍스트');
</script>

<style scoped>
.my30 {
  margin-top: 30px;
  margin-bottom: 30px;
}

.mt30 {
  margin-top: 30px;
}

.fs30 {
  font-size: 30px;
}

.mb50 {
  margin-bottom: 50px;
}

.wrapper {
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 800px;
  text-align: start;
  font-size: 18px;
}

.title {
  font-size: 35px;
  font-weight: bold;
}
</style>


