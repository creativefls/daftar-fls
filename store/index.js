import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      roomSelected: ''
    },
    mutations: {
      roomSelected (state, payload) {
        return state.roomSelected = payload
      }
    },
    actions: {
    },
    getters: {
    }
  })
}

export default createStore
