<template>
  <!--
  Features
  Applications?
  Why Tulipa
  Unit Day video(?) but cleaner
  Mailing list?
  Packages?
  -->
  <v-container class="mx-auto" max-width="1500">
    <div>
      <v-img
        class="ma-10"
        height="250"
        src="@/assets/logo.png"
      />

      <div class="mb-8 text-center">
        <h1 class="text-h3 font-weight-bold">
          Tulipa is an open-source framework <br> for analyzing energy systems.
        </h1>
      </div>
    </div>
  </v-container>

  <Features/>
</template>

<script setup>
import Features from '@/components/Features.vue'
</script>
