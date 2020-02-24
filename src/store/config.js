export default {
  state: {
    screenConfig: {},
    lampTheme: 'blue',
    bridgeTheme: 'blue'
  },
  mutations: {
    lampSetTheme (state, status) {
      state.lampTheme = status
    },
    bridgeSetTheme (state, status) {
      state.bridgeTheme = status
    }
  },
  getters: {
    lampTheme: state => state.lampTheme,
    bridgeTheme: state => state.bridgeTheme
  },
  actions: {
  }
}
