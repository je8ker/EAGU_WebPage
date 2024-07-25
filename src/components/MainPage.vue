<template>
  <div class="container" :style="{ backgroundColor: containerBgColor }">
    <h1
      v-for="(section, index) in sections"
      :key="index"
      class="section"
      :style="{ transform: `scale(${section.scale})`, backgroundColor: section.bgColor }"
    >
      <template v-for="(line, lineIndex) in section.title" :key="lineIndex">
        {{ line }}
        <br v-if="lineIndex < section.title.length - 1">
      </template>
    </h1>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const sections = ref([
  /*소개*/
  {title: ['EAGU는 어떤', '동아리인가요?'], scale: 1, bgColor: 'black'},
  {title: ['다양한 수준의 프로그래머들이', '모여 함께 배우고', '성장하는 동아리입니다.'], scale: 1, bgColor: 'black'},
  {title: ['코딩에 열정을 가진 ', '학생들의 커뮤니티로 ', '서로의 지식과 경험을', '공유합니다.'], scale: 1, bgColor: 'black'},
  {title: ['실제 프로젝트 개발과 ', '최신 기술 학습을 통해 ', '실력을 향상시키는 것을', '목표로 합니다.'], scale: 1, bgColor: 'black'},
  /*소개2*/
  {title: ['실제 프로젝트 참여를','통한 실전 능력 향상'], scale: 1, bgColor: 'black'},
  {title: ['비슷한 관심사를 ','가진 동료들과의 교류'], scale: 1, bgColor: 'black'},
  {title: ['선배 개발자들로부터의','조언과 지도'], scale: 1, bgColor: 'black'},
  {title: ['최신 프로그래밍 트렌드 학습 ', '새로운 기술 습득'], scale: 1, bgColor: 'black'},
  /*소개3*/
  {title: ['주요 활동'], scale: 1, bgColor: 'black'},
  {title: ['정기적인 코딩 모임'], scale: 1, bgColor: 'black'},
  {title: ['해커톤 참가'], scale: 1, bgColor: 'black'},
  {title: ['오픈 소스 프로젝트 기여'], scale: 1, bgColor: 'black'},
  {title: ['기술 블로그 운영'], scale: 1, bgColor: 'black'},
]);

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
      const scaleValue = 1 - scrollFraction / 2;
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
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 페이지 로드 시 초기 배경 색상 설정
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
body {
  margin: 0;
}

h1 {
  font-size: 70px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}

.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-out;
  text-align: center;
  padding: 0 20px;
}
</style>
