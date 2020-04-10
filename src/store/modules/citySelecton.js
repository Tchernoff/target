import axios from 'axios';

const ERROR_MESSAGES = {
  SERVER_ERROR: 'Не удалось получить данные с сервера',
};

const getters = {
};

const actions = {
  loadItemList({ state, commit }) {
    if (state.itemList.length === 0 && state.loading === false) {
      commit('SET_LOADING_STATUS', true);
      axios
        .get('https://vktarget.ru/cities.php?json=1')
        .then(response => response.data)
        .then((itemList) => {
          commit('SET_ITEM_LIST', itemList);
          commit('SET_ERRORS', null);
        })
        .catch((error) => {
          console.log(error);
          commit('SET_ERRORS', ERROR_MESSAGES.SERVER_ERROR);
        })
        .finally(() => {
          commit('SET_LOADING_STATUS', false);
        });
    }
  },
};

const mutations = {
  SET_ITEM_LIST(state, itemList) {
    state.itemList = itemList;
  },
  SET_ERRORS(state, error) {
    state.errorMessages = error;
  },
  SET_LOADING_STATUS(state, status) {
    state.loading = status;
  },
  UPDATE_SELECTED(state, selectedItems) {
    state.selectedItems = selectedItems;
  },
  REMOVE_ITEM(state, item) {
    const index = state.selectedItems.indexOf(item.cid);
    if (index >= 0) state.selectedItems.splice(index, 1);
  },
};

const state = {
  errorMessages: null,
  itemList: [],
  loading: false,
  selectedItems: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
