<template>
  <v-img max-height="200" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
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
          v-for="executive in executive"
          :key="executive.title"
          class="d-flex flex"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            width="200"
            variant="plain"
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
                Name: {{ executive.name }}
              </v-card-title>
              <v-card-subtitle>
                Position: {{ executive.Position }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              Tech_Stack: {{ executive.Tech_Stack }}<br>
              Responsibilities: {{ executive.Responsibilities }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h1>개발팀</h1>
      <p>프론트엔드,백엔드,앱개발</p>
      <v-row justify="center" style="margin-top: 10px">
        <v-col
          v-for="dev in dev"
          :key="dev.title"
          class="d-flex child-flex"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            width="200"
            variant="plain"
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
                Name: {{ dev.name }}
              </v-card-title>
              <v-card-subtitle>
                Position: {{ dev.Position }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              Tech_Stack: {{ dev.Tech_Stack }}<br>
              Responsibilities: {{ dev.Responsibilities }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h1>디자인</h1>
      <p>UI/UX 및 디자인</p>
      <v-row justify="center" style="margin-top: 10px">
        <v-col
          v-for="design in design"
          :key="design.title"
          class="d-flex child-flex"
          cols="auto"
        >
          <v-card
            class="mx-auto"
            width="200"
            variant="plain"
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
                Name: {{ design.name }}
              </v-card-title>
              <v-card-subtitle>
                Position: {{ design.Position }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              Tech_Stack: {{ design.Tech_Stack }}<br>
              Responsibilities: {{ design.Responsibilities }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      executive: [
        {name: '박인범', Position: '회장', Tech_Stack: 'Dev', Responsibilities: 'Full stack'},
        // {name: 'Null', Position: '총무', Tech_Stack: 'Dev', Responsibilities: 'Full stack'},
      ],
      dev: [
        {name: '김민진', Position: '팀원', Tech_Stack: 'Dev', Responsibilities: 'Backend'},
        {name: '정서인', Position: '팀원', Tech_Stack: 'Dev', Responsibilities: 'Backend'},
        {name: '이동하', Position: '팀원', Tech_Stack: 'Dev', Responsibilities: 'Null'},
      ],
      design:
        [
          {name: '최진형', Position: '팀원', Tech_Stack: 'Design', Responsibilities: 'UI/UX'},
        ],
    }
      ;
  }
  ,
}
;
</script>
<style>
</style>
