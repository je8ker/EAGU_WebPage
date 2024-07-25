<template>
  <v-app>
    <header>
      <Header/>
    </header>
    <v-main>
      <router-view/>
    </v-main>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>
<!--깃허브 왜이럼?-->
<script setup>
//
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>

header {
  position: fixed;
  top: 0;
  z-index: 100;
}
</style>

