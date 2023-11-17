<template>
    <div>
      <topSiteHeader/>
      <mainMenu id="mainMenu"/>
      <div id="container">
        <!-- <leftSide v-if="this.$store.getters.getLanguage === 'eng'" id="leftSide"/> -->
        <nuxt id="mainCon"></nuxt>
        <leftSide id="rightSide"/>
      </div>
      <siteFooter/>
      <siteBy/>
    </div>
  </template>

  <script>

  import siteHeader from "@/components/header.vue"
  import mainMenu from '@/components/headerSection3'
  import siteFooter from "@/components/footer"
  import siteBy from "@/components/siteBy"
  import leftSide from "@/components/leftSide"

  export default {

    name: 'default',

    components:{
      'siteFooter': siteFooter,
      'siteBy': siteBy,
      'topSiteHeader': siteHeader,
      'mainMenu': mainMenu,
      'leftSide': leftSide
    },

    data () {
      return {

      }
    }

  }

  </script>

  <style lang="scss" scoped>
    @import '@/assets/mainStyles.scss';
    #mainMenu{
      position: sticky;
      top: 0;
      z-index: 999;
    }
    #container{
      display: flex;
      width: $mainContainer;
      margin: auto;
    }
    #leftSide, #rightSide{
      min-width: 24%;
    }
    #mainCon{
      min-width: 76%;
    }
    @media screen and (max-width: 576px) {
      #container{
        flex-flow: column;
      }
      #section1>div:first-child{
          display: none;
      }
      #section1>div:last-child{
          margin: auto;
      }
    }
    @media screen and (min-width: 577px)  and (max-width: 768px){
      #container{
        flex-flow: column;
      }
      #section1>div:first-child{
          display: none;
      }
      #section1>div:last-child{
          margin: auto
      }
    }
    @media screen and (min-width: 769px)  and (max-width: 992px){
      #container{
        flex-flow: column;
      }
    }
    @media screen and (min-width: 993px)  and (max-width: 1200px){
      #container{
        flex-flow: column;
      }
    }
    @media screen and (min-width: 1200px){

    }
  </style>
