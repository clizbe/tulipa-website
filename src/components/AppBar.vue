<template>
  <v-app-bar :elevation="2" rounded color="background">
    <v-app-bar-title>
      <router-link to="/" class="title-link">
        Tulipa Energy
      </router-link>
    </v-app-bar-title>

    <v-btn
      :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click="toggleTheme"
      variant="text"
    ></v-btn>

    <v-btn text="Home" to="/"></v-btn>

    <v-btn text="Learn" to="/Learn"></v-btn>

    <v-btn text="About" to="/About"></v-btn>

    <v-btn rounded="xl" text="Get Started" variant="outlined" color="purple" href="https://tulipaenergy.github.io/TulipaEnergyModel.jl/stable/20-user-guide/00-getting-started/"></v-btn>

    <v-btn icon="mdi-github" href="https://github.com/TulipaEnergy/TulipaEnergyModel.jl"></v-btn>

  </v-app-bar>

</template>

<script setup>
import { useTheme } from 'vuetify'
import { ref, computed } from 'vue'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<style scoped>
.title-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

.title-link:hover {
  color: inherit;
}
</style>
