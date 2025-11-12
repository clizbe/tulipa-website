<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');

h1, h2, h3, h4, h5, h6,
.text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6,
.v-card-title {
  font-family: 'Poppins', sans-serif !important;
}

body, p, span,
.text-body1, .text-body2,
.v-list-item-title {
  font-family: 'Roboto', sans-serif !important;
}
</style>
