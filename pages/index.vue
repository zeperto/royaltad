<template>
  <div id="hey">
    <carousel/>
    <ourService/>
    <trendingProducts/>
    <fourBanner/>
    <specials/>
    <latestNews/>
  </div>
</template>

<script>

import carousel from "@/components/carousel.vue"
import ourService from "@/components/ourService"
import trendingProducts from "@/components/trendingProducts"
import fourBanner from "@/components/fourBanner"
import specials from "@/components/specials"
import latestNews from "@/components/latestNews"

export default {

  name: 'index',

  components:{
    'carousel': carousel,
    'ourService': ourService,
    'trendingProducts': trendingProducts,
    'fourBanner': fourBanner,
    'specials': specials,
    'latestNews': latestNews
  },
  data () {
    return {

    }
  },
  head () {
    return {
      title: this.$store.getters.getTitle,
    }
  },

  async asyncData({ $axios, store }) {
    /*await $axios.get(`http://localhost:8000/api/location`).then(response => {
      store.commit('setLocation', response.data);
    });*/
  }

}

</script>

<style lang="scss" scoped>
  @import "@/assets/mainStyles.scss";
  #hey{
    color: red;
    p{
      color: blue;
      font-weight: bold;
      font-size: 30px;
    }
  }
  #mainMenu{
    position: sticky;
    top: 0;
    z-index: 7;
  }
</style>
