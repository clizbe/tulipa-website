<template>
  <v-card
    class="mx-auto"
    max-width="1500"
    rounded="lg"
  >
    <v-row class="pa-4">
      <v-col
      v-for="(item, index) in feature_list"
      :key="index"
      cols="12"
      md="6"
      >
      <v-list lines="one">
        <v-list-item
        :title="item.title"
        :subtitle="item.subtitle"
        prepend-icon="mdi-check-circle-outline"
        >
        </v-list-item>
      </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
  const feature_list = [
    {
      title: 'Investment Optimisation',
      subtitle: 'Expand future energy systems to meet demands at the lowest societal cost.',
    },
    {
      title: 'Dispatch Optimisation',
      subtitle: 'Optimize operations of energy systems to assess policy impacts.',
    },
    {
      title: 'All Technologies',
      subtitle: 'Configure technological limits through data.',
    },
    {
      title: 'All Energy Carriers and Materials',
      subtitle: 'Electricity, gas, hydrogen, heat, biomass, plastic, apples, you name it.',
    },
    {
      title: 'Any Geographical Area',
      subtitle: 'Regional, national, or continental - it all depends on data.',
    },
    {
      title: 'Mixed Levels of Detail',
      subtitle: 'Zoom-in on the area of interest, while keeping the rest in scope.',
    },
    {
      title: 'Complex Processes',
      subtitle: 'Model virtually any process using multi-input, multi-output conversion assets.',
    },
    {
      title: 'Short and Long-term storage',
      subtitle: 'Bring long-term storage to day-ahead markets to compete with other options.',
    },
    {
      title: 'Multi-year Transition Pathways',
      subtitle: 'Find and compare optimal transition pathways for the coming decades.',
    },
    {
      title: 'Generalized Assets',
      subtitle: 'Model any system using Producers, Consumers, Storage, Converters, and Flows.',
    },
  ]
</script>
