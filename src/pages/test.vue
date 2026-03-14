<template>
  <v-container>
    <!-- 탭 네비게이션 -->
    <v-tabs v-model="activeTab" grow>
      <v-tab v-for="(tab, index) in tabs" :key="index">
        {{ tab.label }}
      </v-tab>
    </v-tabs>

    <!-- 활성 탭에 따라 동적 컴포넌트 로딩 -->
    <component :is="activeComponent"/>
  </v-container>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import axios from 'axios';
import EditAbout from '@/pages/edit/edit-about.vue'; // edit-about-test.vue 파일 경로에 맞게 import
import EditActivities from '@/pages/edit/edit-activities.vue';
import EditBenefits from '@/pages/edit/edit-benefits.vue';
import EditGallery from '@/pages/edit/edit-gallery.vue';
import EditMembers from '@/pages/edit/edit-members.vue';
import EditNotice from '@/pages/edit/edit-notice.vue';

// 탭 데이터: 각 섹션에 대한 라벨과 키
const tabs = [
  {label: 'About', key: 'about'},
  {label: 'Activities', key: 'activities'},
  {label: 'Benefits', key: 'benefits'},
  {label: 'Gallery', key: 'gallery'},
  {label: 'Members', key: 'members'},
  {label: 'Notice', key: 'notice'},
];

// 현재 활성 탭의 인덱스 관리
const activeTab = ref(0);

// 활성 탭 정보를 computed로 반환
const activeSection = computed(() => tabs[activeTab.value]);

// 활성 탭에 따라 사용할 컴포넌트를 동적으로 결정
const activeComponent = computed(() => {
  switch (activeSection.value.key) {
    case 'about':
      return EditAbout;
    case 'activities':
      return EditActivities;
    case 'benefits':
      return EditBenefits;
    case 'gallery':
      return EditGallery;
    case 'members':
      return EditMembers;
    case 'notice':
      return EditNotice;
    // 다른 섹션은 기본적으로 기존 activeContent를 렌더링하는 임시 컴포넌트로 대체할 수 있음
    default:
      return {
        template: `
          <div v-html="content"></div>`,
        props: ['content'],
        setup() {
          // 이 예시에서는 단순 텍스트 데이터를 보여줍니다.
          return {};
        },
      };
  }
});

// DB에서 데이터를 불러오는 예시 (필요 시 각 컴포넌트 내에서 별도로 처리할 수도 있음)
onMounted(() => {
  axios.get('/api/admin-content')
    .then(() => {
      // 예를 들어, response.data가 { about: [ ... ], activities: '...', ... } 형태라면
      // 각 탭별 데이터를 별도로 관리하거나, 자식 컴포넌트(EditAbout 등)로 전달할 수 있습니다.
      // 이 예시에서는 EditAbout 컴포넌트 내에서 DB 호출을 직접 수행하는 방법도 고려할 수 있습니다.
    })
    .catch(error => {
      console.error('Error loading admin content', error);
    });
});
</script>

<style scoped>
/* 필요에 따라 스타일 추가 */
</style>
