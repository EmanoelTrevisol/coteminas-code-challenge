import Vue from 'vue';

export default {
  updateListData(state, obj) {
    Object.keys(obj).forEach((key) => {
      Vue.set(state, key, obj[key]);
    });
  },
};
