<template>
  <v-img src="https://www.dju.ac.kr/images/template/00001/layout/S_visual.jpg">
    <div class="d-flex align-center justify-center fill-height">
      <h1 class="white--text">가입신청</h1>
    </div>
  </v-img>
  <div v-if="!hidesheet" class="d-flex justify-center align-center">
    <div data-aos="fade-up" data-aos-duration="1000">
      <br>
      <div
        :class="{
      'text-h4': !$vuetify.display.smAndDown,
      'text-h5': $vuetify.display.smAndDown,
      }"
        class="font-weight-bold mb-2">
        <div>
          <p>2025년도 신규모집 일정</p>
          <v-divider class="border-opacity-50" color="white"/>
          <p><br/>신청기간</p>
          <p>2월24일(월)~3월7일(금)</p>
          <p><br/>면접</p>
          <p>3월11일(월)~3월12일(화)</p>
          <p></p>
        </div>
        <br><br>
      </div>
      <v-btn size="auto" class="text-h4 font-weight-black" color="red" prepend-icon="mdi-arrow-right" variant="tonal"
             @click="hidesheet = true">지원하기
      </v-btn>
    </div>
  </div>
  <div v-if="hidesheet" class="marginside">
    <v-card
      style="margin-top: 30px"
      class="mx-auto px-5 py-5"
      max-width="50vh"
      max-height="100vh">
      <v-form
        v-model="form"
        ref="form"
        @submit.prevent="onSubmit"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :readonly="loading"
          :rules="namerule"
          class="mb-2"
          label="이름"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="emailrule"
          class="mb-2"
          label="이메일"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="major"
          :readonly="loading"
          :rules="majorrule"
          class="mb-2"
          label="학과"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="student_id_number"
          :readonly="loading"
          :rules="student_id_number_rule"
          class="mb-2"
          label="학번"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="phone_number"
          :readonly="loading"
          :rules="phone_number_rule"
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
  </div>
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
    namerule: [
      v => !!v || '이름은 필수 입력사항입니다.',
      v => !(v && v.length >= 30) || '이름은 30자 이상 입력할 수 없습니다.',
      v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '이름에는 특수문자를 사용할 수 없습니다.'
    ],
    emailrule: [
      v => !!v || '이메일은 필수 입력사항입니다.',
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '이메일에 맞지 않는 형식입니다.'
    ],
    majorrule: [
      v => !!v || '학과는 필수 입력사항입니다.',
      v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '학과에는 특수문자를 사용할 수 없습니다.'
    ],
    student_id_number_rule: [
      v => !!v || '학번은 필수 입력사항입니다.',
      v => /^[0-9]*$/.test(v) || '학번은 숫자만 입력 가능합니다.',
      v => !(v && v.length > 8) || '학번은 8자를 초과할 수 없습니다.'
    ],
    phone_number_rule: [
      v => !!v || '전화번호는 필수 입력사항입니다.',
      v => /^[0-9]*$/.test(v) || '전화번호는 숫자만 입력 가능합니다.'
    ],
  }),


  methods: {

    async onSubmit() {
      const validate = this.$refs.form.validate();
      if (validate) {
        if (!this.form) return;
        this.loading = true;

        try {
          const response = await axios.post('/api/join-us', {  // API 경로 수정
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
      }
    },

    movepage(path) {
      router.push(path);
    },
  },
}
</script>

<style>
.marginside {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
