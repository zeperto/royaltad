export default {
    counterUp({ state, commit }){
        commit('setCounter', state.counter + 1)
    },
    /*nuxtServerInit(vuexContext, context) {
      // console.log('111');
      this.$axios.get('http://localhost:8000/api/location').then((response) => {
        console.log(response.data);
      });
    },*/
}
