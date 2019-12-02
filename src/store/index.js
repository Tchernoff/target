import Vue from 'vue';
import Vuex from 'vuex';
import citySelection from './modules/citySelecton';

// const ERROR_MESSAGES = {
//   SERVER_ERROR: 'Не удалось получить данные с сервера',
//   NO_ERROR: '',
// };

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    citySelection,
  },
  state: {
    // title: 'Города',
    // label: 'Города России',
    // placeholder: 'Начните вводить название города',
    // icon: 'mdi-city',
    // errorMessages: [],
    // selected: [],
    // itemList: [],
    // loading: false,
    // message: null,
  },
  mutations: {
    // SET_ITEM_LIST(state, itemList) {
    //   state.itemList = itemList;
    // },
    // SET_ERRORS(state, error) {
    //   state.errorMessages = error;
    // },
    // SET_LOADING_STATUS(state, status) {
    //   state.loading = status;
    // },
    // updateMessage(state, message) {
    //   state.message = message;
    // },
    // REMOVE_ITEM(state, item) {
    //   const index = state.message.indexOf(item.name);
    //   if (index >= 0) state.message.splice(index, 1);
    // },
  },
  actions: {
    // loadItemList({ commit }) {
    //   commit('SET_LOADING_STATUS', true);
    //   axios
    //     .get('https://vktarget.ru/cities.php?json=1')
    //     .then(response => response.data)
    //     .then((itemList) => {
    //       commit('SET_ITEM_LIST', itemList);
    //       commit('SET_LOADING_STATUS', false);
    //       commit('SET_ERRORS', ERROR_MESSAGES.NO_ERROR);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       commit('SET_LOADING_STATUS', false);
    //       commit('SET_ERRORS', ERROR_MESSAGES.SERVER_ERROR);
    //     });
    // },
  },
});
