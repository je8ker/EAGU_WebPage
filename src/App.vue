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
<script setup>
//
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>

</style>

