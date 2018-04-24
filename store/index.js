import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      wizardStep: 1,
      wizardMax: 7
    },
    mutations: {
      wizardStep(state, payload) {
        return state.wizardStep = payload
      }
    },
    actions: {
      wizardNext(context) {
        if (context.state.wizardStep < context.state.wizardMax) {
          context.commit('wizardStep', context.state.wizardStep + 1)
        }
      },
      wizardBack (context) {
        if (context.state.wizardStep > 1) {
          context.commit('wizardStep', context.state.wizardStep - 1)
        }
      }
    },
    getters: {
      wizardStep(state) {
        return state.wizardStep
      }
    }
  })
}

export default createStore
