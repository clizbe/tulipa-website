<template>
  <v-card
    class="mx-auto"
    max-width="1500"
    title="Scope & Features"
    rounded="lg"
  >
    <v-row>
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
      subtitle: 'Expand future energy systems to meet demands at the lowest cost.',
    },
    {
      title: 'Dispatch Optimisation',
      subtitle: 'Optimize operations of energy systems to assess policy impacts.',
    },
    {
      title: 'All technologies',
      subtitle: 'Configure technological limits through data.',
    },
    {
      title: 'All energy carriers and materials',
      subtitle: 'Electricity, gas, hydrogen, heat, biomass, plastic, apples...',
    },
    {
      title: 'Any geographical area',
      subtitle: 'Regional, national, or continental - it only depends on data.',
    },
    {
      title: 'Flexible Levels of Detail',
      subtitle: 'Tailor the geographical, temporal, and technological resolution to answer the question at hand.',
    },
    {
      title: 'Complex processes',
      subtitle: 'Model virtually any process using multi-input, multi-output conversion units.',
    },
    {
      title: 'Short and Long-term storage',
      subtitle: 'subtitle',
    },
    {
      title: 'Item #6',
      subtitle: 'subtitle',
    },
    {
      title: 'Item #6',
      subtitle: 'subtitle',
    },
  ]
</script>
