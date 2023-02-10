import { createStore } from 'vuex'
import http from "../http-common";
export default createStore({
  state: {
      test: "Oje"
  },
  getters: {
  },
  mutations: {
    setTest(state, message) {
      state.test=message
    }
  },
  actions: {
    test(context) {
      http.get("/api").then((value)=>{
        debugger;
      })
    }
  },
  modules: {
  }
})
