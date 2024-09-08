<template>
  <h3 class="text-center text-light-blue">
   회원소개</h3>
  <v-container>
    <v-row>
      <v-col
        v-for="user in users"
        :key="user.title"
        class="d-flex child-flex"
        cols="6"
      >
        <v-card
          class="mx-auto"
          width="434"
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
              Name: {{ user.name }}
            </v-card-title>
            <v-card-subtitle>
              Positions: {{ user.Positions }}
            </v-card-subtitle>
          </v-card-item>
          <v-card-text>
            Tech_Stack: {{ user.Tech_Stack }}<br>
            Tech_Position: {{ user.Dev_position }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="olduser in oldusers"
        :key="olduser.title"
        class="d-flex child-flex"
        cols="6"
      >
        <v-card
          class="mx-auto"
          width="434"
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
              Name: {{ olduser.name }}
            </v-card-title>

            <v-card-subtitle>
              Positions: {{ olduser.Positions }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            Tech_Stack: {{ olduser.Tech_Stack }}<br>
            Tech_Position: {{ olduser.Dev_position }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {name: '이종원', Positions: '2대 회장', Tech_Stack: 'PM', Dev_position: 'Full stack'},
        {name: '정수민', Positions: '부회장', Tech_Stack: 'PL',Dev_position: 'Full stack'},
        {name: '강현민', Positions: '팀원', Tech_Stack: 'Dev',Dev_position:'Frontend'},
        {name: '정동현', Positions: '팀원', Tech_Stack: 'Dev',Dev_position:'Frontend'},
        {name: '전상현', Positions: '팀원', Tech_Stack: 'Dev ',Dev_position:'Frontend'},
        {name: '신용범', Positions: '팀원', Tech_Stack: 'Dev', Dev_position:'Frontend'},
        {name: '한성희', Positions: '팀원', Tech_Stack: 'Dev',Dev_position:'Frontend'},
        {name: '채지숙', Positions: '팀원', Tech_Stack: 'Dev',Dev_position:'AI'},
        {name: '임수연', Positions: '팀원', Tech_Stack: 'Dev',Dev_position:'AI'},
        {name: '김민진', Positions: '팀원', Tech_Stack: 'Dev', Dev_position:'Backend'},
        {name: '정서인', Positions: '팀원', Tech_Stack: 'Dev', Dev_position:'Backend'}
      ],
      oldusers: [
        {name: '문주희', Positions: '1대 회장', Tech_Stack: 'Null', Dev_position: 'Null'},
        {name: '정다훈', Positions: 'Null', Tech_Stack: 'Null', Dev_position: 'Null'},
        {name: '박진기', Positions: 'Null', Tech_Stack: 'Null', Dev_position: 'Null'},
      ],
    };
  },
};
</script>
<style>
h3{
  font-size: 10vw;
  margin-top: 10px;
  font-weight: bold;
}
</style>
