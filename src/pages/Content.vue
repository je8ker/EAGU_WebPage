<template>
  <v-sheet height="100%" class="bg-black" rounded>
    <div class="MainTitle">
      글쓰기
    </div>
    <v-card
      class="mx-auto px-6 py-8"
      max-width="90%"
      max-height="80%">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="title"
          :readonly="loading"
          class="mb-2"
          label="제목"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="name"
          :readonly="loading"
          class="mb-2"
          label="이름"
          clearable
        ></v-text-field>
        <v-textarea
          rows="10"
          v-model="content"
          :readonly="loading"
          :rules="[required]"
          label="내용"
          no-resize
          clearable
        ></v-textarea>
        <v-card-actions>
          <v-btn @click="movepage('/community')" variant="text">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              location="left"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="my-0"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="resetForm"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            type="submit"
            variant="elevated"
            @click="resetForm"
          >
            Submit
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
    inquiries:[],
    title: null,
    name: null,
    content: null,
    loading: false,
    formHasErrors: false,
  }),


  methods: {

    async onSubmit() {
      if (!this.form) return;
      this.loading = true;

      try {
        const response = await axios.post('http://localhost:3000/api/content', {  // API 경로 수정
          title: this.title,
          name: this.name,
          content: this.content,
        });

        // 성공적으로 전송되면 새로운 문의를 inquiries 배열에 추가
        this.inquiries.push(response.data);

        // 전송 후 입력 필드 초기화
        this.title = '';
        this.name = '';
        this.content = '';

        alert("문의가 성공적으로 제출되었습니다.");
        console.log("데이터 다시 불러오기 성공");
      } catch (error) {
        console.error('문의사항 제출 중 오류 발생:', error);
        alert('문의사항 제출 중 오류가 발생했습니다.');

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

<style>
.MainTitle {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  justify-content: center;
}

</style>
