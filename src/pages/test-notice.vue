<template>
  <v-img max-height="200" cover src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex align-center justify-center fill-height">
      <h1 class="white-text">공지사항</h1>
    </div>
  </v-img>
  <div class="d-flex justify-center align-center">
    <div data-aos="fade-up" data-aos-duration="1000">
      <br>
      <div
        :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2">
        <div v-if="notice">
          <p>동아리 활동정보</p>
          <v-divider class="border-opacity-50" color="white"/>
          <p><br/>모임시간</p>
          <p>{{ notice.meetingTime }}</p>
          <p><br/>회비</p>
          <p>{{ notice.fee }}</p>
          <p><br/>신규인원</p>
          <p>{{ notice.newMemberfee }}</p>
        </div>
        <div v-else>
          불러오는중...
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import router from "@/router";
import axios from "axios";

export default {
  data() {
    return {
      notice: {
        meetingTime: '',
        fee: '',
        newMemberfee: '',
      }
    }
  },

  mounted() {
    this.fetchClubInfo();
  },

  methods: {
    fetchClubInfo() {
      axios.get('/api/notice')
        .then(res => {
          this.notice = res.data;
        })
        .catch(error => {
          console.error('데이터 불러오기 오류:', error);
        });
    },
    updateClubInfo() {
      axios.put('/api/notice', this.notice)
        .then(() => {
          console.log('정보가 성공적으로 업데이트되었습니다.');
        })
        .catch(error => {
          console.error('정보 업데이트 오류:', error);
        });
    },
    movepage(path) {
      router.push(path);
    }
  },
}
</script>

<style scoped>
.Mainname {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  justify-content: center;
}

</style>
