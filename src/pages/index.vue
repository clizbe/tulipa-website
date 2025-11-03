<template>
  <!--
  XFeatures
  Applications?
  Why Tulipa
  Unit Day video(?) but cleaner and less aggressive?
  Mailing list?
  Packages?
  -->
  <v-container class="mx-auto" max-width="1500">
    <div>
      <v-img
        class="ma-10"
        height="250"
        src="/logos/logo.png"
      />

      <div class="mb-8 text-center">
        <h1 class="text-h3 font-weight-bold">
          Tulipa is an open-source framework <br> for analyzing energy systems.
        </h1>
      </div>
    </div>
  </v-container>

  <Features/>

  <v-container class="mx-auto" max-width="1500">
      <div class="mt-14 mb-8 text-center">
        <h1 class="text-h3 font-weight-bold">
          Why build a new model?
        </h1>
        <div class="my-8"></div>
        <p>
          We saw a new way of energy system modelling, one that would be nearly impossible to implement in a current model – better to start fresh. <br>  </br>
          While new features can be added to existing models, Tulipa is built differently from the foundation upwards.
        </p>
      </div>

  </v-container>

</template>

<script setup>
import Features from '@/components/Features.vue'
</script>
