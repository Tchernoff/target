<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          @keyup="search()"
          v-model="selectedItems"
          :loading="loading"
          :error-messages="errorMessages"
          :error="error"
          :items="itemList"
          item-text="name"
          item-value="name"
          :label="label"
          :persistent-hint='loading'
          :prepend-icon="icon"
          chips
          multiple
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
// import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  // computed: mapState([
  //   'title',
  //   'label',
  //   'placeholder',
  //   'icon',
  //   'itemList',
  //   'error',
  //   'errorMessages',
  //   'loading',
  //   'selected',
  // ]),
  computed: {
    title() {
      return this.$store.state.citySelection.title;
    },
    label() {
      return this.$store.state.citySelection.label;
    },
    placeholder() {
      return this.$store.state.citySelection.placeholder;
    },
    icon() {
      return this.$store.state.citySelection.icon;
    },
    itemList() {
      return this.$store.state.citySelection.itemList;
    },
    errorMessages() {
      return this.$store.state.citySelection.errorMessages;
    },
    error() {
      return this.$store.state.citySelection.error;
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
      if (this.$store.state.citySelection.itemList.length > 0) return;
      if (this.$store.state.citySelection.loading) return;
      this.$store.dispatch('loadItemList');
    },
    remove(item) {
      // this.$store.dispatch('remove');
      this.$store.commit('REMOVE_ITEM', item);
    },
  },
};
</script>
