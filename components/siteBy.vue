<template>
  <div id="siteBy">
    <div>
      طراحی و تولید در شایا پردازش بیتا
    </div>
    <div>
      تمامی حقوق سایت متعلق به رویال تاد می باشد
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/mainStyles.scss';
  #siteBy{
    display: flex;
    direction: rtl;
    // justify-content: space-around;
    font-family: royal;
    color: $textLightColor;
    background-color: rgb(34, 33, 33);
    padding: 0.6rem;
    padding-right: 9rem;
    font-size: 0.9rem;
    div{
      margin-left: 3rem;
    }
  }
</style>
