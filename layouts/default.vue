<template>
  <div id="topDiv">
    <topSiteHeader/>
    <mainMenu id="mainMenu"/>
    <nuxt></nuxt>
    <siteFooter/>
    <siteBy/>
  </div>
</template>

<script>

import siteHeader from "@/components/header.vue"
import mainMenu from '@/components/headerSection3'
import siteFooter from "@/components/footer"
import siteBy from "@/components/siteBy"


export default {

  name: 'default',

  components:{
    'siteFooter': siteFooter,
    'siteBy': siteBy,
    'topSiteHeader': siteHeader,
    'mainMenu': mainMenu
  },

  head () {
    return {
        titleTemplate: this.setTitle
    }
  },

  data () {
    return {
    }
  },
  computed:{
    setTitle(){
      if(this.$store.getters.getLanguage == 'per')
        return 'فروشگاه آنلاین رویال تاد-' + this.$store.getters.getTitle;
      else
        return 'Royal TAD-' + this.$store.getters.getTitle;
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  #mainMenu{
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>
