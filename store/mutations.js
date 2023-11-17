import Vuetify from 'vuetify'

export default{
    setCounter(state, val){
        state.counter = val
    },
    setAccountMenuFlag(state, val){
        state.accountMenuFlag = val;
    },
    setLanguage(state, val){
      state.language = val;
    },
    setUserIP(state, val){
      state.userIP = value;
    },
    setLocation(state, val){
      state.location = val;
    },
    setUserToken(state, val){
      state.userToken = val;
    },
    setAdminToken(state, val){
      state.adminToken = val;
    }
}
