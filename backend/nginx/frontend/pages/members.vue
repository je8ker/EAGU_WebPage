<template>
  <v-img :style="{height:imageHeight}" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex flex-column align-center justify-center fill-height">
      <h1 class="text-white">조직도</h1>
      <p class="text-white">EAGU의 회원들을 소개합니다.</p>
    </div>
  </v-img>
  <v-container data-aos="fade-up" data-aos-duration="1000">
    <div align="center">
      <h1>임원진</h1>
      <p>동아리 총괄 운영 및 기획</p>
      <v-row justify="center" style="margin-top: 10px">
        <v-col
          v-for="executives in executive"
          :key="executives.title"
          class="d-flex flex"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            width="200"
            hover
          >
            <v-img
              src='@/assets/logo.png'
              width="100%"
              aspect-ratio="1/1"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              cover
            >
            </v-img>
            <v-card-item>
              <v-card-title>
                Name: {{ executives.name }}
              </v-card-title>
              <v-card-subtitle>
                Position: {{ executives.Position }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              Tech_Stack: {{ executives.Tech_Stack }}<br>
              Responsibilities: {{ executives.Responsibilities }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h1>개발팀</h1>
      <p>프론트엔드,백엔드,앱개발</p>
      <v-row justify="center" style="margin-top: 10px">
        <v-col
          v-for="devs in dev"
          :key="devs.name"
          class="d-flex child-flex"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            width="200"
            hover
          >
            <v-img
              src='@/assets/logo.png'
              width="100%"
              aspect-ratio="1/1"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              cover
            >
            </v-img>
            <v-card-item>
              <v-card-title>
                Name: {{ devs.name }}
              </v-card-title>
              <v-card-subtitle>
                Position: {{ devs.Position }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              Tech_Stack: {{ devs.Tech_Stack }}<br>
              Responsibilities: {{ devs.Responsibilities }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h1>디자인</h1>
      <p>UI/UX 및 디자인</p>
      <v-row justify="center" style="margin-top: 10px">
        <v-col
          v-for="designs in design"
          :key="designs.name"
          class="d-flex child-flex"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            width="200"
            hover
          >
            <v-img
              src='@/assets/logo.png'
              width="100%"
              aspect-ratio="1/1"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              cover
            >
            </v-img>
            <v-card-item>
              <v-card-title>
                Name: {{ designs.name }}
              </v-card-title>
              <v-card-subtitle>
                Position: {{ designs.Position }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              Tech_Stack: {{ designs.Tech_Stack }}<br>
              Responsibilities: {{ designs.Responsibilities }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import {computed} from "vue";
import {useDisplay} from "vuetify";

const {smAndDown} = useDisplay()
const imageHeight = computed(() => smAndDown.value ? '150px' : '200px')

const executive = [
  {name: '박인범', Position: '회장', Tech_Stack: 'Dev', Responsibilities: 'Full stack'},
  // {name: 'Null', Position: '총무', Tech_Stack: 'Dev', Responsibilities: 'Full stack'},
];
const dev = [
  {name: '김민진', Position: '팀원', Tech_Stack: 'Dev', Responsibilities: 'Backend'},
  {name: '정서인', Position: '팀원', Tech_Stack: 'Dev', Responsibilities: 'Backend'},
  {name: '이동하', Position: '팀원', Tech_Stack: 'Dev', Responsibilities: 'Null'}];

const design = [{name: '최진형', Position: '팀원', Tech_Stack: 'Design', Responsibilities: 'UI/UX'},];
</script>
<style>
</style>
