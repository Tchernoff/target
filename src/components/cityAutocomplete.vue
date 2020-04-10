<template>
  <v-container>
    <v-card>
      <v-card-title>
        Города
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          @keyup="search()"
          v-model="selectedItems"
          :loading="loading"
          :error-messages="errorMessages"
          :error="errorMessages !== null"
          hide-no-data
          hide-selected
          :items="itemList"
          item-text="name"
          item-value="cid"
          label="Города России"
          prepend-icon="mdi-city"
          chips
          multiple
          placeholder="Начните вводить название города"
        >
          <template v-slot:selection="selectedItems">
            <v-chip
              :input-value="selectedItems.selected"
              close
              @click="selectedItems.select"
              @click:close="remove(selectedItems.item)"
            >
              {{ selectedItems.item.name }}
            </v-chip>
          </template>
        </v-autocomplete>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'cityAutocomplete',
  computed: {
    itemList() {
      return this.$store.state.citySelection.itemList;
    },
    errorMessages() {
      return this.$store.state.citySelection.errorMessages;
    },
    loading() {
      return this.$store.state.citySelection.loading;
    },
    selectedItems: {
      get() {
        return this.$store.state.citySelection.selectedItems;
      },
      set(value) {
        this.$store.commit('UPDATE_SELECTED', value);
      },
    },
  },
  methods: {
    search() {
      this.$store.dispatch('loadItemList');
    },
    remove(item) {
      this.$store.commit('REMOVE_ITEM', item);
    },
  },
};
</script>
