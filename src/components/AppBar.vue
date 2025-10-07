<template>
  <v-app-bar :elevation="2" rounded>
    <v-app-bar-title>Tulipa Energy</v-app-bar-title>

    <v-btn text="Home" to="/"></v-btn>

    <v-btn text="Learn" to="/Learn"></v-btn>

    <v-btn text="About" to="/About"></v-btn>

    <v-btn rounded="xl" text="Get Started" variant="outlined" color="purple" href="https://tulipaenergy.github.io/TulipaEnergyModel.jl/stable/20-user-guide/00-getting-started/"></v-btn>

    <v-btn icon="mdi-github" href="https://github.com/TulipaEnergy/TulipaEnergyModel.jl"></v-btn>

  </v-app-bar>

</template>
