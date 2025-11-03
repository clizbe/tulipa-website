<template>
  <v-app>


    
      <AppBar />
      <router-view />
      <Footer />



  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import Footer from '@/components/Footer.vue'
</script>
