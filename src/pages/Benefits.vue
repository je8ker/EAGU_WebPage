<template>
  <v-sheet
    class="d-flex bg-black align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="100%"
    width="100%"
    rounded
  >
    <div>
      <h2
        :class="{'text-h2 font-weight-black text-pink': !$vuetify.display.smAndDown,'text-h3 font-weight-black text-pink': $vuetify.display.smAndDown,}">
        회원혜택</h2>
      <br>
      <div :class="{'text-h4 font-weight-bold mb-2': !$vuetify.display.smAndDown,'text-h5 font-weight-bold mb-2': $vuetify.display.smAndDown }">
        동아리실 사용<br><br>
        간식 제공<br><br>
        카페인 제공<br><br>
        겨울에는 귤을 지급한다!<br><br>
      </div>
    </div>
  </v-sheet>
</template>


<script setup>

</script>


<style scoped>

</style>
