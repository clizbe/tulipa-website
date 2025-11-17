<template>
  <v-app-bar color="background" :elevation="2" rounded>
    <v-app-bar-title>
      <router-link class="title-link" to="/">
        Tulipa Energy
      </router-link>
    </v-app-bar-title>

    <v-btn
      :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      variant="text"
      @click="toggleTheme"
    />

    <v-btn text="Home" to="/" />

    <v-btn text="Learn" to="/Learn" />

    <v-btn text="About" to="/About" />

    <v-btn
      color="purple"
      href="https://tulipaenergy.github.io/TulipaEnergyModel.jl/stable/20-user-guide/00-getting-started/"
      rounded="xl"
      text="Get Started"
      variant="outlined"
    />

    <v-btn href="https://github.com/TulipaEnergy/TulipaEnergyModel.jl" icon="mdi-github" />

  </v-app-bar>

</template>

<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const isDark = computed(() => theme.global.name.value === 'dark')

  function toggleTheme () {
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
