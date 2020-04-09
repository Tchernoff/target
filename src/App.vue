<template>
  <v-app>
    <v-content>
      <cityAutocomplete/>
    </v-content>
  </v-app>
</template>

<script>
import cityAutocomplete from './components/cityAutocomplete.vue';

export default {
  name: 'App',

  components: {
    cityAutocomplete,
  },

  data: () => ({
    //
  }),
};
</script>
