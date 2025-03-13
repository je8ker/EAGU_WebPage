<template>
  <v-main class="section-container">
    <v-container>
      <v-row align="center" justify="center">
        <!-- 텍스트 영역 -->
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <div class="font-weight-bold text-lg-h2 text-md-h3 text-sm-h3 text-h4 mb-4">
            코딩의 즐거움을 함께<br/>나누는 공간
          </div>
          <p class="body-1 mb-4 text-h6" style="max-width: 500px;">
            프로그래밍 동아리 EAGU에서 함께 <br/>성장하고 배우며 미래를 준비하세요.
          </p>
        </v-col>
        <!-- 이미지 영역 -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-img
            :aspect-ratio="1"
            src="https://i.pinimg.com/736x/d6/2f/76/d62f762d08ecb0456e9f46967ba34230.jpg"
            max-width="500"
            cover
          ></v-img>
        </v-col>
      </v-row>
      <!--섹션2-->
      <v-row align="center" justify="center">
        <v-col cols="12" xl="6" lg="8" sm="10" class="d-flex flex-column justify-center">
          <div>
            <div class="my-2 d-flex justify-center align-center text-center">
              <v-card rounded="lg" width="150" variant="tonal" justify="center" align="center">
                <v-icon icon="mdi-code-tags"></v-icon>
                <span class="ml-2">EAGU 소개</span>
              </v-card>
            </div>
            <div class="text-center font-weight-bold text-lg-h2 text-md-h3 text-sm-h3 text-h4 mb-4">
              EAGU는 어떤 동아리인가요?
            </div>
            <p class="text-center text-h6">
              2022년도에 만들어진 EAGU는 프로그래밍에 관심이 있는 사람들이 모여서 만들어진 동아리에요<br/>
              SOMA, SSAPY, 공모전, 대회, 대학원, 포트폴리오라는 목표를 위해 창설되었어요!
            </p>
          </div>
          <v-row class="mt-4" align="center" justify="center">
            <v-col cols="12" md="6">
              <v-row class="flex-column">
                <v-col class="d-flex align-center justify-start">
                  <v-icon color="info" icon="mdi-account-multiple"></v-icon>
                  <h2 class="ml-2">다양한 구성원</h2>
                </v-col>
              </v-row>
              <p>다양한 전공의 학생들이 모여 서로의 지식을 공유합니다.</p>
              <v-row class="flex-column mt-4">
                <v-col class="d-flex align-center justify-start">
                  <v-icon color="info" icon="mdi-calendar-blank"></v-icon>
                  <h2 class="ml-2">정기 모임</h2>
                </v-col>
              </v-row>
              <p>매주 월요일과 화요일에 정기 모임을 통해 스터디와 프로젝트를 진행합니다.</p>
              <v-row class="flex-column mt-4">
                <v-col class="d-flex align-center justify-start">
                  <v-icon color="info" icon="mdi-book-open-blank-variant-outline"></v-icon>
                  <h2 class="ml-2">학습 자료</h2>
                </v-col>
              </v-row>
              <p>선배들이 만든 학습 자료와 프로젝트 경험을 공유하여 효율적인 학습을 돕습니다.</p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
              <v-img
                :aspect-ratio="1"
                src="https://i.pinimg.com/736x/39/a8/50/39a8501e67487fa210b870e5f515c33c.jpg"
                max-width="500"
                cover
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!--섹션3-->
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="d-flex flex-column justify-center">
          <div class="my-2 d-flex justify-center align-center text-center">
            <v-card rounded="lg" width="150" variant="tonal" justify="center" align="center">
              <v-icon icon="mdi-laptop"></v-icon>
              <span class="ml-2">주요 활동</span>
            </v-card>
          </div>
          <div class="text-center font-weight-bold text-lg-h2 text-md-h3 text-sm-h3 text-h4 mb-4">우리는 이런 활동을 합니다
          </div>
          <p class="text-center text-h6">EAGU에서는 다양한 활동을 통해 동아리원들의 프로그래밍 실력 향상과 네트워킹을 지원합니다.</p>
          <v-row class="mt-4 flex-row">
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex align-center justify-start">
              <v-card width="400" height="150" prepend-icon="mdi-book-open-blank-variant-outline">
                <v-card-title>스터디 그룹</v-card-title>
                <v-card-text>웹 개발, 앱 개발, 알고리즘 등 다양한 주제의 스터디 그룹을 운영합니다.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex align-center justify-start">
              <v-card width="400" height="150" prepend-icon="mdi-laptop">
                <v-card-title>프로젝트</v-card-title>
                <v-card-text>학기마다 프로젝트를 개발합니다.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex align-center justify-start">
              <v-card width="400" height="150" prepend-icon="mdi-account-multiple-outline">
                <v-card-title>기술 세미나</v-card-title>
                <v-card-text>최신 기술 트렌드와 개발 경험을 공유하는 세미나를 정기적으로 개최합니다.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex align-center justify-start">
              <v-card width="400" height="150" prepend-icon="mdi-github">
                <v-card-title>오픈소스 기여</v-card-title>
                <v-card-text>다양한 오픈소스 프로젝트에 기여하며 실무 경험을 쌓습니다.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex align-center justify-start">
              <v-card width="400" height="150" prepend-icon="mdi-import">
                <v-card-title>공모전 및 활동</v-card-title>
                <v-card-text>공모전과 교내 & 교외 대회에 참여합니다.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="4" class="d-flex align-center justify-start">
              <v-card width="400" height="150" prepend-icon="mdi-code-braces">
                <v-card-title>코딩 대회</v-card-title>
                <v-card-text>교내외 코딩 대회에 참가하여 문제 해결 능력을 향상시킵니다.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!--섹션4-->
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="d-flex flex-column justify-center">
          <div class="my-2 d-flex justify-center align-center text-center">
            <v-card rounded="lg" width="150" variant="tonal" justify="center" align="center">
              <v-icon icon="mdi-github"></v-icon>
              <span class="ml-2">프로젝트</span>
            </v-card>
          </div>
          <div class="text-center font-weight-bold text-lg-h2 text-md-h3 text-sm-h3 text-h4 mb-4">우리의 프로젝트</div>
          <p class="text-center text-h6">EAGU 회원들이 함께 개발한 다양한 프로젝트를 소개합니다.</p>
          <v-card>
            <v-tabs
              v-model="tab"
              align-tabs="center"
              color="black"
            >
              <v-tab :value="1">웹개발</v-tab>
              <v-tab :value="2">앱개발</v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item
                v-for="n in 2"
                :key="n"
                :value="n"
              >
                <v-container fluid>
                  <v-row>
                    <v-col
                      v-for="i in 3"
                      :key="i"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-card
                        variant="plain"
                        hover>
                        <v-img
                          class="hover-zoom"
                          :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                          :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          cover
                        >
                        </v-img>
                        <v-card-title>프로젝트이름</v-card-title>
                        <v-card-subtitle>프로젝트설명</v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import {ref} from 'vue'

const tab = ref(null)
// const title =ref(null)

</script>

<style scoped>
.section-container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  margin: 0 auto;
}

section {
  height: 100vh;
  scroll-snap-align: start;
  padding: 3rem 1rem;
  box-sizing: border-box;
}

.page {
  display: flex;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  padding: 2em;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
}

.hover-zoom {
  transition: transform 0.3s ease;
}

.hover-zoom:hover {
  transform: scale(1.05);
}
</style>
