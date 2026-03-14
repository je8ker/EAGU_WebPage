<template>
  <v-app>
    <div v-if="$vuetify.display.mdAndUp">
      <DesktopHeader/>
    </div>
    <div v-else>
      <MobileHeader/>
    </div>
    <v-main>
      <router-view/>
    </v-main>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>
<script setup>
//
import DesktopHeader from "frontend/src/components/DesktopHeader.vue";
import Footer from "frontend/src/components/Footer.vue";
import MobileHeader from "frontend/src/components/MobileHeader.vue";
// import {useRouter} from "vue-router";

</script>

<style>
/*폰트설정*/
@font-face {
  font-family: 'Noto Sans';
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: 'Noto Sans', sans-serif;
}
</style>


