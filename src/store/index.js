// store/index.js

import { createStore } from 'vuex'

export default createStore({
  // data
  state() {
    return {
      title: 'd',
      description: '',
      link: '',
    }
  },
  // methods 同步
  mutations: {
    updateStoredValue(state, newValue) {
      state.title = newValue[0]
      state.description = newValue[1]
      state.link = newValue[2]
      console.log('newValue' + newValue)
    },
  },
  // methods 异步
  actions: {
    transmitValue({ commit }, newValue) {
      commit('updateInputValue', newValue)
    },
  },
  // computed
  getters: {
    getInputValue: (state) => state.inputValue,
  },
})
