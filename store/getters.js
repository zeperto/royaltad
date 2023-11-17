export default {
    getAccountMenuFlagState(state){
        return state.accountMenuFlag;
    },
    getLanguage(state){
      return state.language;
    },
    getUserIP(state){
      return state.userIP;
    },
    getTitle(state){
      if(state.language == 'per'){
        return 'صفحه اصلی';
      }
      else{
        return 'Main';
      }
    },
    getLocation(state){
      return state.location.countryName;
    },
    getAdminToken(state){
      return state.adminToken;
    },
    getUserToken(state){
      return state.userToken;
    }
}
