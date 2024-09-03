<template>
  <v-sheet
    v-if="!hidesheet"
    class="d-flex bg-black align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="100%"
    width="100%"
    rounded
  >
    <div>
      <h2 class="text-h4 font-weight-black text-blue">안녕하세요<br>EAGU입니다</h2>
      <br>
      <h2 class="text-h4 font-weight-black text-orange">모임</h2>
      <div class="text-h5 font-weight-medium mb-2">
        동아리모임은 월,화 평일 오후 18:30- 22:00에 정기모임을 합니다.
      </div>
      <br>
      <h2 class="text-h4 font-weight-black text-green">회비</h2>
      <div class="text-h5 font-weight-medium mb-2">
        매달 1일 10,000원 납부<br>
        3달 미납 시 퇴출<br>
        가입비 50,000원<br>
        (후드, 사원증 , 첫달 회비)
      </div>
      <v-btn size="auto" class="text-h4 font-weight-black" color="red" prepend-icon="mdi-arrow-right" variant="tonal"
             @click="hidesheet = true">신청서작성
      </v-btn>
    </div>
  </v-sheet>

  <v-sheet style="margin-bottom: 20px" v-if="hidesheet" height="100%" class="bg-black" rounded>
    <div class="Mainname">
      가입신청
    </div>
    <v-card
      class="mx-auto px-5 py-5"
      max-width="50vh"
      max-height="100vh">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="name"
          :readonly="loading"
          class="mb-2"
          label="이름"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="email"
          :readonly="loading"
          class="mb-2"
          label="이메일"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="major"
          :readonly="loading"
          class="mb-2"
          label="학과"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="student_id_number"
          :readonly="loading"
          class="mb-2"
          label="학번"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="phone_number"
          :readonly="loading"
          class="mb-2"
          label="핸드폰번호"
          clearable
        ></v-text-field>
        <v-card-actions>
          <v-btn
            @click="hidesheet=false"
            variant="elevated"
            color="red"
          >
            취소
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            type="submit"
            variant="elevated"
          >
            신청
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
import router from "@/router";
import axios from "axios";

export default {
  data: () => ({
    form: false,
    inquiries: [],
    name: null,
    email: null,
    major: null,
    student_id_number: null,
    phone_number: null,
    loading: false,
    formHasErrors: false,
    reveal: false,
    hidesheet: false,
  }),


  methods: {

    async onSubmit() {
      if (!this.form) return;
      this.loading = true;

      try {
        const response = await axios.post('/api/join_us', {  // API 경로 수정
          name: this.name,
          email: this.email,
          major: this.major,
          student_id_number: this.student_id_number,
          phone_number: this.phone_number,
        });

        // 성공적으로 전송되면 새로운 문의를 inquiries 배열에 추가
        this.inquiries.push(response.data);

        // 전송 후 입력 필드 초기화
        this.name = '',
          this.email = '',
          this.major = '',
          this.student_id_number = '',
          this.phone_number = '',

          alert("가입신청이 완료되었습니다.");
        console.log("데이터 다시 불러오기 성공");
      } catch (error) {
        alert('가입신청 중 오류가 발생했습니다.');
        console.error('문의사항 제출 중 오류 발생:', error);

        if (error.response) {
          console.error('응답 데이터:', error.response.data);
          console.error('응답 상태 코드:', error.response.status);
          console.error('응답 헤더:', error.response.headers);
        } else if (error.request) {
          console.error('요청을 보냈지만 응답이 없음:', error.request);
        } else {
          console.error('오류를 발생시킨 요청 설정 중 오류 발생:', error.message);
        }
      } finally {
        this.loading = false; // 로딩 상태 해제
      }
    },

    movepage(path) {
      router.push(path);
    },
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
