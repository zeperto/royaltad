<template>
  <div id="siteHeader">
    <header class="mainContainer">
      <headerSection1/>
      <headerSection2/>
    </header>

  </div>
</template>

<script>

import headerSection1 from '@/components/headerSection1'
import headerSection2 from '@/components/headerSection2'

export default {

  name: 'idheader',

  components:{
    'headerSection1': headerSection1,
    'headerSection2': headerSection2,
  },

  data () {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/mainStyles.scss';
  #siteHeader{
    background-color: $themeColorBack;
    header{
      margin: auto;
    }
  }
</style>
